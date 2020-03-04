import {FETCH_COUNTRIES, RESET_COUNTRIES} from '../actionTypes';
import initialState from '../initialState';

export default (state = initialState.countries, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES: {
      return action.payload;
    }
    case RESET_COUNTRIES: {
      return initialState.countries;
    }
    default: {
      return state;
    }
  }
};
