import * as ErrorMessages from './errorMessages.js';

export const required = (text) => {
  if (text) {
    return null;
  } else {
    return ErrorMessages.isRequired;
  }
};

export const mustMatch = (fieldToMatch, fieldNameToMatch) => {
  return (text, state) => {
    return state[fieldToMatch] === text ? null : ErrorMessages.mustMatch(fieldNameToMatch);
  };
};

export const minLength = (length) => {
  return (text) => {
    return text.length >= length ? null : ErrorMessages.minLength(length);
  };
};

export const duplicate = (text) => {
  if (text) {
    return null;
  } else {
    return ErrorMessages.duplicateEmail;
  }
};
