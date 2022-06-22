import { JobsContactsController } from '../controllers/index.js';
import express from 'express';

const api_jobscontacts = express.Router(); // Create express router

api_jobscontacts.get('/', JobsContactsController.get); // Add get all jobscontacts endpoint

api_jobscontacts.get('/:id', JobsContactsController.getOne); // Add get jobscontacts by id endpoint

api_jobscontacts.post('/', JobsContactsController.post); // Add post jobscontacts endpoint

api_jobscontacts.put('/:id', JobsContactsController.put); // Add put jobscontacts endpoint

api_jobscontacts.delete('/:id', JobsContactsController.delete); // Add delete jobscontacts endpoint

export default { route: 'jobscontacts', router: api_jobscontacts, api: true }; // Export router