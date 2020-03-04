import {combineReducers} from 'redux';
import auth from './reducers/auth';
import cities from './reducers/cities';
import countries from './reducers/countries';
import currencies from './reducers/currencies';
import global from './reducers/global';
import offers from './reducers/offers';
import device from './reducers/device';

export default combineReducers({
  auth,
  cities,
  countries,
  currencies,
  global,
  offers,
  device,
});
