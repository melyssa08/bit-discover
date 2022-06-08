import { GraduationNamespacesController } from '../controllers/index.js';
import express from 'express';

const api_graduation_namespaces = express.Router(); // Create express router

api_graduation_namespaces.get('/', GraduationNamespacesController.get); // Add get all graduationnamespaces endpoint

api_graduation_namespaces.get('/:id', GraduationNamespacesController.getOne); // Add get graduationnamespaces by id endpoint

api_graduation_namespaces.post('/', GraduationNamespacesController.post); // Add post graduationnamespaces endpoint

api_graduation_namespaces.put('/:id', GraduationNamespacesController.put); // Add put graduationnamespaces endpoint

api_graduation_namespaces.delete('/:id', GraduationNamespacesController.delete); // Add delete graduationnamespaces endpoint

export default { route: 'graduation_namespaces', router: api_graduation_namespaces, api: true }; // Export router
