import * as StudentsController from '../controllers/StudentsController.js';
import express from 'express';

const studentsRoutes = express.Router();

studentsRoutes.get('/all', StudentsController.fetchStudents);
// bookRoutes.post('new', BookController.createBoook);
export default studentsRoutes;