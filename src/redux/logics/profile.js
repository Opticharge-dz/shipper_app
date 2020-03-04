import axios from 'axios';
import {API} from '../../config';
import {
  fetchProfileAction,
  updateProfileAction,
  resetProfileAction,
} from '../actions/profile';

export const fetchProfile = () => dispatch => {
  return axios.get(API('profile')).then(res => {
    dispatch(fetchProfileAction(res.data));
    return res.data;
  });
};

export const updateProfile = data => dispatch => {
  return axios.patch(API('profile'), data).then(res => {
    dispatch(updateProfileAction(res.data));
    return res.data;
  });
};

export const resetProfile = resetProfileAction;
