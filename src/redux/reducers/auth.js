import {
  SET_AUTH,
  RESET_AUTH,
  UPDATE_PROFILE,
  FETCH_PROFILE,
  RESET_PROFILE,
} from '../actionTypes';
import _ from 'lodash';

import initialState from '../initialState';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return _.merge({}, state, {user: action.payload});
    case UPDATE_PROFILE:
      const updated = _.merge({}, state.user, action.payload);
      return _.merge({}, state, {user: updated});
    case RESET_PROFILE:
      return _.merge({}, state, {user: initialState.auth.user});
    case SET_AUTH:
      return _.merge({}, state, action.payload);
    case RESET_AUTH:
      return initialState.auth;
    default:
      return state;
  }
};
