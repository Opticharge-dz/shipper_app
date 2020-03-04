import axios from 'axios';
import {API} from '../../config';
import {setAuthorizationToken} from '../../utils/axios';
import {setAuthAction, resetAuthAction} from '../actions/auth';
import {CLIENT_ID, CLIENT_SECRET} from '../../config/oauth2_provider';

export const setAuth = setAuthAction;
export const resetAuth = resetAuthAction;

export const convertToken = data => dispatch => {
  const {token} = data; // facebook provider token
  return axios
    .post(API('auth/convert-token'), {
      grant_type: 'convert_token',
      backend: 'facebook',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      token,
    })
    .then(res => {
      const {
        access_token,
        // refresh_token,
        // expires_in,
        // token_type,
        // scope,
      } = res.data;
      setAuthorizationToken(access_token); // axios
      dispatch(
        setAuth({
          token: access_token,
        }),
      );
      return res.data;
    });
};

export const logout = token => dispatch => {
  let success = null;
  if (token) {
    axios
      .post(API('auth/revoke-token'), {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        token,
      })
      .then(() => {
        success = true;
      })
      .catch(() => {
        success = false;
      });
  } else {
    success = true;
  }
  setAuthorizationToken(); // axios
  dispatch(resetAuth());
  return success;
};
