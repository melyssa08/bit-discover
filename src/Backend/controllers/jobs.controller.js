import { jobs } from '../models/index.js';

const JobsController = {
	get(req, res) {
		jobs.get({}).then((result) => {
			res.send(result);
		});
	},

	getOne(req, res) {
		jobs.get({ id: req.params.id }).then((result) => {
			res.send(result);
		});
	},

	post(req, res) {
		jobs.save(req.body).then((result) => {
			res.send(result);
		});
	},

	put(req, res) {
		jobs.update(req.body, { id: req.params.id }).then((result) => {
			res.send(result);
		});
	},

	delete(req, res) {
		jobs.delete({ id: req.params.id }).then((result) => {
			res.send(result);
		});
	},
};

export default JobsController;
