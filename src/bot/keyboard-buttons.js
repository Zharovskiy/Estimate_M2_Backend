import { COMMANDS } from './constants/index.js';

export const buttonsAuth = {
  register: { text: 'Реєстрація', callback_data: COMMANDS.REGISTER_USER },
};

export const buttonsHome = {
  myProjects: '🏡 Мої проекти',
  newProject: '➕ Новий проект',
  settings: '⚙️ Налаштування',
};

export const buttonsProjects = {
  back: 'Назад',
};
