import {FETCH_CITIES, RESET_CITIES} from '../actionTypes';
import initialState from '../initialState';

export default (state = initialState.cities, action) => {
  switch (action.type) {
    case FETCH_CITIES: {
      return action.payload;
    }
    case RESET_CITIES: {
      return initialState.cities;
    }
    default: {
      return state;
    }
  }
};
