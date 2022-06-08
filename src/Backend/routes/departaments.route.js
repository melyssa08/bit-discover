import { DepartamentsController } from '../controllers/index.js';
import express from 'express';

const api_departaments = express.Router(); // Create express router

api_departaments.get('/', DepartamentsController.get); // Add get all departaments endpoint

api_departaments.get('/:id', DepartamentsController.getOne); // Add get departaments by id endpoint

api_departaments.post('/', DepartamentsController.post); // Add post departaments endpoint

api_departaments.put('/:id', DepartamentsController.put); // Add put departaments endpoint

api_departaments.delete('/:id', DepartamentsController.delete); // Add delete departaments endpoint

export default { route: 'departaments', router: api_departaments, api: true }; // Export router
