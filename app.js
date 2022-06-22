import express from 'express';
import getConfig from './configs/loader.config.js';
import ConsoleUtils from './utils/console.util.js';
import RouteManager from './routes/index.js';
import BasicsConfig from './middlewares/basics.middleware.js';
import { DatabaseTable } from './database/databaseTable.database.js';
var port = process.env.PORT||3000;

//const EXPRESS_CONFIG = await getConfig('express'); // Load express config
const app = express(); // Create express app

DatabaseTable.initDatabase(); // Init database
ConsoleUtils.addTimeOnConsole(); // Add time on console from class ConsoleUtils

BasicsConfig.bodyParser(app); // Add body parser
BasicsConfig.cors(app); // Add cors
BasicsConfig.security(app); // Add security middleware
BasicsConfig.staticFiles(app); // Add static files
BasicsConfig.debug(app); // Add debug middleware

RouteManager.instanceRoutes(app); // Add routes

// Start server from config file
app.listen(port, () => {
	console.log(`Server running at http://:${port}/`.rainbow);
});
