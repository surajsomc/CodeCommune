import express from 'express';
import registerController from '../controllers/register.js';

const registerRouter = express.Router();

registerRouter.post('/', registerController);

export default registerRouter;