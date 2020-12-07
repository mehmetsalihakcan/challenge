import * as actionTypes from '../actionTypes';

export interface ICustomer {
  userId: number;
  name: string;
}

const initialState: ICustomer = {
  userId: null,
  name: '',
};

export default (state = initialState, action: any): ICustomer => {
  switch (action.type) {
    case actionTypes.SAVE_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};
