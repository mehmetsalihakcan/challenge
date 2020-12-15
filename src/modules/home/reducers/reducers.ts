import * as actionTypes from '../actionTypes';

export interface ICustomer {
  userId: number;
  name: string;
  url: string;
  error: string;
  cardSize: string;
}

const initialState: ICustomer = {
  userId: null,
  name: '',
  url: '',
  error: '',
  cardSize: '800x600',
};

export default (state = initialState, action: any): ICustomer => {
  switch (action.type) {
    case actionTypes.SAVE_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case actionTypes.GET_URL:
      console.log(action.payload);
      return {
        ...state,
        url: action.payload,
      };

    case actionTypes.FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.CHANGE_CARD_SIZE:
      return {
        ...state,
        cardSize: action.payload,
      };
    default:
      return state;
  }
};
