import JobContactsController from '../controllers/index.js';
import express from 'express';

const api_jobcontacts = express.Router(); // Create express router

api_jobcontacts.get('/', JobContactsController.get); // Add get all jobcontacts endpoint

api_jobcontacts.get('/:id', JobContactsController.getOne); // Add get jobcontacts by id endpoint

api_jobcontacts.post('/', JobContactsController.post); // Add post jobcontacts endpoint

api_jobcontacts.put('/:id', JobContactsController.put); // Add put jobcontacts endpoint

api_jobcontacts.delete('/:id', JobContactsController.delete); // Add delete jobcontacts endpoint

export default { route: 'jobcontacts', router: api_jobcontacts, api: true }; // Export router
