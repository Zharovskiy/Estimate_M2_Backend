import { registerUser } from './callbacks/registerUser.js';
import { COMMANDS } from './constants/index.js';

export const selectActions = (bot, msg, action) => {
  switch (action) {
    case COMMANDS.REGISTER_USER:
      registerUser(bot, msg);
      break;
  }
};
