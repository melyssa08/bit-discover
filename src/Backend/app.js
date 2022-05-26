import express from 'express';
import bodyParser from 'body-parser';
import DatabaseTable from './models/database/databaseTable.js';
import getConfig from './configs/loader.js';
import cors from 'cors';
const EXPRESS_CONFIG = await getConfig('express');

const app = express();

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	cors({
		origin: '*',
	})
);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(EXPRESS_CONFIG.port, EXPRESS_CONFIG.hostname, () => {
	console.log(`Server running at http://${EXPRESS_CONFIG.hostname}:${EXPRESS_CONFIG.port}/`);
});
