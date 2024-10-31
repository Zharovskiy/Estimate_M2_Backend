import { Router } from 'express';
// import projectsRouter from './projects.js';
import authRouter from './auth.js';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
// rootRouter.use('/projects', projectsRouter);

export default rootRouter;
