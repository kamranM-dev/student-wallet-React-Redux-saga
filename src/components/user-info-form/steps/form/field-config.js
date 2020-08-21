import {ruleRunner} from '../../../../utils/validation/validation';


export const MAJOR = 'major';
export const ACT_SCORE = 'act_score';
export const ATHLETE = 'athletic_ability'; // TODO: change to dropdown
export const GRADUATE = 'graduated'; // TODO: change to dropdown
export const UNDER_GRADUATE = 'is_under_graduate'; // TODO: change to dropdown
export const HIGHSCHOOL_GRAD = 'graduated_highschool'; // TODO: change to dropdown
export const HONORS = 'honors_organization'; // TODO: change to dropdown
export const SAT_SCORE = 'sat_score';
export const SCHOOL_STATE = 'state_of_school';
export const FINANCIAL_NEED = 'financial_need';

// TODO: financial_need
export const step1Runners = [
  ruleRunner(MAJOR, 'Academic Major of Choice'),
  ruleRunner(ACT_SCORE, 'ACT Score'),
  ruleRunner(ATHLETE, 'Athlete'),
  ruleRunner(FINANCIAL_NEED, 'Financial Need Required?'),
  ruleRunner(GRADUATE, 'Graduate Student'),
  ruleRunner(HIGHSCHOOL_GRAD, 'High School'),
  ruleRunner(HONORS, 'Honors Organization'),
  ruleRunner(SAT_SCORE, 'SAT Score'),
  ruleRunner(SCHOOL_STATE, 'State of School'),
  ruleRunner(UNDER_GRADUATE, 'Undergrad Students'),
];

export const AGE = 'age';
export const DISABILITY = 'physical_disability';
export const ETHNICITY = 'ethnicity';
export const GENDER = 'gender';
export const MILITARY_GOV = 'military_or_gov';
export const RACE = 'race';
export const RELIGION = 'religion';
export const RESIDENCE_STATE = 'residence_state';


export const step2Runners = [
  ruleRunner(AGE, 'Age'), // dropdown
  ruleRunner(GENDER, 'Gender'), // dropdown

  ruleRunner(ETHNICITY, 'Ethnicity'), // dropdown
  ruleRunner(RACE, 'Race'), // dropdown

  ruleRunner(RELIGION, 'Religion'), // dropdown
  ruleRunner(RESIDENCE_STATE, 'Residence State'), // dropdown

  ruleRunner(DISABILITY, 'Physical Disability'), // dropdown
  ruleRunner(MILITARY_GOV, 'Military or Government'), // t f
];

