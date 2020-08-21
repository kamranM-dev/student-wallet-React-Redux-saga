// @flow
import {AUTH_API_URL, FACEBOOK_SIGNUP, fetchData, toFormData} from '../constants/api';

export const facebookLogin = (code: string): Promise<Object> => {
  let body = toFormData({
    code: code
  });

  return fetch(`${AUTH_API_URL}/${FACEBOOK_SIGNUP}`,
    fetchData('POST', body, null)
  ).then((x) => {
    return x.json();
  }).catch(e => {
    return e;
  });
};

export const facebookLoginM = () => {
  return Promise.resolve({
    token: 'token123'
  });
};
