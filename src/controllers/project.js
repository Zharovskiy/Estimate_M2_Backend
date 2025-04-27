import createHttpError from 'http-errors';
import {
  createProject,
  getAllProjects,
  getProjectById,
  updatedProject,
  deleteProject,
} from '../services/project.js';

export const createProjectController = async (req, res, next) => {
  const newProject = await createProject(req.body);

  if (!newProject) {
    next(createHttpError(404, 'project not created'));
    return;
  }

  res.status(201).json({
    status: 201,
    message: 'Successfully create project!',
    data: newProject,
  });
};

export const getProjectsController = async (req, res) => {
  const projects = await getAllProjects(req.user._id);

  res.status(200).json({
    status: 200,
    message: 'Successfully found projects!',
    data: projects,
  });
};

export const getProjectByIdController = async (req, res, next) => {
  const project = await getProjectById(req.user._id, req.params.id);

  if (!project) {
    return next(createHttpError(404, 'Project not found'));
  }

  res.status(200).json({
    status: 200,
    message: 'Project successfully retrieved!',
    data: project,
  });
};

export const updateProjectController = async (req, res, next) => {
  const payload = req.body;
  const userId = req.user.id;
  const projectId = req.params.id;
  const project = await updatedProject(userId, projectId, payload, {
    new: true,
  });

  if (!project) {
    return next(createHttpError(404, 'Project not found for update'));
  }

  res.status(200).json({
    status: 200,
    message: 'Project updated successfully!',
    data: project,
  });
};

export const deleteProjectController = async (req, res, next) => {
  const userId = req.user.id;
  const projectId = req.params.id;
  const project = await deleteProject(userId, projectId);

  if (!project) {
    return next(createHttpError(404, 'Project not found for deletion'));
  }

  res.status(204).json({
    status: 204,
    message: 'Project deleted successfully!',
  });
};
