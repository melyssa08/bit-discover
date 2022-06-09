import { candidatesGraduations } from '../models/index.js';

const CandidatesGraduationsController = {
	/*
	 * GET /candidatesgraduations
	 * Returns all candidatesgraduations
	 */
	get(req, res) {
		// Get all candidatesgraduations
		candidatesGraduations.get({}).then((result) => {
			// Get all candidatesgraduations
			res.send(result); // Send all candidatesgraduations
		});
	},

	/*
	 * GET /candidatesgraduations
	 * Get specific candidatesgraduations by id
	 */
	getOne(req, res) {
		candidatesGraduations.get({ id: req.params.id }).then((result) => {
			// Get candidatesgraduations by id
			res.send(result); // Send candidatesgraduations with id = req.params.id
		});
	},

	/*
	 * POST /candidatesgraduations
	 * Create new candidatesgraduations
	 */
	post(req, res) {
		candidatesGraduations.save(req.body).then((result) => {
			// Save candidatesgraduations
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /candidatesgraduations
	 * Update candidatesgraduations
	 */
	put(req, res) {
		candidatesGraduations.update(req.body, { id: req.params.id }).then((result) => {
			// Update candidatesgraduations with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /candidatesgraduations
	 * Delete a candidatesgraduations
	 */
	delete(req, res) {
		candidatesGraduations.delete({ id: req.params.id }).then((result) => {
			// Delete candidatesgraduations with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default CandidatesGraduationsController;
