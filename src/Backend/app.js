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

class Temp extends DatabaseTable {
	constructor() {
		super('temp');
	}
}

const temp = new Temp();

app.get('/', (req, res) => {
	temp.filter({}).then((data) => {
		res.send(data);
	});
});

app.post('/', (req, res) => {
	temp.save(req.body).then((data) => {
		res.send(data);
	});
});

app.put('/:id', (req, res) => {
	temp.update(req.body, { id: req.params.id }).then((data) => {
		res.send(data);
	});
});

app.delete('/:id', (req, res) => {
	temp.delete({ id: req.params.id }).then((data) => {
		res.send(data);
	});
});

app.listen(EXPRESS_CONFIG.port, EXPRESS_CONFIG.hostname, () => {
	console.log(`Server running at http://${EXPRESS_CONFIG.hostname}:${EXPRESS_CONFIG.port}/`);
});
