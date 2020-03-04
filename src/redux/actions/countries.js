import {RESET_COUNTRIES, FETCH_COUNTRIES} from '../actionTypes';

export const fetchCountriesAction = payload => ({
  type: FETCH_COUNTRIES,
  payload,
});

export const resetCountriesAction = () => ({
  type: RESET_COUNTRIES,
});
