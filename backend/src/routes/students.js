import express from 'express';
import studentsController from '../controllers/students.js';

const studentRouter = express.Router();

studentRouter.get('/', studentsController);

export default studentRouter;