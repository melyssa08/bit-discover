import QueryConstructor from './queryConstructor.js';
import database from './connection.js';
class DatabaseTable {
	constructor(table) {
		this.table = table;
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
