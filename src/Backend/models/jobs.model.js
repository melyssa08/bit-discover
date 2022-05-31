import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

class Jobs extends DatabaseTable {
	constructor() {
		let columns = {
			id: {
				type: DataTypes.integer,
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			id_outer: {
				type: DataTypes.integer,
				notNull: true,
				foreign: {
					key: 'id',
					table: 'outert',
					column: 'id',
				},
			},
		};

		super('jobs', columns);
	}
}

export default Jobs;
