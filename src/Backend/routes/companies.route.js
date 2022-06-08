import CompaniesController from '../controllers/index.js';
import express from 'express';

const api_companies = express.Router(); // Create express router

api_companies.get('/', CompaniesController.get); // Add get all companies endpoint

api_companies.get('/:id', CompaniesController.getOne); // Add get companies by id endpoint

api_companies.post('/', CompaniesController.post); // Add post companies endpoint

api_companies.put('/:id', CompaniesController.put); // Add put companies endpoint

api_companies.delete('/:id', CompaniesController.delete); // Add delete companies endpoint

export default { route: 'companies', router: api_companies, api: true }; // Export router
