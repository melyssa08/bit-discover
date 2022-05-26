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
}

export default DatabaseTable;
