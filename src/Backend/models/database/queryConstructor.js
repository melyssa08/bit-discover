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

		table: {
			create: (table, columns) => {
				let columnsSql = '';

				columns.forEach((column) => {
					columnsSql += `${column.name} ${column.type}`;
					if (column.primaryKey) columnsSql += ' PRIMARY KEY';
					if (column.autoIncrement) columnsSql += ' AUTOINCREMENT';
					if (column.unique) columnsSql += ' UNIQUE';
					if (column.notNull) columnsSql += ' NOT NULL';
					if (column.default) columnsSql += ` DEFAULT ${column.default}`;
					if (column.foreign)
						columnsSql += ` FOREIGN KEY(${column.foreign.key}) REFERENCES ${column.foreign.table}(${column.foreign.column})`;
					if (columns.indexOf(column) !== columns.length - 1) columnsSql += ', ';
				});

				return `CREATE TABLE IF NOT EXISTS ${table} (${columnsSql})`;
			},

			drop: (table) => {
				return `DROP TABLE IF EXISTS ${table}`;
			},
		},
	},
};
export default QueryConstructor;
