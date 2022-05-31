import JobsRoute from './jobs.route.js';

class RouteManager {
	static routes = [];

	static addRoute(route) {
		RouteManager.routes.push(route);
	}

	static instanceRoutes(app) {
		RouteManager.routes.forEach((route) => {
			app.use(`${route.route}`, route.router);
		});
	}
}

RouteManager.addRoute(JobsRoute);

export default RouteManager;
