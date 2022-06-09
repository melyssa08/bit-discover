import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

/*
 * Jobs table model.
 * See '../database/databaseTable.database.js' for more information.
 */

class JobContacts extends DatabaseTable {
	constructor() {
		let columns = {
			id: {
				type: DataTypes.integer,
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			email: {
				type: DataTypes.text,
				notNull: true,
			},
			number: {
				type: DataTypes.integer,
				notNull: true,
			},
		};

		super('job_contacts', columns);
	}
}

export default JobContacts;
