import SoftSkillsController from '../controllers/index.js';
import express from 'express';

const api_softskills = express.Router(); // Create express router

api_softskills.get('/', SoftSkillsController.get); // Add get all softskills endpoint

api_softskills.get('/:id', SoftSkillsController.getOne); // Add get softskills by id endpoint

api_softskills.post('/', SoftSkillsController.post); // Add post softskills endpoint

api_softskills.put('/:id', SoftSkillsController.put); // Add put softskills endpoint

api_softskills.delete('/:id', SoftSkillsController.delete); // Add delete softskills endpoint

export default { route: 'softskills', router: api_softskills, api: true }; // Export router
