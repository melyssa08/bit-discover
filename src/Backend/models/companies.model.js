import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

class Companies extends DatabaseTable {
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
			postal_code: {
				type: DataTypes.integer,
				notNull: true 
			},
			cnpj: {
				type: DataTypes.integer,
				notNull: true 
			},
			password: {
				type: DataTypes.text,
				notNull: true 
			},
			website: {
				type: DataTypes.text,
				notNull: true
			},
			created_at: {
				type: DataTypes.datetime,
				notNull: true 
			}
		};

		super('companies', columns);
	}
}

export default Companies;