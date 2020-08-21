import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StepFooter from './step-footer';
import StepButton from './step-button';
import FieldsRow from './form/field-row';
import StepsFormSection from './form/steps-form-section';
import {
  ACT_SCORE,
  ATHLETE,
  FINANCIAL_NEED,
  GRADUATE,
  HIGHSCHOOL_GRAD,
  HONORS,
  MAJOR,
  SAT_SCORE,
  SCHOOL_STATE,
  UNDER_GRADUATE
} from "./form/field-config";
import {Dropdown} from "semantic-ui-react";
import FieldContainer from '../../common/field-container/field-container';
import {connect} from "react-redux";
import {getOptions} from "../../../constants/constants";
import {getSubcategories} from "../../../utils/store-getters";


class Step1 extends Component {
  getStuff = () => {
    const categories = {
      "academic-major": [],
      "honors-organization": [],
      "sat-score": [],
      "act-score": [],
      "school-attendance-state": [],
      "athletic-ability": []
    };
    for (let key in categories) {
      categories[key] = this.props.subcategories.filter(x => x.category === key)
    }
    return categories
  };

  render() {
    if (! this.props.subcategories.length) return null;
    const allData = this.getStuff();

    const {props: {userData: {education_details}}} = this;
    return (
      <div className="step-1 user-info-form__step">
        <StepsFormSection>
          <FieldsRow>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(MAJOR)}>
              <Dropdown placeholder='Academic Major of Choice'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["academic-major"], 'search_friendly', 'subcategory')}
                        defaultValue={education_details && !!education_details.major ? education_details.major : ""}
                        onChange={this.props.handleDropdownChanged(MAJOR)}/>
            </FieldContainer>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(ACT_SCORE)}>
              <Dropdown placeholder='ACT Score'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["act-score"], 'search_friendly', 'subcategory')}
                        defaultValue={education_details && !!education_details.act_score ? education_details.act_score : ""}
                        onChange={this.props.handleDropdownChanged(ACT_SCORE)}/>
            </FieldContainer>
          </FieldsRow>
          <FieldsRow>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(SAT_SCORE)}>
              <Dropdown placeholder='SAT Score'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["sat-score"], 'search_friendly', 'subcategory')}
                        defaultValue={education_details && !!education_details.sat_score ? education_details.sat_score : ""}
                        onChange={this.props.handleDropdownChanged(SAT_SCORE)}/>
            </FieldContainer>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(SCHOOL_STATE)}>
              <Dropdown placeholder='State of School'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["school-attendance-state"], 'search_friendly', 'subcategory')}
                        defaultValue={education_details && !!education_details.state_of_school ? education_details.state_of_school : ""}
                        onChange={this.props.handleDropdownChanged(SCHOOL_STATE)}/>
            </FieldContainer>
          </FieldsRow>
          <FieldsRow>

            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(ATHLETE)}>
              <Dropdown placeholder='Are you an Athlete?'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["athletic-ability"], 'search_friendly', 'subcategory')}
                        defaultValue={education_details && !!education_details.athletic_ability ? education_details.athletic_ability : ""}
                        onChange={this.props.handleDropdownChanged(ATHLETE)}/>
            </FieldContainer>

            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(HONORS)}>
              <Dropdown placeholder='Are you in a Honors Organization?'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["honors-organization"], 'search_friendly', 'subcategory')}
                        defaultValue={education_details && !!education_details.honors_organization ? education_details.honors_organization : ""}
                        onChange={this.props.handleDropdownChanged(HONORS)}/>
            </FieldContainer>
          </FieldsRow>
          <FieldsRow>
            {this.props.getInputField({
              fieldName: GRADUATE,
              placeholder: 'Are you a Graduate Student?',
              type: 'checkbox',
              checked: education_details ? education_details.graduated : false
            })}
            {this.props.getInputField({
              fieldName: UNDER_GRADUATE,
              placeholder: 'Are you an Undergrad Student?',
              type: 'checkbox',
              checked: education_details ? education_details.is_under_graduate : false
            })}
          </FieldsRow>
          <FieldsRow>
            {this.props.getInputField({
              fieldName: HIGHSCHOOL_GRAD,
              placeholder: 'Did you graduate High School?',
              type: 'checkbox',
              checked: education_details ? education_details.graduated_highschool : false
            })}
            {this.props.getInputField({
              fieldName: FINANCIAL_NEED,
              placeholder: 'Financial Need Required?',
              type: 'checkbox',
              checked: education_details ? education_details.financial_need : false
            })}
          </FieldsRow>

          <StepFooter>
            <StepButton text="Next" onClick={this.props.gotoNextStep}/>
          </StepFooter>
        </StepsFormSection>
      </div>
    );
  }
}

Step1.propTypes = {
  gotoNextStep: PropTypes.func.isRequired
};

const stateToProps = (state) => {
  return {
    userData: state.user.data,
    subcategories: getSubcategories(state)
  };
};


export default connect(stateToProps, null)(Step1);

