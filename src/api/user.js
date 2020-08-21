import {
  AUTH_API_URL,
  LOGGED_IN_USER,
  SIGNUP,
  LOGIN,
  AUTH_TOKEN,
  CONFIRM_EMAIL,
  toFormData,
  fetchData, checkStatus, PROFILE, DELETE_USER
} from '../constants/api';


export const getLoggedInUser = (token) => {
  return fetch(`${AUTH_API_URL}/${LOGGED_IN_USER}`, fetchData('GET', null, token))
    .then(checkStatus)
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw(error);
    });
};

export const signUp = (email, user, pwd, fname, lname, cb) => {
  let payload = toFormData({
    username: user,
    user_email: email,
    password: pwd,
    first_name: fname,
    last_name: lname
  });
  return fetch(`${AUTH_API_URL}/${SIGNUP}`, fetchData('POST', payload)).then(checkStatus)
    .then((data) => {
      return cb(false, data);
    }).catch((error) => {
      return cb(true, {code: error.status, msg: error.message});
    });
};


export const logIn = (email, password, cb) => {
  let payload = toFormData({
    email: email,
    password: password,
  });
  return fetch(`${AUTH_API_URL}/${LOGIN}`, fetchData('POST', payload))
    .then(checkStatus)
    .then(function (data) {
      return cb(false, data);
    }).catch((error) => {
      cb(true, error)
    });
};


export const authToken = (token, cb) => {
  let payload = toFormData({
    token: token,
  });
  return fetch(`${AUTH_API_URL}/${AUTH_TOKEN}`, fetchData('POST', payload))
    .then(checkStatus)
    .then((data) => {
      return cb(false, data.auth_token);
    }).catch((error) => {
      return cb(true, {code: error.status, msg: error.message});
    });
};

export const confirmEmail = (code, cb) => {
  let payload = toFormData({
    code: code,
  });
  return fetch(`${AUTH_API_URL}/${CONFIRM_EMAIL}`, fetchData('POST', payload))
    .then(checkStatus).then(function (data) {
    if (data.user) {
      return cb(false, data);
    }
    return cb(true, data.message);
  }).catch((error)=>  cb(true, error.message));
};


export const updateAdditionalInfo = (data, token) => {
  return fetch(`${AUTH_API_URL}/${PROFILE}`, fetchData('POST', JSON.stringify(data), null, new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    })
  ))
    .then(checkStatus)
    .then((data) => data).catch((error) => console.log(error));
};

export const deleteUserAccount = (token) => {
  return fetch(`${AUTH_API_URL}/${DELETE_USER}`, fetchData('DELETE', null, null, new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    })
  ))
    .then(checkStatus)
    .then((data) => data).catch((error) => console.log(error));
};
