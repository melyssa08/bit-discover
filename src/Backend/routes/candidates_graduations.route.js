import { CandidatesGraduationsController } from '../controllers/index.js';
import express from 'express';

const api_candidates_graduations = express.Router(); // Create express router

api_candidates_graduations.get('/', CandidatesGraduationsController.get); // Add get all candidatesgraduations endpoint

api_candidates_graduations.get('/:id', CandidatesGraduationsController.getOne); // Add get candidatesgraduations by id endpoint

api_candidates_graduations.post('/', CandidatesGraduationsController.post); // Add post candidatesgraduations endpoint

api_candidates_graduations.put('/:id', CandidatesGraduationsController.put); // Add put candidatesgraduations endpoint

api_candidates_graduations.delete('/:id', CandidatesGraduationsController.delete); // Add delete candidatesgraduations endpoint

export default { route: 'candidates_graduations', router: api_candidates_graduations, api: true }; // Export router
