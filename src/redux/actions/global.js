import {SET_GLOBAL, RESET_GLOBAL} from '../actionTypes';

export const setGlobalAction = payload => ({
  type: SET_GLOBAL,
  payload,
});

export const resetGlobalAction = () => ({
  type: RESET_GLOBAL,
});
