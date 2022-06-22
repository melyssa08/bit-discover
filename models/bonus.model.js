import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

/*
 * Jobs table model.
 * See '../database/databaseTable.database.js' for more information.
 */

class Bonus extends DatabaseTable {
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
			description: {
				type: DataTypes.text,
				notNull: true,
			},
		};

		super('bonus', columns);
	}
}

export default Bonus;
