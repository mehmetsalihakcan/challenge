import * as actionTypes from '../actionTypes';

export interface ICustomer {
  userId: number;
  name: string;
  data: Array<Object>;
  error: string;
}

const initialState: ICustomer = {
  userId: null,
  name: '',
  data: [{url: ''}],
  error: '',
};

export default (state = initialState, action: any): ICustomer => {
  switch (action.type) {
    case actionTypes.SAVE_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case actionTypes.GET_CARDS:
      console.log(action.payload);
      return {
        ...state,
        data: [{url: action.payload}],
      };

    case actionTypes.FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
