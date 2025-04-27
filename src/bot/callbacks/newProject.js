//     const userStates = {}; // Зберігання станів користувачів

//     bot.on('callback_query', (query) => {
//       const { id } = query.message.chat;

//       // Скидаємо попередній стан, якщо він існував
//       if (userStates[id]) {
//         delete userStates[id];
//       }

//       // Ініціалізуємо новий процес
//       userStates[id] = {
//         step: 0,
//         project: { name: null, address: null, area: null },
//       };
//       bot.sendMessage(
//         id,
//         'Напиши назву проекту або напиши /cancel, щоб скасувати створення.',
//       );
//     });

//     bot.on('message', (msg) => {
//       const { id } = msg.chat;
//       const text = msg.text;

//       // Скасування процесу, якщо користувач ввів /cancel
//       if (text.toLowerCase() === '/cancel') {
//         if (userStates[id]) {
//           delete userStates[id];
//           bot.sendMessage(id, 'Створення проекту скасовано.');
//         } else {
//           bot.sendMessage(id, 'Немає активного процесу.');
//         }
//         return;
//       }

//       // Якщо немає активного процесу для користувача
//       if (!userStates[id]) {
//         bot.sendMessage(
//           id,
//           'Немає активного процесу. Натисніть "Додати проект", щоб розпочати.',
//         );
//         return;
//       }

//       const userState = userStates[id];

//       switch (userState.step) {
//         case 0:
//           userState.project.name = text;
//           userState.step++;
//           bot.sendMessage(
//             id,
//             'Напиши адресу проекту або напиши /cancel, щоб скасувати створення.',
//           );
//           break;

//         case 1:
//           userState.project.address = text;
//           userState.step++;
//           bot.sendMessage(
//             id,
//             'Напиши площу проекту або напиши /cancel, щоб скасувати створення.',
//           );
//           break;

//         case 2:
//           userState.project.areal = text;
//           const newProject = userState.project;

//           // Відправка фінального повідомлення
//           bot.sendMessage(
//             id,
//             `Проект створено:\nНазва: ${newProject.name}\nАдреса: ${newProject.address}\nПлоща: ${newProject.areal} м²`,
//           );

//           // Скидаємо стан після завершення
//           delete userStates[id];
//           break;

//         default:
//           bot.sendMessage(id, 'Щось пішло не так. Спробуйте знову.');
//           delete userStates[id];
//           break;
//       }
//     });
