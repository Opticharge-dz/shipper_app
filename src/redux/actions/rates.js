import {RESET_RATES, FETCH_RATES} from '../actionTypes';

export const fetchRatesAction = payload => ({
  type: FETCH_RATES,
  payload,
});

export const resetRatesAction = () => ({
  type: RESET_RATES,
});
