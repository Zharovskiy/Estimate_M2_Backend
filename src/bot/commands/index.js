import { startCommand } from './start.js';

export const commands = (bot) => {
  bot.onText(/\/start/, (msg) => {
    startCommand(bot, msg);
  });
};
