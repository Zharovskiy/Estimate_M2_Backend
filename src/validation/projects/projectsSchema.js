import Joi from 'joi';

export const projectsSchema = Joi.object({
  nameProject: Joi.string().required().max(100),
  userId: Joi.string().required(),
  address: Joi.object({
    city: Joi.string().max(30),
    street: Joi.string().max(50),
    building: Joi.string().max(10),
    house: Joi.string().max(10),
    block: Joi.string().max(5),
    apartment: Joi.string().max(5),
    entrance: Joi.string().max(5),
    floor: Joi.string().max(3),
    elevator: Joi.boolean(),
  }),
  projectType: Joi.string().valid('apartment', 'house', 'office', 'other'),
  totalArea: Joi.number().positive(),
  description: Joi.string().max(200),
  rooms: Joi.array(),
  client: Joi.object({
    name: Joi.string().max(30),
    phone: Joi.string().max(30),
    email: Joi.string().email(),
  }),
  costProject: Joi.object({
    totalWorksQuantity: Joi.number().max(10000),
    totalWorksCost: Joi.number().max(1000000),
    totalMaterialsQuantity: Joi.number().max(10000),
    totalMaterialsCost: Joi.number().max(1000000),
    totalCost: Joi.number().max(10000000),
  }),
});
