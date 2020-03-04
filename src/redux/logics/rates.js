import axios from 'axios';
import {API} from '../../config';
import {fetchRatesAction, resetRatesAction} from '../actions/rates';

export const fetchRates = () => dispatch => {
  return axios.get(API('rates')).then(res => {
    dispatch(fetchRatesAction(res.data));
    return res.data;
  });
};

export const resetRates = resetRatesAction;
