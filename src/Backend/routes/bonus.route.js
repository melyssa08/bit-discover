import { BonusController } from '../controllers/index.js';
import express from 'express';

const api_bonus = express.Router(); // Create express router

api_bonus.get('/', BonusController.get); // Add get all bonus endpoint

api_bonus.get('/:id', BonusController.getOne); // Add get bonus by id endpoint

api_bonus.post('/', BonusController.post); // Add post bonus endpoint

api_bonus.put('/:id', BonusController.put); // Add put bonus endpoint

api_bonus.delete('/:id', BonusController.delete); // Add delete bonus endpoint

export default { route: 'bonus', router: api_bonus, api: true }; // Export router
