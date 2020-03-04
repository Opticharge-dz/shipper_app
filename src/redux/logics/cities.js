import axios from 'axios';
import {API} from '../../config';
import {fetchCitiesAction, resetCitiesAction} from '../actions/cities';

export const fetchCities = (params = {}) => dispatch => {
  return axios
    .get(API('cities'), {
      params,
    })
    .then(res => {
      dispatch(fetchCitiesAction(res.data));
      return res.data;
    });
};

export const resetCities = resetCitiesAction;
