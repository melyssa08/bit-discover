import { softskills } from '../models/index.js';

const SoftSkillsController = {
	/*
	 * GET /softskills
	 * Returns all softskills
	 */
	get(req, res) {
		// Get all softskills
		softskills.get({}).then((result) => {
			// Get all softskills
			res.send(result); // Send all softskills
		});
	},

	/*
	 * GET /softskills
	 * Get specific softskills by id
	 */
	getOne(req, res) {
		softskills.get({ id: req.params.id }).then((result) => {
			// Get softskills by id
			res.send(result); // Send softskills with id = req.params.id
		});
	},

	/*
	 * POST /softskills
	 * Create new softskills
	 */
	post(req, res) {
		softskills.save(req.body).then((result) => {
			// Save softskills
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /softskills
	 * Update softskills
	 */
	put(req, res) {
		softskills.update(req.body, { id: req.params.id }).then((result) => {
			// Update softskills with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /softskills
	 * Delete a softskills
	 */
	delete(req, res) {
		softskills.delete({ id: req.params.id }).then((result) => {
			// Delete softskills with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default SoftSkillsController;
