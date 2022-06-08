import { departaments } from '../models/index.js';

const DepartamentsController = {
	/*
	 * GET /departaments
	 * Returns all departaments
	 */
	get(req, res) {
		// Get all departaments
		departaments.get({}).then((result) => {
			// Get all departaments
			res.send(result); // Send all departaments
		});
	},

	/*
	 * GET /departaments
	 * Get specific departaments by id
	 */
	getOne(req, res) {
		departaments.get({ id: req.params.id }).then((result) => {
			// Get departaments by id
			res.send(result); // Send departaments with id = req.params.id
		});
	},

	/*
	 * POST /departaments
	 * Create new departaments
	 */
	post(req, res) {
		departaments.save(req.body).then((result) => {
			// Save departaments
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /departaments
	 * Update departaments
	 */
	put(req, res) {
		departaments.update(req.body, { id: req.params.id }).then((result) => {
			// Update departaments with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /departaments
	 * Delete a departaments
	 */
	delete(req, res) {
		departaments.delete({ id: req.params.id }).then((result) => {
			// Delete departaments with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default DepartamentsController;
