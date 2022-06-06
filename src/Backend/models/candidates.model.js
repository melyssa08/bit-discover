import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

/*
 * Jobs table model.
 * See '../database/databaseTable.database.js' for more information.
 */

class Candidates extends DatabaseTable {
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
			age: {
				type: DataTypes.integer,
				notNull: true,
			},
			email: {
				type: DataTypes.text,
				notNull: true,
			},
			country_code: {
				type: DataTypes.integer,
				notNull: true,
			},
			postal_code: {
				type: DataTypes.int,
				notNull: true,
			},
			CPF: {
				type: DataTypes.int,
				notNull: true,
			},
			hardskills: {
				type: DataTypes.text,
				notNull: false,
			},
			softskills: {
				type: DataTypes.text,
				notNull: false,
			},
			scholarship: {
				type: DataTypes.text,
				notNull: true,
			},
			graduation: {
				type: DataTypes.text,
				notNull: false,
			},
			password: {
				type: DataTypes.text,
				notNull: true,
			},
			created_at: {
				type: DataTypes.datetime,
				notNull: true,
				autoIncrement: true,
			},
		};
		super('candidates', columns);
	}
}

export default Candidates;
