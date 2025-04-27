import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import { telegramBot } from './bot/telegram_bot.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    setupServer();
    telegramBot();
  } catch (error) {
    console.error(`Error during app bootstrap: ${error.message}`);
  }
};

bootstrap();
