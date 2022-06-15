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
			postal_code: {
				type: DataTypes.text,
				notNull: true,
			},
			CPF: {
				type: DataTypes.text,
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
			likes: {
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
			},
			description: {
				type: DataTypes.text,
				notNull: false,
			},
		};
		super('candidates', columns);
	}
}

export default Candidates;
