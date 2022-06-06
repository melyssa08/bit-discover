import cors from 'cors';
import bodyParser from 'body-parser';

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
}

export default BasicsConfig;
