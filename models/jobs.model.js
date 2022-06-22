import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

/*
 * Jobs table model.
 * See '../database/databaseTable.database.js' for more information.
 */
class Jobs extends DatabaseTable {
	constructor() {
		let columns = {
			id: {
				type: DataTypes.integer,
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			postal_code: {
				type: DataTypes.int,
				notNull: true,
			},
			company: {
				type: DataTypes.int,
				notNull: true,
				foreign: {
					table: 'companies',
					column: 'id',
				},
			},
			activities: {
				type: DataTypes.text,
				notNull: true,
			},
			name: {
				type: DataTypes.text,
				notNull: true,
			},
			description: {
				type: DataTypes.text,
				notNull: true,
			},
			type: {
				type: DataTypes.text,
				notNull: true,
			},
			requireds_hardskill: {
				type: DataTypes.text,
				notNull: false,
			},
			requireds_softskill: {
				type: DataTypes.text,
				notNull: false,
			},
			bonus: {
				type: DataTypes.text,
				notNull: true,
			},
			salary_min: {
				type: DataTypes.real,
				notNull: true,
			},
			salary_max: {
				type: DataTypes.real,
				notNull: true,
			},
			contact: {
				type: DataTypes.int,
				notNull: true,
			},
			scholarship: {
				type: DataTypes.text,
				notNull: true,
			},
			modality: {
				type: DataTypes.text,
				notNull: true,
			},
			shift: {
				type: DataTypes.text,
				notNull: true,
			},
			workload: {
				type: DataTypes.number,
				notNull: false,
			},
			proficiency: {
				type: DataTypes.text,
				notNull: false,
			},
			created_at: {
				type: DataTypes.datetime,
				notNull: false,
			},
		};

		super('jobs', columns);
	}
}

export default Jobs;
