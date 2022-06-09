import { JobContactsController } from '../controllers/index.js';
import express from 'express';

const api_job_contacts = express.Router(); // Create express router

api_job_contacts.get('/', JobContactsController.get); // Add get all jobcontacts endpoint

api_job_contacts.get('/:id', JobContactsController.getOne); // Add get jobcontacts by id endpoint

api_job_contacts.post('/', JobContactsController.post); // Add post jobcontacts endpoint

api_job_contacts.put('/:id', JobContactsController.put); // Add put jobcontacts endpoint

api_job_contacts.delete('/:id', JobContactsController.delete); // Add delete jobcontacts endpoint

export default { route: 'job_contacts', router: api_job_contacts, api: true }; // Export router
