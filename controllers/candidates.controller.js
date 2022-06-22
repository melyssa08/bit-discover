import { candidates } from '../models/index.js';

const CandidatesController = {
	/*
	 * GET /candidates
	 * Returns all candidates
	 */
	get(req, res) {
		// Get all candidates
		candidates.get(req.query, 'LIKE').then((result) => {
			// Get all candidates
			res.send(result); // Send all candidates
		});
	},

	/*
	 * GET /candidates
	 * Get specific candidates by id
	 */
	getOne(req, res) {
		candidates.get({ id: req.params.id }).then((result) => {
			// Get candidates by id
			res.send(result); // Send candidates with id = req.params.id
		});
	},

	/*
	 * POST /candidates
	 * Create new candidates
	 */
	post(req, res) {
		candidates.save(req.body).then((result) => {
			// Save candidates
			res.send(result); // Send result
		});
	},

	async postLogin(req, res) {
		var candidates_raw = undefined;
		candidates_raw = await candidates.get(req.body);
		if (candidates_raw.length === 0) {
			res.status(404).send('Credenciais incorretas!');
		} else {
			console.log(candidates_raw[0]);
			res.json(candidates_raw[0]);
		}
	},

	/*
	 * PUT /candidates
	 * Update candidates
	 */
	put(req, res) {
		candidates.update(req.body, { id: req.params.id }).then((result) => {
			// Update candidates with id = req.params.id
			console.log(req.params.id);
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /candidates
	 * Delete a candidates
	 */
	delete(req, res) {
		candidates.delete({ id: req.params.id }).then((result) => {
			// Delete candidates with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default CandidatesController;
