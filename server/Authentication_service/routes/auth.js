import express from 'express';
import { register } from '../Controllers/auth.js';

const authRouter = express.Router();

authRouter.post('/register', register);

export default authRouter;
