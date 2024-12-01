import { Router } from 'express';
import authRouter from './auth.js';
import projectsRouter from './projects.js';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/projects', projectsRouter);

export default rootRouter;
