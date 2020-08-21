import {SCHOLARSHIPS_API, fetchData, SCHOLARSHIPS, SCHOLARSHIPS_TOP} from '../constants/api';

let header = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Chrome-Extension-Allow-Control-Allow-Origin': '*',
  'Content-Type': 'application/x-www-form-urlencoded',
});

export const getScholarships = (options) => {
  const {category, subcategory, order} = options;

  const orderQuery = order ? `order=${order}` : '';
  let url = `${SCHOLARSHIPS_API}/${SCHOLARSHIPS}?limit=50${orderQuery}`;
  if (category) {
    url += `&data=${category}`;
  }
  if (category && subcategory) {
    url += `,${subcategory}`;
  }

  return fetch(url, fetchData('GET', null, header)).then(x => {
    return x.json();
  });
};

const buildEducationParams = (education_details) => {
  let params = '';
  const educationCategories = {
    "academic-major": 'major',
    "honors-organization": 'honors_organization',
    "sat-score": 'sat_score',
    "act-score": 'act_score',
    "school-attendance-state": 'state_of_school',
    "athletic-ability": 'athletic_ability',

    "graduate students": 'graduated',
    "financial-need": 'financial_need',
    "high school students": 'graduated_highschool',
    "undergraduate students": 'is_under_graduate',
  };
  for (let key in educationCategories) {
    let userItemData = education_details[educationCategories[key]];
    if (userItemData !== null && typeof userItemData !== "undefined") {
      if (params.indexOf('?data=') === -1) {
        params += '?data='
      }
      if (key === "graduate students") {
        if (userItemData) {
          params += `,phd`;
          params += `,mba`;
        }
      } else if (key === "financial-need") {
        if (userItemData) {
          params += `,financial-need-required`;
        }
      } else if (key === "high school students") {
        if (!userItemData) {
          params += `,scholarships-for-high-school-freshman`;
          params += `,scholarships-for-high-school-juniors`;
          params += `,scholarships-for-high-school-seniors`;
          params += `,scholarships-for-high-school-sophomores`;
        }
      } else if (key === "undergraduate students") {
        if (userItemData) {
          params += `,scholarships-for-college-freshman`;
          params += `,scholarships-for-college-juniors`;
          params += `,scholarships-for-college-seniors`;
          params += `,scholarships-for-college-sophomores`;
        }
      } else {
        params += `,${userItemData}`;
      }
    }
  }
  return params.replace('?data=,', '?data=')
};


const buildProfileParams = (profile, params) => {
  const profileCategories = {
    "physical-disabilities": 'physical_disability',
    "age": 'age',
    "ethnicity": 'ethnicity',
    "gender": 'gender',
    "race": 'race',
    "religion": 'religion',
    "state": 'residence_state',
    "type": 'military_or_gov',
  };
  for (let key in profileCategories) {
    let userItemData = profile[profileCategories[key]];
    if (userItemData !== null && typeof userItemData !== "undefined") {
      if (params.indexOf('?data=') === -1) {
        params += '?data='
      }
      if (key === "type") {
        // if (userItemData) {
        //   params += `${CATEGORY_PARAM}*$graduate%20students:%20phd*`;
        //   params += `${CATEGORY_PARAM}*$graduate%20students:%20mba*`;
        // }
      } else {
        params += `,${userItemData}`;
      }
    }
  }
  return params.replace('?data=,', '?data=')
};

export const hasAddData = ({
                   act_score,
                   athletic_ability,
                   financial_need,
                   graduated,
                   graduated_highschool,
                   honors_organization,
                   is_under_graduate,
                   major,
                   sat_score,
                   state_of_school,
                   age,
                   ethnicity,
                   gender,
                   military_or_gov,
                   physical_disability,
                   race,
                   religion,
                   residence_state,
                 }) => {
  return (
    !!act_score ||
    !!athletic_ability ||
    !!financial_need ||
    !!graduated ||
    !!graduated_highschool ||
    !!honors_organization ||
    !!is_under_graduate ||
    !!major ||
    !!sat_score ||
    !!state_of_school ||
    !!age ||
    !!ethnicity ||
    !!gender ||
    !!military_or_gov ||
    !!physical_disability ||
    !!race ||
    !!religion ||
    !!residence_state
  )
}

export const getTopScholarships = (user) => {
  const {education_details, profile} = user;

  if (!hasAddData({...education_details, ...profile})) return [];
  let params = buildEducationParams(education_details);
  params += buildProfileParams(profile, params);

  const url = `${SCHOLARSHIPS_API}/${SCHOLARSHIPS_TOP}${params}`;

  return fetch(url, fetchData('GET', null, header)).then(x => {
    return x.json();
  });
};
