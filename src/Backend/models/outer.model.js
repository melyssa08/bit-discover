import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

class OuterT extends DatabaseTable {
	constructor() {
		let columns = {
			id: {
				type: DataTypes.integer,
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.text,
				notNull: true,
			},
		};

		super('outert', columns);
	}
}

export default OuterT;
