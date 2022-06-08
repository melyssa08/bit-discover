import JobsRoute from './jobs.route.js';
import BonusRoute from './bonus.route.js';
import CandidatesGraduationsRoute from './candidates_graduations.route.js';
import CandidatesRoute from './candidates.route.js';
import CompaniesRoute from './companies.route.js';
import GraduationNamespacesRoute from './graduation_namespaces.route.js';
import HardSkillsRoute from './hardskills.route.js';
import SoftSkillsRoute from './softskills.route.js';
import JobContactsRoute from './job_contacts.route.js';
import DepartamentsRoute from './departaments.route.js';

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
			app.use(`${route.api ? '/api' : ''}/${route.route}`, route.router); // Add route to app
		});
	}
}

RouteManager.addRoute(JobsRoute); // Add Jobs route to routes manager
RouteManager.addRoute(BonusRoute); // Add bonus route to routes manager
RouteManager.addRoute(CandidatesGraduationsRoute); // Add CandidatesGraduations route to routes manager
RouteManager.addRoute(CandidatesRoute); // Add Candidates route to routes manager
RouteManager.addRoute(CompaniesRoute); // Add Companies route to routes manager
RouteManager.addRoute(GraduationNamespacesRoute); // Add GraduationNamespaces route to routes manager
RouteManager.addRoute(HardSkillsRoute); // Add HardSkills route to routes manager
RouteManager.addRoute(SoftSkillsRoute); // Add SoftSkills route to routes manager
RouteManager.addRoute(JobContactsRoute); // Add JobContacts route to routes manager
RouteManager.addRoute(DepartamentsRoute); // Add Departaments route to routes manager

export default RouteManager;
