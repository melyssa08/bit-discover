import { jobs } from '../models/index.js';

const JobsController = {
	/*
	 * GET /jobs
	 * Returns all jobs
	 */
	get(req, res) {
		// Get all jobs
		jobs.get(req.body).then((result) => {
			// Get all jobs
			res.send(result); // Send all jobs
		});
	},

	/*
	 * GET /jobs
	 * Get specific job by id
	 */
	getOne(req, res) {
		jobs.get({ id: req.params.id }).then((result) => {
			// Get job by id
			res.send(result); // Send job with id = req.params.id
		});
	},

	/*
	 * POST /jobs
	 * Create new job
	 */
	post(req, res) {
		jobs.save(req.body).then((result) => {
			// Save job
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /jobs
	 * Update job
	 */
	put(req, res) {
		jobs.update(req.body, { id: req.params.id }).then((result) => {
			// Update job with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /jobs
	 * Delete a job
	 */
	delete(req, res) {
		jobs.delete({ id: req.params.id }).then((result) => {
			// Delete job with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default JobsController;
