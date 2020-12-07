import * as actionTypes from '../actionTypes';

export const saveUserId = (userId: number) => {
  return {type: actionTypes.SAVE_USER_ID, payload: userId};
};
