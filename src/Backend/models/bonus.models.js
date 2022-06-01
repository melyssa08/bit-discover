import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

class Bonus extends DatabaseTable {
	constructor() {
		let columns = {
			id: {
				type: DataTypes.integer,
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			benefits: {
                type: DataTypes.text,
                notNull: true,
            },
            description: {
                type: DataTypes.text,
                notNull: true,
            }
		};

		super('bonus', columns);
	}
}

export default Bonus;