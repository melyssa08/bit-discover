import CandidatesGraduationsController from '../controllers/index.js';
import express from 'express';

const api_candidatesgraduations = express.Router(); // Create express router

api_candidatesgraduations.get('/', CandidatesGraduationsController.get); // Add get all candidatesgraduations endpoint

api_candidatesgraduations.get('/:id', CandidatesGraduationsController.getOne); // Add get candidatesgraduations by id endpoint

api_candidatesgraduations.post('/', CandidatesGraduationsController.post); // Add post candidatesgraduations endpoint

api_candidatesgraduations.put('/:id', CandidatesGraduationsController.put); // Add put candidatesgraduations endpoint

api_candidatesgraduations.delete('/:id', CandidatesGraduationsController.delete); // Add delete candidatesgraduations endpoint

export default { route: 'candidatesgraduations', router: api_candidatesgraduations, api: true }; // Export router
