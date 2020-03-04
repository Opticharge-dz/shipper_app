import {
  DELETE_DEVICE,
  CREATE_DEVICE,
  FETCH_DEVICE,
  RESET_DEVICE,
  UPDATE_DEVICE,
} from '../actionTypes';
import initialState from '../initialState';

export default (state = initialState.device, action) => {
  switch (action.type) {
    case CREATE_DEVICE:
    case UPDATE_DEVICE:
    case FETCH_DEVICE: {
      return action.payload;
    }
    case RESET_DEVICE:
    case DELETE_DEVICE: {
      return initialState.device;
    }
    default: {
      return state;
    }
  }
};
