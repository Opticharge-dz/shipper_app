import axios from 'axios';
import {API} from '../../config';
import {fetchCountriesAction, resetCountriesAction} from '../actions/countries';

export const fetchCountries = () => dispatch => {
  return axios.get(API('countries')).then(res => {
    dispatch(fetchCountriesAction(res.data));
    return res.data;
  });
};

export const resetCountries = resetCountriesAction;
