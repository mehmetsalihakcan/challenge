import * as actionTypes from '../actionTypes';
import {Dispatch} from 'redux';
import Config from '../../../../integration-config.json';
const baseURL = Config.baseURL1;

export const saveUserId = (userId: number) => {
  return {type: actionTypes.SAVE_USER_ID, payload: userId};
};

export const requestFailed = (message: any) => {
  return {type: actionTypes.FAILED, payload: message};
};

export const getCards = () => {
  return async (dispatch: Dispatch) => {
    try {
      //create random color
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const URL = `${baseURL}/${randomColor}`;

      let result = await fetch(URL).then((response) => {
        if (response.status === 200) {
          dispatch(requestFailed(''));
          return dispatch({
            type: actionTypes.GET_CARDS,
            payload: response.url,
          });
        }
      });
    } catch (error) {
      dispatch(requestFailed(error));
      console.log('Hata : ', error);
    }
  };
};
