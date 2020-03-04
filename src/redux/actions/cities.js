import {RESET_CITIES, FETCH_CITIES} from '../actionTypes';

export const fetchCitiesAction = payload => ({
  type: FETCH_CITIES,
  payload,
});

export const resetCitiesAction = () => ({
  type: RESET_CITIES,
});
