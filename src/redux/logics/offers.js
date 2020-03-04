import axios from 'axios';
import {API} from '../../config';
import {
  fetchOffersAction,
  createOfferAction,
  deleteOfferAction,
  resetOffersAction,
} from '../actions/offers';

export const fetchOffers = () => dispatch => {
  return axios.get(API('offers')).then(res => {
    dispatch(fetchOffersAction(res.data));
    return res.data;
  });
};

export const createOffer = data => dispatch => {
  return axios.post(API('offers'), data).then(res => {
    dispatch(createOfferAction(res.data));
    return res.data;
  });
};

export const deleteOffer = data => dispatch => {
  return axios.delete(API('offers', data.id)).then(res => {
    dispatch(deleteOfferAction(data));
    return res.data;
  });
};

export const resetOffers = resetOffersAction;
