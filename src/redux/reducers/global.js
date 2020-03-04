import {SET_GLOBAL, RESET_GLOBAL} from '../actionTypes';
import initialState from '../initialState';

export default (state = initialState.global, action) => {
  switch (action.type) {
    case SET_GLOBAL: {
      return {...state, ...action.payload};
    }
    case RESET_GLOBAL: {
      return initialState.global;
    }
    default: {
      return state;
    }
  }
};
