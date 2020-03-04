import axios from 'axios';
import {API} from '../../config';
import {
  fetchDeviceAction,
  createDeviceAction,
  deleteDeviceAction,
  resetDeviceAction,
  updateDeviceAction,
} from '../actions/device';

export const fetchDevice = data => dispatch => {
  return axios.get(API('devices', data.registration_id)).then(res => {
    dispatch(fetchDeviceAction(res.data));
    return res.data;
  });
};

export const createDevice = data => dispatch => {
  return axios.post(API('devices'), data).then(res => {
    dispatch(createDeviceAction(res.data));
    return res.data;
  });
};

export const updateDevice = (data, registration_id) => dispatch => {
  return axios.patch(API('devices', registration_id), data).then(res => {
    dispatch(updateDeviceAction(res.data));
    return res.data;
  });
};

export const deleteDevice = data => dispatch => {
  return axios.delete(API('devices', data.registration_id)).then(res => {
    dispatch(deleteDeviceAction(data));
    return res.data;
  });
};

export const resetDevice = resetDeviceAction;
