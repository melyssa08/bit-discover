import cors from 'cors';
import bodyParser from 'body-parser';

class BasicsConfig {
	static bodyParser(app) {
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
	}

	static cors(app) {
		app.use(
			cors({
				origin: '*',
			})
		);
	}

	static security(app) {
		app.disable('x-powered-by');
	}
}

export default BasicsConfig;
