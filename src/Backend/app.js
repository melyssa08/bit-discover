import express from 'express';
import getConfig from './configs/loader.config.js';
import ConsoleUtils from './utils/console.util.js';
import RouteManager from './routes/index.js';
import BasicsConfig from './middlewares/basics.middleware.js';
import { DatabaseTable } from './database/databaseTable.database.js';

const EXPRESS_CONFIG = await getConfig('express'); // Load express config

DatabaseTable.initDatabase(); // Init database
ConsoleUtils.addTimeOnConsole(); // Add time on console from class ConsoleUtils

const app = express(); // Create express app

BasicsConfig.bodyParser(app); // Add body parser
BasicsConfig.cors(app); // Add cors
BasicsConfig.security(app); // Add security middleware
BasicsConfig.staticFiles(app); // Add static files
BasicsConfig.debug(app); // Add debug middleware

RouteManager.instanceRoutes(app); // Add routes

// Start server from config file
app.listen(EXPRESS_CONFIG.port, EXPRESS_CONFIG.hostname, () => {
	console.log(`Server running at http://${EXPRESS_CONFIG.hostname}:${EXPRESS_CONFIG.port}/`.rainbow);
});
