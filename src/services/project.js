import { Project } from '../db/models/project.js';

export const createProject = async (payload) => {
  return await Project.create({ ...payload });
};

export const getAllProjects = async (userId) => {
  const projects = await Project.find({ userId });
  return projects;
};

export const getProjectById = async (userId, id) => {
  const project = await Project.findOne({ userId, _id: id });
  return project;
};

export const updatedProject = async (
  userId,
  projectId,
  payload,
  options = {},
) => {
  const project = await Project.findOneAndUpdate(
    { userId, _id: projectId },
    payload,
    { new: true, ...options },
  );
  return project;
};

export const deleteProject = async (userId, projectId) => {
  const project = await Project.findOneAndDelete({
    userId,
    _id: projectId,
  });
  return project;
};
