// import {Platform} from 'react-native';

// mock
// export const URL = Platform.select({
//   android: 'http://10.0.2.2:4000',
//   ios: 'http://localhost:4000',
// });

// django local
// export const URL = Platform.select({
//   android: 'http://10.0.2.2:8000',
//   ios: 'http://localhost:8000',
// });

// export const URL = 'http://10.0.2.2:4000';
// export const URL = 'http://localhost:4000';
// export const URL = 'http://localhost:5000';
// const URL = 'https://www.ch7el.com';
const URL = 'https://ch7el.herokuapp.com';

export const IS_DEV = !!global.__DEV__;

export const API = (model = undefined, id = undefined) => {
  if (model && id) {
    return `${URL}/api/v1/${model}/${id}/`;
  }
  if (model) {
    return `${URL}/api/v1/${model}/`;
  }
  return `${URL}/api/v1/`;
};

export const TIMEOUT = 10000; // in ms
