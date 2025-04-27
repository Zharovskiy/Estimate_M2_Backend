import { COMMANDS } from '../constants/index.js';
import { getUserState, setUserState, deleteUserState } from '../state.js';

export const registerUser = (bot, msg) => {
  const { id } = msg.chat;
  let userState = getUserState(id);

  const steps = {
    step_1: { action: COMMANDS.REGISTER_USER, step: 'email' },
    step_2: { action: COMMANDS.REGISTER_USER, step: 'password' },
    clear: { action: null, step: null },
  };

  if (!userState || !userState.step) {
    setUserState(id, steps.step_1);
    bot.sendMessage(id, 'Вкажи свій email 👇');
  }

  switch (userState.step) {
    case 'email': {
      const email = msg.text.trim();

      // Валідація email
      if (!email.includes('@')) {
        bot.sendMessage(id, 'Некоректний email. Спробуй ще раз 👇');
        return;
      }

      setUserState(id, { ...steps.step_2, email });
      bot.sendMessage(id, 'Вкажи свій пароль 👇');
      break;
    }

    case 'password': {
      const password = msg.text.trim();

      // Валідація пароля
      if (password[0] === '/') {
        bot.sendMessage(
          id,
          'Пароль не має починатись з символу "/". Спробуй ще раз 👇',
        );
        return;
      }

      if (password.length < 6) {
        bot.sendMessage(
          id,
          'Пароль має бути не менше 6 символів. Спробуй ще раз 👇',
        );
        return;
      }

      if (password.length > 20) {
        bot.sendMessage(
          id,
          'Пароль має бути не більше 20 символів. Спробуй ще раз 👇',
        );
        return;
      }

      // Збереження даних
      const { email } = userState;
      setUserState(id, { ...steps.clear, email, password });

      bot.sendMessage(
        id,
        `Реєстрація успішна! Ваші дані:\nEmail: ${email}\nПароль: ${password}`,
      );

      // Видалення стану
      deleteUserState(id);
      break;
    }
  }
};
