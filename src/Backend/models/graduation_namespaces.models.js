import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

class GraduationNamespaces extends DatabaseTable {
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
            }
		};

		super('graduation_namespaces', columns);
	}
}

export default GraduationNamespaces;