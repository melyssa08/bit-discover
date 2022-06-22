import { JobsController } from '../controllers/index.js';
import express from 'express';

const api_jobs = express.Router(); // Create express router

api_jobs.get('/', JobsController.getFilter); // Add get jobs by filter endpoint

api_jobs.get('/:id', JobsController.getOne); // Add get job by id endpoint

api_jobs.post('/', JobsController.post); // Add post job endpoint

api_jobs.post('/old', JobsController.tempPostOld); // Add post job endpoint

api_jobs.put('/:id', JobsController.put); // Add put job endpoint

api_jobs.delete('/:id', JobsController.delete); // Add delete job endpoint

export default { route: 'jobs', router: api_jobs, api: true }; // Export router
