import QueryConstructor from './queryConstructor.js';
import database from './connection.js';
import colors from 'colors';

class DatabaseTable {
	constructor(table, columns) {
		this.table = table;
		this.columns = columns;

		this.#initTable()
			.then(() => {
				console.log(`Table '${table}': `.bold, ' OK '.brightGreen.bgGreen.bold);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static initDatabase() {
		const sql = QueryConstructor.utils.constructor.foreignKeys(true);
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	#initTable() {
		const sql = QueryConstructor.construct.table.create(this.table, this.columns);
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	save(data) {
		const sql = QueryConstructor.construct.save(this.table, data);
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve(database.lastID);
				}
			});
		});
	}

	filter(where) {
		const sql = QueryConstructor.construct.filter(this.table, where);
		return new Promise((resolve, reject) => {
			database.all(sql, (err, rows) => {
				if (err) {
					reject(err);
				} else {
					resolve(rows);
				}
			});
		});
	}

	update(data, where) {
		const sql = QueryConstructor.construct.update(this.table, data, where);
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	delete(where) {
		const sql = QueryConstructor.construct.delete(this.table, where);
		return new Promise((resolve, reject) => {
			database.run(sql, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}
}

export default DatabaseTable;
