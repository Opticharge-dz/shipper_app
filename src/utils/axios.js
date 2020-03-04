import axios from 'axios';

export const setAuthorizationToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const setAcceptLanguage = language => {
  if (language) {
    axios.defaults.headers.common['Accept-Language'] = language;
  } else {
    delete axios.defaults.headers.common['Accept-Language'];
  }
};

export const setTimeOut = timeout => {
  axios.defaults.timeout = timeout;
};

export const setupRequestLogging = () => {
  axios.interceptors.request.use(request => {
    console.log('Request:', request);
    return request;
  });
  axios.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
  });
};

export const getErrorMessage = err => {
  let msg = '';
  if (err.response) {
    if (err.response.data) {
      msg = err.response.data.message || err.response.data.detail;
    }
  }
  if (!msg) {
    msg = err.message;
  }
  if (!msg && err.response) {
    msg = `Error ${err.response.status}`;
  }
  if (!msg || msg === 'Network Error') {
    msg = 'Network Error';
  }
  return msg;
};
