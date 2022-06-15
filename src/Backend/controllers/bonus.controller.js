import { bonus } from '../models/index.js';

const BonusController = {
	/*
	 * GET /bonus
	 * Returns all bonus
	 */
	get(req, res) {
		// Get all bonus
		bonus.get({}).then((result) => {
			// Get all bonus
			res.send(result); // Send all bonus
		});
	},

	/*
	 * GET /bonus
	 * Get specific bonus by id
	 */
	getOne(req, res) {
		bonus.get({ id: req.params.id }).then((result) => {
			// Get bonus by id
			res.send(result); // Send bonus with id = req.params.id
		});
	},

	/*
	 * POST /bonus
	 * Create new bonus
	 */
	post(req, res) {
		bonus.save(req.body).then((result) => {
			// Save bonus
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /bonus
	 * Update bonus
	 */
	put(req, res) {
		bonus.update(req.body, { id: req.params.id }).then((result) => {
			// Update bonus with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /bonus
	 * Delete a bonus
	 */
	delete(req, res) {
		bonus.delete({ id: req.params.id }).then((result) => {
			// Delete bonus with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default BonusController;