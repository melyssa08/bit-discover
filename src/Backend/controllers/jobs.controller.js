import { jobs, bonus, hardSkills, softSkills, jobContacts } from '../models/index.js';
import StringList from '../utils/string_array.util.js';
const JobsController = {
	/*
	 * GET /jobs
	 * Returns all jobs
	 */
	async get(req, res) {
		var jobs_raw = undefined;
		// Get all jobs
		jobs_raw = await jobs.get(req.body);
		if (jobs_raw.length === 0) {
			res.json({});
			return;
		}

		for (var i = 0; i < jobs_raw.length; i++) {
			// Get all bonus
			let bonus_raw = await bonus.get({ id: jobs_raw[i].bonus });
			jobs_raw[i].bonus = [];
			if (bonus_raw.length > 0) {
				for (var j = 0; j < bonus_raw.length; j++) {
					jobs_raw[i].bonus.push(bonus_raw[j]);
				}
			}

			// Get all jobs contacts
			let jobContacts_raw = await jobContacts.get({ id: jobs_raw[i].contact });
			jobs_raw[i].jobContacts = undefined;

			if (jobContacts_raw.length > 0) {
				for (var j = 0; j < jobContacts_raw.length; j++) {
					jobs_raw[i].job_contacts = jobContacts_raw[j];
				}
			}

			let input_hardskill = StringList.unpack(jobs_raw[i].requireds_hardskill);
			jobs_raw[i].requireds_hardskill = [];

			// Get all hard skills
			for (var j = 0; j < input_hardskill.length; j++) {
				let hardSkill_raw = await hardSkills.get({ id: input_hardskill[j] });

				if (hardSkill_raw.length > 0) {
					jobs_raw[i].requireds_hardskill.push(hardSkill_raw[0]);
				}
			}

			// Get all soft skills
			let input_softskill = StringList.unpack(jobs_raw[i].requireds_softskill);
			jobs_raw[i].requireds_softskill = [];

			for (var j = 0; j < input_softskill.length; j++) {
				let softSkill_raw = await softSkills.get({ id: input_softskill[j] });

				if (softSkill_raw.length > 0) {
					jobs_raw[i].requireds_softskill.push(softSkill_raw[0]);
				}
			}

			res.json(jobs_raw);
		}
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
