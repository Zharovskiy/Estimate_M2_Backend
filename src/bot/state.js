const userStates = new Map();

export const getUserState = (userId) => userStates.get(userId) || {};
export const setUserState = (userId, state) => userStates.set(userId, state);
export const deleteUserState = (userId) => userStates.delete(userId);
