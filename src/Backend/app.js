import express from 'express';
import bodyParser from 'body-parser';
import getConfig from './configs/loader.config.js';
import ConsoleUtils from './utils/console.util.js';
import cors from 'cors';
import RouteManager from './routes/index.js';
import { DatabaseTable } from './database/databaseTable.database.js';
const EXPRESS_CONFIG = await getConfig('express');

ConsoleUtils.addTimeOnConsole();
DatabaseTable.initDatabase();

const app = express();

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	cors({
		origin: '*',
	})
);

RouteManager.instanceRoutes(app);

app.listen(EXPRESS_CONFIG.port, EXPRESS_CONFIG.hostname, () => {
	console.log(`Server running at http://${EXPRESS_CONFIG.hostname}:${EXPRESS_CONFIG.port}/`.rainbow);
});
