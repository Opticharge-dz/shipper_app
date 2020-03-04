import {RESET_CURRENCIES, FETCH_CURRENCIES} from '../actionTypes';

export const fetchCurrenciesAction = payload => ({
  type: FETCH_CURRENCIES,
  payload,
});

export const resetCurrenciesAction = () => ({
  type: RESET_CURRENCIES,
});
