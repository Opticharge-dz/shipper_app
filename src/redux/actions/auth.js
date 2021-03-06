import {SET_AUTH, RESET_AUTH} from '../actionTypes';

export const setAuthAction = payload => ({
  type: SET_AUTH,
  payload,
});

export const resetAuthAction = () => ({
  type: RESET_AUTH,
});
