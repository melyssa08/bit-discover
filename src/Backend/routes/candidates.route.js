import { CandidatesController } from '../controllers/index.js';
import express from 'express';

const api_candidates = express.Router(); // Create express router

api_candidates.get('/', CandidatesController.get); // Add get all candidates endpoint

api_candidates.get('/:id', CandidatesController.getOne); // Add get candidates by id endpoint

api_candidates.post('/', CandidatesController.post); // Add post candidates endpoint

api_candidates.put('/:id', CandidatesController.put); // Add put candidates endpoint

api_candidates.delete('/:id', CandidatesController.delete); // Add delete candidates endpoint

export default { route: 'candidates', router: api_candidates, api: true }; // Export router