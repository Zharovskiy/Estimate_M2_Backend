import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { projectsSchema } from '../validation/projects/projectsSchema.js';

const projectsRouter = Router();

projectsRouter.post('/projects', validateBody(projectsSchema), ctrlWrapper());

export default projectsRouter;
