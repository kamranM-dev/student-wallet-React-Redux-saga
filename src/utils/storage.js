import storage from 'store';

export const saveInStore = (key, value) => {
  storage.set(key, value);
};
export const getFromStore = (key) => {
  return storage.get(key);
};
export const removeFromStore = (key) => {
  return storage.remove(key);
};

export const getUserToken = () => getFromStore('token');

export const saveUserToken = (token) => saveInStore('token', token);

export const removeUserToken = () => removeFromStore('token');
