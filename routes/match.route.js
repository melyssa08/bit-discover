import { MatchController } from '../controllers/index.js';
import express from 'express';

const api_match = express.Router(); // Create express router

api_match.post('/', MatchController.post); // Add post job endpoint

export default { route: 'match', router: api_match, api: true }; // Export router
