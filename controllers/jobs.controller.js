import { jobs, bonus, hardSkills, softSkills, jobContacts, companies } from '../models/index.js';
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
			let input_bonus = StringList.unpack(jobs_raw[i].bonus);
			jobs_raw[i].bonus = [];
			for (var j = 0; j < input_bonus.length; j++) {
				let bonus_raw = await bonus.get({ id: input_bonus[j] });

				if (bonus_raw.length > 0) {
					jobs_raw[i].bonus.push(bonus_raw[0]);
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

			// Get all companies
			let company_raw = await companies.get({ id: jobs_raw[i].company });
			jobs_raw[i].company = [];

			if (company_raw.length > 0) {
				jobs_raw[i].company = company_raw[0];
			}
		}
		res.json(jobs_raw);
	},
	//pega os jobs baseado nos filtros
	async getFilter(req, res) {
		var jobs_raw = undefined;
		// Get all jobs
		jobs_raw = await jobs.get(req.query,"LIKE");
		if (jobs_raw.length === 0) {
			res.json({});
			return;
		}

		for (var i = 0; i < jobs_raw.length; i++) {
			// Get all bonus
			let bonus_raw = await bonus.get({ id: jobs_raw[i].bonus });
			let input_bonus = StringList.unpack(jobs_raw[i].bonus);
			jobs_raw[i].bonus = [];
			for (var j = 0; j < input_bonus.length; j++) {
				let bonus_raw = await bonus.get({ id: input_bonus[j] });

				if (bonus_raw.length > 0) {
					jobs_raw[i].bonus.push(bonus_raw[0]);
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

			// Get all companies
			let company_raw = await companies.get({ id: jobs_raw[i].company });
			jobs_raw[i].company = [];

			if (company_raw.length > 0) {
				jobs_raw[i].company = company_raw[0];
			}
		}
		res.json(jobs_raw);
	},


	async tempPostOld(req, res) {
		let body = req.body;

		await companies.save({
			name: body.name_company,
			description: body.description,
			email: body.email,
			postal_code: body.postal_code,
			cnpj: 1234,
			password: '123456',
			website: 'www.google.com',
			created_at: '2020-01-01 00:00:00',
		});

		await jobContacts.save({
			email: body.email,
			number: body.number,
		});

		let company_id = await companies.get({ email: body.email });
		let job_contact_id = await jobContacts.get({ email: body.email });

		await jobs.save({
			name: body.job_name,
			description: body.job_description,
			company: company_id[0].id,
			requireds_hardskill: StringList.pack([0]),
			requireds_softskill: StringList.pack([1]),
			bonus: 0,
			contact: job_contact_id[0].id,
			activities: 'Citadas na descrição',
			created_at: '2020-01-01',
			salary_min: parseInt(body.salary) - parseInt(body.salary) * 0.1,
			salary_max: parseInt(body.salary) + parseInt(body.salary) * 0.1,
			scholarship: body.scholarship,
			modality: body.modality,
			shift: body.shift,
			workload: parseInt(body.time),
			bonus: 0,
			postal_code: body.postal_code,
			type: body.type,
		});

		res.json({});
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
