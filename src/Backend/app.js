import express from 'express';
import getConfig from './configs/loader.config.js';
import ConsoleUtils from './utils/console.util.js';
import RouteManager from './routes/index.js';
import BasicsConfig from './middlewares/basics.middleware.js';
import { DatabaseTable } from './database/databaseTable.database.js';
const EXPRESS_CONFIG = await getConfig('express');

ConsoleUtils.addTimeOnConsole();
DatabaseTable.initDatabase();

const app = express();

BasicsConfig.bodyParser(app);
BasicsConfig.cors(app);
BasicsConfig.security(app);

RouteManager.instanceRoutes(app);

app.listen(EXPRESS_CONFIG.port, EXPRESS_CONFIG.hostname, () => {
	console.log(`Server running at http://${EXPRESS_CONFIG.hostname}:${EXPRESS_CONFIG.port}/`.rainbow);
});
