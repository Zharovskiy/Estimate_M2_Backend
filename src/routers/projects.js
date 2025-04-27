import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { projectsSchema } from '../validation/projects/projectsSchema.js';
import { authenticate } from '../middlewares/authenticate.js';
import {
  createProjectController,
  getProjectsController,
  getProjectByIdController,
  updateProjectController,
  deleteProjectController,
} from '../controllers/project.js';

const projectsRouter = Router();

projectsRouter.use('/', authenticate);

projectsRouter.post(
  '/',
  validateBody(projectsSchema),
  ctrlWrapper(createProjectController),
);

projectsRouter.get('/', ctrlWrapper(getProjectsController));

projectsRouter.get('/:id', ctrlWrapper(getProjectByIdController));

projectsRouter.patch(
  '/:id',
  validateBody(projectsSchema),
  ctrlWrapper(updateProjectController),
);

projectsRouter.delete('/:id', ctrlWrapper(deleteProjectController));

export default projectsRouter;
