import {SCHOLARSHIPS_API, CATEGORIES, SUBCATEGORIES, GENDER, fetchData} from '../constants/api';

let header = {
  'Access-Control-Allow-Origin': '*',
  'Chrome-Extension-Allow-Control-Allow-Origin':'*',
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const getCategories = () => {
  return fetch(`${SCHOLARSHIPS_API}/${CATEGORIES}?order=category.asc`, fetchData('GET', null, null, header)).then(x => {
    return x.json();
  });
};

export const getSubCategories = () => {
  return fetch(`${SCHOLARSHIPS_API}/${SUBCATEGORIES}?order=subcategory.asc`, fetchData('GET', null, null, header)).then(x => {
    return x.json();
  });
};

export const getGenders = () => {
  return fetch(`${SCHOLARSHIPS_API}/${GENDER}?friendly_sub_name=neq.null`, fetchData('GET', null, null, header)).then(x => {
    return x.json();
  });
};
