import getConfig from '../configs/loader.config.js';
import sqlite3 from 'sqlite3';

const DATABASE_CONFIG = await getConfig('database'); // Get database configuration

// Create database connection and return it to the variable database
const database = new sqlite3.Database(DATABASE_CONFIG.path, (err) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log('Successfully connected to the database.');
	}
});

export default database;
