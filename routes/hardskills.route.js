import { HardSkillsController } from '../controllers/index.js';
import express from 'express';

const api_hardskills = express.Router(); // Create express router

api_hardskills.get('/', HardSkillsController.get); // Add get all hardskills endpoint

api_hardskills.get('/:id', HardSkillsController.getOne); // Add get hardskills by id endpoint

api_hardskills.post('/', HardSkillsController.post); // Add post hardskills endpoint

api_hardskills.put('/:id', HardSkillsController.put); // Add put hardskills endpoint

api_hardskills.delete('/:id', HardSkillsController.delete); // Add delete hardskills endpoint

export default { route: 'hardskills', router: api_hardskills, api: true }; // Export router