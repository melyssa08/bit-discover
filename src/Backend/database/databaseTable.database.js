import QueryConstructor from './queryConstructor.database.js';
import database from './connection.database.js';

/*
 * Static class for database types
 */
class DataTypes {
	static get integer() {
		return 'INTEGER'; // INTEGER from sqlite3
	}

	static get text() {
		return 'TEXT'; // TEXT from sqlite3
	}

	static get null() {
		return 'NULL'; // NULL from sqlite3
	}

	static get real() {
		return 'REAL'; // REAL from sqlite3
	}

	static get blob() {
		return 'BLOB'; // BLOB from sqlite3
	}
	static get datetime() {
		return 'DATETIME'; // DATETIME from sqlite3
	}
}

/*
 * Class for hierarchical tables
 */
class DatabaseTable {
	/*
	 * Constructor for DatabaseTable - Sets up the table
	 * @param {string} table - The name of the table
	 * @param {array} columns - An array of columns and their properties
	 */
	constructor(table, columns) {
		this.table = table; // The name of the table
		this.columns = columns; // An array of columns and their properties

		// Initialize the table
		this.#initTable()
			.then(() => {
				// Initialize the table
				console.log(`Table '${table}': `.bold, ' OK '.brightGreen.bgGreen.bold); // Log success
			})
			.catch((err) => {
				// error
				console.log(err); // Log error
			});
	}

	/*
	 * Method for setup of the table configuration
	 */
	static initDatabase() {
		const sql = QueryConstructor.utils.constructor.foreignKeys(true); // Setup foreign keys
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				// Run the query
				if (err) {
					reject(err); // Reject if error
				} else {
					resolve(); // Resolve if no error
				}
			});
		});
	}

	/*
	 * Method for creating a table / updating a table
	 */
	#initTable() {
		const sql = QueryConstructor.construct.table.create(this.table, this.columns); // Create the table if it doesn't exist
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err); // Reject if error
				} else {
					resolve(); // Resolve if no error
				}
			});
		});
	}

	/*
	 * Method for inserting data into the table
	 */
	save(data) {
		const sql = QueryConstructor.construct.save(this.table, data); // Create the insert query
		console.log(sql);
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err); // Reject if error
				} else {
					resolve(database.lastID); // Resolve with the last inserted ID
				}
			});
		});
	}

	/*
	 * Method for getting data from the table
	 */
	get(where = {}) {
		const sql = QueryConstructor.construct.filter(this.table, { where }); // Create the select query
		return new Promise((resolve, reject) => {
			database.all(sql, (err, rows) => {
				if (err) {
					reject(err); // Reject if error
				} else {
					resolve(rows); // Resolve with the data
				}
			});
		});
	}

	/*
	 * Method for getting data from the table
	 */
	update(data, where) {
		const sql = QueryConstructor.construct.update(this.table, data, where); // Create the update query
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err); // Reject if error
				} else {
					resolve(); // Resolve if no error
				}
			});
		});
	}

	/*
	 * Method for deleting data from the table
	 */
	delete(where) {
		const sql = QueryConstructor.construct.delete(this.table, where); // Create the delete query
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err); // Reject if error
				} else {
					resolve(); // Resolve if no error
				}
			});
		});
	}

	/*
	 * Method for getting data from inner tables
	 */
	innerJoin(join, columns, where, key) {
		console.log(columns);
		const sql = QueryConstructor.construct.innerJoin(this.table, join, columns, where, key); // Create the inner join query
		return new Promise((resolve, reject) => {
			database.all(sql, (err, rows) => {
				if (err) {
					reject(err); // Reject if error
				} else {
					resolve(rows); // Resolve with the data
				}
			});
		});
	}
}

export { DatabaseTable, DataTypes };
