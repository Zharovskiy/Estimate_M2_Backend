import Joi from 'joi';

export const projectsSchema = Joi.object({
  userId: Joi.string().required(),
  address: Joi.object().required(),
  projectType: Joi.string().required(),
  projectArea: Joi.number(),
});
