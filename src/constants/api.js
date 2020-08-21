export const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;
export const SCHOLARSHIPS_API = process.env.REACT_APP_USER_SCHOLARSHIPS_API;
//http://54.148.0.213:1339/api/v1/user/fbSignup
export const SCHOLARSHIPS = "explorer";
export const SCHOLARSHIPS_TOP = "user_data";
export const FACEBOOK_SIGNUP = "user/fbSignup";
export const LOGGED_IN_USER = "user/me";
export const DELETE_USER = "user/delete";
export const CATEGORIES = "cat";
export const SUBCATEGORIES = "subcat";
export const GENDER = "gender";
export const SIGNUP = "users";
export const LOGIN = "user/login";
export const PROFILE = "profile";
export const AUTH_TOKEN = "auth_token";
export const CONFIRM_EMAIL = "confirm_email";

export function toFormData(payload) {
  let formBody = [];
  for (let property in payload) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(payload[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}

export function checkStatus(response) {
  const status = response.respInfo ? response.respInfo.status : response.status;
  if (status === 204) {
    return Promise.resolve({ deleted: true });
  }
  if (status >= 200 && status < 300) {
    return Promise.resolve(response.json());
  }

  return response.json().then((json) => {
    return Promise.reject(json);
  });
}

export function fetchData(
  method,
  body = null,
  token = null,
  headers = null,
  getData = null
) {
  let data = {
    method: method,
    headers: headers
      ? headers
      : {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
  };

  if (token) {
    data.headers["Authorization"] = token;
  }

  if (body) {
    data = Object.assign(data, { body: body });
  }

  if (getData) {
    data = Object.assign(data, { data: getData });
  }
  if (!headers) {
    data.headers = new Headers(data.headers);
  }

  return data;
}
