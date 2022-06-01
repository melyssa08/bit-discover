import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

class HardSkills extends DatabaseTable {
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

		super('hardskills', columns);
	}
}

export default HardSkills;