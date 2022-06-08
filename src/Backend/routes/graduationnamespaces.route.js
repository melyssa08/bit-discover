import GraduationNamespacesController from '../controllers/index.js';
import express from 'express';

const api_graduationnamespaces = express.Router(); // Create express router

api_graduationnamespaces.get('/', GraduationNamespacesController.get); // Add get all graduationnamespaces endpoint

api_graduationnamespaces.get('/:id', GraduationNamespacesController.getOne); // Add get graduationnamespaces by id endpoint

api_graduationnamespaces.post('/', GraduationNamespacesController.post); // Add post graduationnamespaces endpoint

api_graduationnamespaces.put('/:id', GraduationNamespacesController.put); // Add put graduationnamespaces endpoint

api_graduationnamespaces.delete('/:id', GraduationNamespacesController.delete); // Add delete graduationnamespaces endpoint

export default { route: 'graduationnamespaces', router: api_graduationnamespaces, api: true }; // Export router
