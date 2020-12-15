import * as actionTypes from '../actionTypes';
import axios from 'axios';
import {Dispatch} from 'redux';
import Config from '../../../../integration-config.json';

export const saveUserId = (userId: number) => {
  return {type: actionTypes.SAVE_USER_ID, payload: userId};
};

export const requestFailed = (message: any) => {
  return {type: actionTypes.FAILED, payload: message};
};

export const getCard = (cardSize: string) => {
  //create random color
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const URL = `${Config.baseURL}${cardSize}/${randomColor}`;

  return (dispatch: Dispatch) => {
    axios
      .get(URL)
      .then((response) => {
        console.log('axios response : ', response.status);
        if (response.status === 200) {
          dispatch(requestFailed(''));
        }

        return dispatch({
          type: actionTypes.GET_URL,
          payload: response.config.url,
        });
      })
      .catch((error) => {
        console.log('axios error : ', error);
        dispatch(requestFailed(error));
      });
  };
};

export const changeCardSize = (size: string) => {
  return {type: actionTypes.CHANGE_CARD_SIZE, payload: size};
};
