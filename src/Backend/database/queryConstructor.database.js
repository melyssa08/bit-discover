const QueryConstructor = {
	utils: {
		constructor: {
			/*
			 * Create filter query
			 * @param {Object} filter - Filter object
			 * @return {String} - Filter query
			 */
			filter: (where) => {
				if (!where) {
					// If filter is empty
					return '';
				}
				let filters = ''; // Create filters
				const items = Object.keys(where); // Get items from filter
				const values = Object.values(where).map((value) => (typeof value === 'string' ? `'${value}'` : value)); // Get values from filter

				items.forEach((item, index) => {
					filters += `${item} = ${values[index]} ${index === items.length - 1 ? '' : 'AND '}`; // Add filter to filters
				});

				return filters;
			},
			/*
			 * Create data query
			 * @param {Object} data - data object
			 * @return {String} - data query
			 */
			data: (data) => {
				if (!data) {
					// If data is empty
					return '';
				}

				let update = ''; // Create update
				const items = Object.keys(data); // Get items from data

				items.forEach((key, index) => {
					// For each item
					update += `${key} = ${typeof data[key] === 'string' ? `'${data[key]}'` : data[key]} ${index === items.length - 1 ? '' : ', '}`; // Add item to update
				});

				return update;
			},

			/*
			 * Enable or disable foreign key constraints
			 * @param {Boolean} enable - enable or disable foreign key constraints
			 * @return {String} - query
			 */
			foreignKeys: (state) => {
				return `PRAGMA foreign_keys = ${state ? 'ON' : 'OFF'}`; // Return foreign keys query
			},
		},
	},
	construct: {
		/*
		 * Create query for save data
		 * @param {String} table - table name
		 * @param {Object} data - data object
		 * @return {String} - query
		 */
		save: (table, data) => {
			const items = Object.keys(data).join(','); // Get items from data
			const values = Object.values(data) // Get values from data
				.map((value) => (typeof value === 'string' ? `'${value}'` : value))
				.join(','); // Add values to values
			return `INSERT INTO ${table} (${items}) VALUES (${values})`; // Return query
		},

		/*
		 * Create query for get data by filter or all data
		 * @param {String} table - table name
		 * @param {Object} filter - filter object
		 * @return {String} - query
		 */
		filter: (table, { columns, where }) => {
			let filters = ''; // Create filters

			filters = QueryConstructor.utils.constructor.filter(where); // Add filter to filters

			let query = `SELECT ${columns ? columns.join() : '*'} FROM ${table}`; // Create query
			if (filters) query += ` WHERE ${filters}`; // Add filters to query

			return query;
		},

		/*
		 * Create query for update data
		 * @param {String} table - table name
		 * @param {Object} data - data object
		 * @param {Object} filter - filter object
		 * @return {String} - query
		 */
		update: (table, data, where) => {
			let filters = ''; // Create filters
			let update = ''; // Create update

			filters = QueryConstructor.utils.constructor.filter(where); // Get filters
			update = QueryConstructor.utils.constructor.data(data); // Get update

			let query = `UPDATE ${table} SET ${update}`; // Create query
			if (filters) query += ` WHERE ${filters}`; // Add filters to query

			return query;
		},

		/*
		 * Create query for delete data
		 * @param {String} table - table name
		 * @param {Object} filter - filter object
		 * @return {String} - query
		 */
		delete: (table, where) => {
			let filters = ''; // Create filters

			filters = QueryConstructor.utils.constructor.filter(where); // Get filters

			let query = `DELETE FROM ${table}`; // Create query
			if (filters) query += ` WHERE ${filters}`; // Add filters to query

			return query;
		},

		/*
		 * Create query for get data from other table
		 * @param {String} table - table name
		 * @param {Object} columns - columns object
		 * @param {Object} where - filter object
		 * @param {Object} join - join object
		 * @param {Object} keys - keys object
		 * @return {String} - query
		 */
		innerJoin: (table, { columns, where, join, key }) => {
			let filters = ''; // Create filters

			filters = QueryConstructor.utils.constructor.filter(where); // Get filters

			let query = `SELECT ${columns ? columns.join() : '*'} FROM ${table} INNER JOIN ${join.table} ON ${join.table}.${
				join.property
			} = ${table}.${key}`; // Create query
			if (filters) query += ` WHERE ${filters}`; // Add filters to query

			return query;
		},

		table: {
			/*
			 * Create query for create table
			 * @param {String} table - table name
			 * @param {Object} columns - columns object
			 * @return {String} - query
			 */
			create: (table, columns) => {
				let columnsSql = ''; // Create columns sql

				// Separate foreign keys columns
				const foreignKeys = {};
				for (const key in columns) {
					if (columns[key].foreign) {
						foreignKeys[key] = columns[key];
					}
				}

				for (const key in columns) {
					// For each column
					columnsSql += `${key} ${columns[key].type}`; // Add column to columns sql
					if (columns[key].autoIncrement && !columns[key].primaryKey) columnsSql += ' AUTOINCREMENT'; // Add auto increment to columns sql
					if (columns[key].primaryKey) columnsSql += ' PRIMARY KEY'; // Add primary key to columns sql
					if (columns[key].unique) columnsSql += ' UNIQUE'; // Add unique to columns sql
					if (columns[key].notNull) columnsSql += ' NOT NULL'; // Add not null to columns sql
					if (columns[key].default) columnsSql += ` DEFAULT ${columns[key].default}`; // Add default to columns sql
					if (Object.keys(columns)[Object.keys(columns).length - 1] !== key) columnsSql += ', '; // Add comma to columns sql
				}

				for (const key in foreignKeys) {
					// For each foreign key
					columnsSql += `, FOREIGN KEY (${key}) REFERENCES ${foreignKeys[key].foreign.table} (${foreignKeys[key].foreign.column})`; // Add foreign key to columns sql
				}

				return `CREATE TABLE IF NOT EXISTS ${table} (${columnsSql})`; // Return query
			},

			/*
			 * Create query for drop table
			 * @param {String} table - table name
			 * @return {String} - query
			 */
			drop: (table) => {
				return `DROP TABLE IF EXISTS ${table}`; // Return query
			},

			/*
			 * Create query for add column to table
			 * @param {String} table - table name
			 * @param {Object} columns - columns object
			 * @return {String} - query
			 */
			addColumn: (table, column) => {
				return `ALTER TABLE ${table} ADD COLUMN ${column.name} ${column.type}`; // Return query
			},

			/*
			 * Create query for drop column from table
			 * @param {String} table - table name
			 * @param {String} column - column name
			 * @return {String} - query
			 */
			removeColumn: (table, column) => {
				return `ALTER TABLE ${table} DROP COLUMN ${column}`;
			},

			/*
			 * Create query for rename column in table
			 * @param {String} table - table name
			 * @param {String} oldColumn - old column name
			 * @param {String} newColumn - new column name
			 * @return {String} - query
			 */
			renameColumn: (table, oldColumn, newColumn) => {
				return `ALTER TABLE ${table} RENAME COLUMN ${oldColumn} TO ${newColumn}`; // Return query
			},

			/*
			 * Create query get table infos
			 * @param {String} table - table name
			 * @return {String} - query
			 */
			infos: (table) => {
				return `PRAGMA table_info(${table})`; // Return query
			},
		},
	},
};
export default QueryConstructor;
