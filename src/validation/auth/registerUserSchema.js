import Joi from 'joi';

export const registerUserSchema = Joi.object({
  userName: Joi.string().required().min(3).max(20),
  telegramId: Joi.number(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(20),
});
