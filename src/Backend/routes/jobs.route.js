import JobsController from '../controllers/jobs.controller.js';
import express from 'express';

const api_jobs = express.Router();

api_jobs.get('/', JobsController.get);

api_jobs.get('/:id', JobsController.getOne);

api_jobs.post('/', JobsController.post);

api_jobs.put('/:id', JobsController.put);

api_jobs.delete('/:id', JobsController.delete);

export default { route: '/api/jobs', router: api_jobs };
