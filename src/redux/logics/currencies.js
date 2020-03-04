import axios from 'axios';
import {API} from '../../config';
import {
  fetchCurrenciesAction,
  resetCurrenciesAction,
} from '../actions/currencies';

export const fetchCurrencies = () => dispatch => {
  return axios.get(API('currencies')).then(res => {
    dispatch(fetchCurrenciesAction(res.data));
    return res.data;
  });
};

export const resetCurrencies = resetCurrenciesAction;
