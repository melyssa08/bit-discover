const QueryConstructor = {
	utils: {
		constructor: {
			filter: (where) => {
				if (!where) {
					return '';
				}
				let filters = '';
				const items = Object.keys(where);
				const values = Object.values(where).map((value) => (typeof value === 'string' ? `'${value}'` : value));

				items.forEach((item, index) => {
					filters += `${item} = ${values[index]} ${index === items.length - 1 ? '' : 'AND '}`;
				});

				return filters;
			},

			data: (data) => {
				if (!data) {
					return '';
				}

				let update = '';
				const items = Object.keys(data);

				items.forEach((key, index) => {
					update += `${key} = ${typeof data[key] === 'string' ? `'${data[key]}'` : data[key]} ${index === items.length - 1 ? '' : ', '}`;
				});

				return update;
			},

			foreignKeys: (state) => {
				return `PRAGMA foreign_keys = ${state ? 'ON' : 'OFF'}`;
			},
		},
	},
	construct: {
		save: (table, data) => {
			const items = Object.keys(data).join(',');
			const values = Object.values(data)
				.map((value) => (typeof value === 'string' ? `'${value}'` : value))
				.join(',');
			return `INSERT INTO ${table} (${items}) VALUES (${values})`;
		},

		filter: (table, { columns, where }) => {
			let filters = '';

			filters = QueryConstructor.utils.constructor.filter(where);

			let query = `SELECT ${columns ? columns.join() : '*'} FROM ${table}`;
			if (filters) query += ` WHERE ${filters}`;

			return query;
		},

		update: (table, data, where) => {
			let filters = '';
			let update = '';

			filters = QueryConstructor.utils.constructor.filter(where);
			update = QueryConstructor.utils.constructor.data(data);

			let query = `UPDATE ${table} SET ${update}`;
			if (filters) query += ` WHERE ${filters}`;

			return query;
		},

		delete: (table, where) => {
			let filters = '';

			filters = QueryConstructor.utils.constructor.filter(where);

			let query = `DELETE FROM ${table}`;
			if (filters) query += ` WHERE ${filters}`;

			return query;
		},

		innerJoin: (table, { columns, where, join, key }) => {
			let filters = '';

			filters = QueryConstructor.utils.constructor.filter(where);

			let query = `SELECT ${columns ? columns.join() : '*'} FROM ${table} INNER JOIN ${join.table} ON ${join.table}.${
				join.property
			} = ${table}.${key}`;
			if (filters) query += ` WHERE ${filters}`;

			return query;
		},

		table: {
			create: (table, columns) => {
				let columnsSql = '';

				for (const key in columns) {
					columnsSql += `${key} ${columns[key].type}`;
					if (columns[key].primaryKey) columnsSql += ' PRIMARY KEY';
					if (columns[key].autoIncrement) columnsSql += ' AUTOINCREMENT';
					if (columns[key].unique) columnsSql += ' UNIQUE';
					if (columns[key].notNull) columnsSql += ' NOT NULL';
					if (columns[key].default) columnsSql += ` DEFAULT ${columns[key].default}`;
					if (columns[key].foreign)
						columnsSql += `, FOREIGN KEY (${columns[key].foreign.key}) REFERENCES ${columns[key].foreign.table} (${columns[key].foreign.column})`;
					if (Object.keys(columns)[Object.keys(columns).length - 1] !== key) columnsSql += ', ';
				}

				return `CREATE TABLE IF NOT EXISTS ${table} (${columnsSql})`;
			},

			drop: (table) => {
				return `DROP TABLE IF EXISTS ${table}`;
			},

			addColumn: (table, column) => {
				return `ALTER TABLE ${table} ADD COLUMN ${column.name} ${column.type}`;
			},

			removeColumn: (table, column) => {
				return `ALTER TABLE ${table} DROP COLUMN ${column}`;
			},

			renameColumn: (table, oldColumn, newColumn) => {
				return `ALTER TABLE ${table} RENAME COLUMN ${oldColumn} TO ${newColumn}`;
			},

			infos: (table) => {
				return `PRAGMA table_info(${table})`;
			},
		},
	},
};
export default QueryConstructor;
