import express from 'express';
import { generateBusinessPlan } from '../controllers/generating.js';

const generatingRouter = express.Router();

generatingRouter.post('/completions2', generateBusinessPlan);

export default generatingRouter;
