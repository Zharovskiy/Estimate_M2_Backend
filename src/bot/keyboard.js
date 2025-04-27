import {
  buttonsAuth,
  buttonsHome,
  buttonsProjects,
} from './keyboard-buttons.js';

export const keyboardAuth = [[buttonsAuth.register]];

export const keyboardHome = [
  [buttonsHome.newProject, buttonsHome.myProjects],
  [buttonsHome.settings],
];

export const keyboardProjects = [[buttonsProjects.back]];
