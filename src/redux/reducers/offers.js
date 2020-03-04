import {
  CREATE_OFFER,
  DELETE_OFFER,
  FETCH_OFFERS,
  RESET_OFFERS,
} from '../actionTypes';
import _ from 'lodash';
import initialState from '../initialState';

export default (state = initialState.offers, action) => {
  switch (action.type) {
    case FETCH_OFFERS:
      return _.mapKeys(action.payload, 'id');
    case DELETE_OFFER: {
      return _.omit(state, action.payload.id);
    }
    case CREATE_OFFER: {
      return _.merge({}, {[action.payload.id]: action.payload}, state);
    }
    case RESET_OFFERS:
      return initialState.offers;
    default:
      return state;
  }
};
