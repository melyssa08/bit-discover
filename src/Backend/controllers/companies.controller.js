import { companies } from '../models/index.js';

const CompaniesController = {
	/*
	 * GET /companies
	 * Returns all companies
	 */
	get(req, res) {
		// Get all companies
		companies.get(req.body).then((result) => {
			// Get all companies
			res.send(result); // Send all companies
		});
	},

	/*
	 * GET /companies
	 * Get specific companies by id
	 */
	getOne(req, res) {
		companies.get({ id: req.params.id }).then((result) => {
			// Get companies by id
			res.send(result); // Send companies with id = req.params.id
		});
	},

	/*
	 * POST /companies
	 * Create new companies
	 */
	post(req, res) {
		companies.save(req.body).then((result) => {
			// Save companies
			res.send(result); // Send result
		});
	},

	async postLogin(req, res) {
		var companies_raw = undefined;
		companies_raw = await companies.get(req.body);
		if (companies_raw.length === 0) {
				res.status(404).send('Credenciais incorretas!')
		}
		else {
			console.log(companies_raw[0])
			res.json(companies_raw[0])
		}
	},

	/*
	 * PUT /companies
	 * Update companies
	 */
	put(req, res) {
		companies.update(req.body, { id: req.params.id }).then((result) => {
			// Update companies with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /companies
	 * Delete a companies
	 */
	delete(req, res) {
		companies.delete({ id: req.params.id }).then((result) => {
			// Delete companies with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default CompaniesController;
