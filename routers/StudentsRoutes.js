import * as StudentsController from '../controllers/StudentsController.js';
import express from 'express';

const studentsRoutes = express.Router();

studentsRoutes.get('/all', StudentsController.fetchStudents);
studentsRoutes.post('/new', StudentsController.createStudent);
studentsRoutes.put('/edit/:studentId', StudentsController.editStudent);
studentsRoutes.delete('/delete/:studentId', StudentsController.deleteStudent);

export default studentsRoutes;