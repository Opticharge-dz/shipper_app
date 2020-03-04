import {
  FETCH_OFFERS,
  CREATE_OFFER,
  DELETE_OFFER,
  RESET_OFFERS,
} from '../actionTypes';

export const fetchOffersAction = payload => ({
  type: FETCH_OFFERS,
  payload,
});

export const resetOffersAction = () => ({
  type: RESET_OFFERS,
});

export const createOfferAction = payload => ({
  type: CREATE_OFFER,
  payload,
});

export const deleteOfferAction = payload => ({
  type: DELETE_OFFER,
  payload,
});
