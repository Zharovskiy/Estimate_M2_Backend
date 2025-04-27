import { Users } from '../../db/models/user.js';
import { selectActions } from '../actions.js';
import { keyboardAuth } from '../keyboard.js';
import { getUserState } from '../state.js';

export const startCommand = async (bot, msg) => {
  const { id } = msg.chat;
  let firstName;
  let lastName;
  const telegramId = msg.from.id;
  const user = await Users.findOne({ telegramId });
  const userState = getUserState(telegramId);

  if (userState.action) {
    selectActions(bot, msg, userState.action);
  }

  if (user && !userState.action) {
    bot.sendMessage(id, 'Тут треба запропонувати меню для користувача');
  }

  if (!user && !userState.action) {
    firstName = msg.from.first_name || 'Користувач';
    lastName = msg.from.last_name || '';
    const text = `Привіт, ${firstName} ${lastName}\n\nДля початку роботи потрібно зареєструватись: \n👇`;

    bot.sendMessage(id, text, {
      reply_markup: {
        inline_keyboard: keyboardAuth,
      },
    });
  }
};
