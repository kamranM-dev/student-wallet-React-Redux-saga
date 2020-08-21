import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FieldContainer from "../../common/field-container/field-container";
import StepsFormSection from "./form/steps-form-section";
import StepFooter from './step-footer';
import StepButton from './step-button';
import FieldsRow from './form/field-row';
import {Dropdown} from "semantic-ui-react";
import {connect} from "react-redux";

import {AGE, DISABILITY, ETHNICITY, MILITARY_GOV, RACE, RELIGION, RESIDENCE_STATE, GENDER} from "./form/field-config";
import {getOptions} from "../../../constants/constants";
import {getSubcategories} from "../../../utils/store-getters";
import {deleteUser} from "../../../actions/user";
import {bindActionCreators} from "redux";

const deleteStyling = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20%'
};

const deleteButton = {
  width: '50%',
  padding: '10px',
  borderRadius: '7px',
  backgroundColor: '#cc0000',
  color: 'white',
  fontWeight: 600,
}

class Step2 extends Component {

  getStuff = () => {
    const categories = {
      "physical-disabilities": [],
      "age": [],
      "ethnicity": [],
      "gender": [],
      "race": [],
      "religion": [],
      "residence-state": [],
    };
    for (let key in categories) {
      categories[key] = this.props.subcategories.filter(x => x.category === key)
    }
    return categories
  };

  deleteAccount = () => {
    if (window.confirm('Are you sure you want delete your account?')) {
      this.props.deleteUser();
    } else {
      // Do nothing!
    }
  };

  render() {
    if (!this.props.subcategories.length) return null;
    const allData = this.getStuff();

    const {props: {userData: {profile}}} = this;
    return (
      <div className="user-info-form__step">
        <StepsFormSection>
          <FieldsRow>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(AGE)}>
              <Dropdown placeholder='Age'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["age"], 'search_friendly', 'subcategory')}
                        defaultValue={profile && !!profile.age ? profile.age : ""}
                        onChange={this.props.handleDropdownChanged(AGE)}/>
            </FieldContainer>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(GENDER)}>
              <Dropdown placeholder='Gender'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["gender"], 'search_friendly', 'subcategory')}
                        defaultValue={profile && !!profile.gender ? profile.gender : ""}
                        onChange={this.props.handleDropdownChanged(GENDER)}/>
            </FieldContainer>
          </FieldsRow>
          <FieldsRow>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(ETHNICITY)}>
              <Dropdown placeholder='Ethnicity'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["ethnicity"], 'search_friendly', 'subcategory')}
                        defaultValue={profile && !!profile.ethnicity ? profile.ethnicity : ""}
                        onChange={this.props.handleDropdownChanged(ETHNICITY)}/>
            </FieldContainer>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(RACE)}>
              <Dropdown placeholder='Race'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["race"], 'search_friendly', 'subcategory')}
                        defaultValue={profile && !!profile.race ? profile.race : ""}
                        onChange={this.props.handleDropdownChanged(RACE)}/>
            </FieldContainer>
          </FieldsRow>

          <FieldsRow>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(RELIGION)}>
              <Dropdown placeholder='Religion'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["religion"], 'search_friendly', 'subcategory')}
                        defaultValue={profile && !!profile.religion ? profile.religion : ""}
                        onChange={this.props.handleDropdownChanged(RELIGION)}/>
            </FieldContainer>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(RESIDENCE_STATE)}>
              <Dropdown placeholder='Residence State'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["residence-state"], 'search_friendly', 'subcategory')}
                        defaultValue={profile && !!profile.residence_state ? profile.residence_state : ""}
                        onChange={this.props.handleDropdownChanged(RESIDENCE_STATE)}/>
            </FieldContainer>
          </FieldsRow>

          <FieldsRow>
            <FieldContainer isValidated
                            className="step-input-field"
                            showError={this.props.showError}
                            errorText={this.props.getErrorText(DISABILITY)}>
              <Dropdown placeholder='Physical Disability'
                        key={1}
                        selection
                        selectOnBlur={false}
                        options={getOptions(allData["physical-disabilities"], 'search_friendly', 'subcategory')}
                        defaultValue={profile && !!profile.physical_disability ? profile.physical_disability : ""}
                        onChange={this.props.handleDropdownChanged(DISABILITY)}/>
            </FieldContainer>
            {this.props.getInputField({
              fieldName: MILITARY_GOV,
              placeholder: 'Are you in the Military or Government?',
              type: 'checkbox',
              checked: profile ? profile.military_or_gov : false
            })}
          </FieldsRow>

          <StepFooter>
            <StepButton text="Previous" onClick={this.props.gotoPreviousStep}/>
            <StepButton text="Save" onClick={this.props.submitForm}/>
          </StepFooter>


          <div style={deleteStyling}>
            <button onClick={this.deleteAccount} style={deleteButton}>Delete Account</button>
          </div>
        </StepsFormSection>
      </div>
    );
  }
}

Step2.propTypes = {
  gotoPreviousStep: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  handleDropdownChanged: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};


const stateToProps = (state) => {
  return {
    userData: state.user.data,
    subcategories: getSubcategories(state)
  };
};


const dispatchToProps = (dispatch) => {
  return {
    deleteUser: bindActionCreators(deleteUser, dispatch),
  }
};

export default connect(stateToProps, dispatchToProps)(Step2);
