import {
  DELETE_DEVICE,
  RESET_DEVICE,
  FETCH_DEVICE,
  CREATE_DEVICE,
  UPDATE_DEVICE,
} from '../actionTypes';

export const fetchDeviceAction = payload => ({
  type: FETCH_DEVICE,
  payload,
});

export const resetDeviceAction = () => ({
  type: RESET_DEVICE,
});

export const createDeviceAction = payload => ({
  type: CREATE_DEVICE,
  payload,
});

export const deleteDeviceAction = payload => ({
  type: DELETE_DEVICE,
  payload,
});

export const updateDeviceAction = payload => ({
  type: UPDATE_DEVICE,
  payload,
});
