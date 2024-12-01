import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth/registerUserSchema.js';
import { loginUserSchema } from '../validation/auth/loginUserSchema.js';
import { requestResetEmailSchema } from '../validation/auth/sendResetEmailSchema.js';
import { resetPasswordSchema } from '../validation/auth/resetPasswordSchema.js';
import {
  registerUserController,
  loginUserController,
  refreshTokenUserController,
  logoutUserController,
  requestResetEmailController,
  resetPasswordController,
} from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
authRouter.post('/refresh', ctrlWrapper(refreshTokenUserController));
authRouter.post('/logout', ctrlWrapper(logoutUserController));
authRouter.post(
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);
authRouter.post(
  '/reset-password',
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default authRouter;
