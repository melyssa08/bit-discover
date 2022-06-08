import { hardskills } from '../models/index.js';

const HardSkillsController = {
	/*
	 * GET /hardskills
	 * Returns all hardskills
	 */
	get(req, res) {
		// Get all hardskills
		hardskills.get({}).then((result) => {
			// Get all hardskills
			res.send(result); // Send all hardskills
		});
	},

	/*
	 * GET /hardskills
	 * Get specific hardskills by id
	 */
	getOne(req, res) {
		hardskills.get({ id: req.params.id }).then((result) => {
			// Get hardskills by id
			res.send(result); // Send hardskills with id = req.params.id
		});
	},

	/*
	 * POST /hardskills
	 * Create new hardskills
	 */
	post(req, res) {
		hardskills.save(req.body).then((result) => {
			// Save hardskills
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /hardskills
	 * Update hardskills
	 */
	put(req, res) {
		hardskills.update(req.body, { id: req.params.id }).then((result) => {
			// Update hardskills with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /hardskills
	 * Delete a hardskills
	 */
	delete(req, res) {
		hardskills.delete({ id: req.params.id }).then((result) => {
			// Delete hardskills with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default HardSkillsController;
