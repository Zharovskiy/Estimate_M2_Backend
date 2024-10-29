import express from 'express';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/constants.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import pino from 'pino-http';
// import rootRouter from './routers/index.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

export const setupServer = () => {
  const app = express();

  app.use(cookieParser());

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );

  const allowedOrigins = [
    'http://localhost:4000',
    'https://aqua-track-web-app-frontend.vercel.app',
  ];

  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      optionsSuccessStatus: 200,
      credentials: true,
    }),
  );

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  //   app.use(rootRouter);

  app.use('*', notFoundHandler);
  app.use(errorHandler);

  const PORT = env(ENV_VARS.PORT, 3000);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};