import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';

/*
 * Static class that contains the middlewares that are used in the application.
 */
class BasicsConfig {
	/*
	 * Middleware that parses the body of the request.
	 */
	static bodyParser(app) {
		app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
		app.use(bodyParser.json()); // for parsing application/json
	}

	/*
	 * Middleware that allows cross-origin requests.
	 */
	static cors(app) {
		app.use(
			cors({
				origin: '*', // allow all origins
			})
		);
	}

	/*
	 * Middleware remove the source of the request.
	 */
	static security(app) {
		app.disable('x-powered-by'); // remove the source of the request
	}

	/*
	 * Middleware add static files.
	 */
	static staticFiles(app) {
		app.use(express.static('./Frontend/'));
	}

	/*
	 * Middleware to debug requests on console.
	 */
	static debug(app) {
		app.use(
			morgan(function (tokens, req, res) {
				return [
					chalk.hex('#34ace0').bold(tokens.method(req, res)),
					chalk.hex('#ffb142').bold(tokens.status(req, res)),
					chalk.hex('#ff5252').bold(tokens.url(req, res)),
					chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
					chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
					chalk.yellow(tokens['remote-addr'](req, res)),
					chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
				].join(' ');
			})
		);
	}
}

export default BasicsConfig;
