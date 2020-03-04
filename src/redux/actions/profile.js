import {FETCH_PROFILE, RESET_PROFILE, UPDATE_PROFILE} from '../actionTypes';

export const fetchProfileAction = payload => ({
  type: FETCH_PROFILE,
  payload,
});

export const resetProfileAction = () => ({
  type: RESET_PROFILE,
});

export const updateProfileAction = payload => ({
  type: UPDATE_PROFILE,
  payload,
});
