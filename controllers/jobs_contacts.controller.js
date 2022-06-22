import { jobContacts } from '../models/index.js';

const JobsContactsController = {
	/*
	 * GET /jobscontacts
	 * Returns all jobscontacts
	 */
	get(req, res) {
		// Get all jobscontacts
		jobContacts.get({}).then((result) => {
			// Get all jobscontacts
			res.send(result); // Send all jobscontacts
		});
	},

	/*
	 * GET /jobscontacts
	 * Get specific jobscontacts by id
	 */
	getOne(req, res) {
		jobContacts.get({ id: req.params.id }).then((result) => {
			// Get jobscontacts by id
			res.send(result); // Send jobscontacts with id = req.params.id
		});
	},

	/*
	 * POST /jobscontacts
	 * Create new jobscontacts
	 */
	post(req, res) {
		jobContacts.save(req.body).then((result) => {
			// Save jobscontacts
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /jobscontacts
	 * Update jobscontacts
	 */
	put(req, res) {
		jobContacts.update(req.body, { id: req.params.id }).then((result) => {
			// Update jobscontacts with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /jobscontacts
	 * Delete a jobscontacts
	 */
	delete(req, res) {
		jobContacts.delete({ id: req.params.id }).then((result) => {
			// Delete jobscontacts with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default JobsContactsController;