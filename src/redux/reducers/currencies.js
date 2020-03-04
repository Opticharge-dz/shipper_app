import {
  FETCH_CURRENCIES,
  RESET_CURRENCIES,
  FETCH_RATES,
  RESET_RATES,
} from '../actionTypes';
import initialState from '../initialState';
import _ from 'lodash';

export default (state = initialState.currencies, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES: {
      return _.keyBy(action.payload, v => v.id);
    }
    case RESET_CURRENCIES: {
      return initialState.currencies;
    }
    case FETCH_RATES: {
      const currencies = _.clone(state);
      action.payload.forEach(rate => {
        if (currencies[rate.currency] && rate.type_id) {
          currencies[rate.currency].rates =
            currencies[rate.currency].rates || {};
          currencies[rate.currency].rates[rate.type_id] = {
            type: rate.type,
            value: rate.value,
            updated_at: rate.updated_at,
          };
        }
      });
      return currencies;
    }
    case RESET_RATES: {
      const currencies = {};
      for (const [key, value] of Object.entries(state)) {
        currencies[key] = _.omit(value, 'rates');
      }
      return currencies;
    }
    default: {
      return state;
    }
  }
};
