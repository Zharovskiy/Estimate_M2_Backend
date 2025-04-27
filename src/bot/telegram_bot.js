import TelegramBot from 'node-telegram-bot-api';
import { env } from '../utils/env.js';
import { TELEGRAM_TOKEN } from '../constants/index.js';
import { commands } from './commands/index.js';
import { getUserState } from './state.js';
import { selectActions } from './actions.js';
import { isCommand } from './utils.js';

export const telegramBot = () => {
  try {
    const token = env(TELEGRAM_TOKEN);

    const bot = new TelegramBot(token, {
      polling: {
        interval: 300,
        autoStart: true,
        params: {
          timeout: 10,
        },
      },
    });

    console.log('Bot has been started...');

    commands(bot);

    bot.on('callback_query', (query) => {
      selectActions(bot, query.message, query.data);
    });

    bot.on('message', (msg) => {
      if (isCommand(msg.text)) return;
      const { id } = msg.chat;
      const userState = getUserState(id);
      if (!userState.action) return;
      selectActions(bot, msg, userState.action);
    });
  } catch (e) {
    console.log('Щось пішло не так', e);
    throw e;
  }
};
