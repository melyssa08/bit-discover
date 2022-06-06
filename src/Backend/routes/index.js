import JobsRoute from './jobs.route.js';

/*
 * Static routes controller for the application.
 */
class RouteManager {
	// Routes manager class
	static routes = []; // Routes list

	/*
	 * Add route to routes lists
	 * @param {object} route - Route object
	 */
	static addRoute(route) {
		RouteManager.routes.push(route); // Add route to routes list
	}

	/*
	 * Instance routes
	 * @param {object} app - Express app
	 */
	static instanceRoutes(app) {
		RouteManager.routes.forEach((route) => {
			// For each route
			app.use(`${route.route}`, route.router); // Add route to app
		});
	}
}

RouteManager.addRoute(JobsRoute); // Add jobs route to routes manager

export default RouteManager;
