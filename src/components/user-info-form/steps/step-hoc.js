import React, {Component} from 'react';
import InputField from '../../common/input-field/input-field';
import {run} from '../../../utils/validation/validation';

const StepHOC = (WrappedComponent, runners, sectionName) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showError: false,
        formFields: props.defaultValues ? props.defaultValues : {},
        validationErrors: {}
      };
    }

    displayName = 'StepHOC';

    getErrorText = (field) => {
      const errors = this.state.validationErrors;
      return errors[field];
    };

    hasErrors = (errors) => {
      return Object.keys(errors).length > 0;
    };

    submitForm = () => {
      const errors = run(this.state.formFields, runners);
      this.setState({
        showError: true,
        validationErrors: errors
      });
      if (!this.hasErrors(errors) && this.props.submitForm) {
        this.props.submitForm(sectionName ? {
          [sectionName]: this.state.formFields
        } : this.state.formFields);
      }
    };

    gotoNextStep = () => {
      const errors = run(this.state.formFields, runners);
      this.setState({
        showError: true,
        validationErrors: errors
      });
      if (!this.hasErrors(errors) && this.props.gotoNextStep) {
        this.props.gotoNextStep(sectionName ? {
          [sectionName]: this.state.formFields
        } : this.state.formFields);
      }
    };

    addValueToState = (field, value) => {
      const formFields = {
        ...this.state.formFields,
        [field]: value
      };
      const validationErrors = run({...formFields}, runners);
      this.setState({
        formFields: formFields,
        validationErrors
      });
    };

    handleDropdownChanged = field => (e, data) => {
      this.addValueToState(field, data.value);
    };

    handleInputChanged = field => e => {
      this.addValueToState(field, e.target.value);
    };

    getInputField = ({fieldName, placeholder, type = 'text', checked = false}) => {
      return <InputField id={fieldName}
                         checked={checked}
                         isValidated
                         placeholder={placeholder}
                         className="step-input-field"
                         showError={this.state.showError}
                         type={type}
                         onChange={this.handleInputChanged(fieldName)}
                         errorText={this.getErrorText(fieldName)}/>;
    };

    handleDateChange = field => date => {
      this.addValueToState(field, date);
    };

    render() {
      const passedProps = {
        handleDropdownChanged: this.handleDropdownChanged,
        handleDateChange: this.handleDateChange,
        getInputField: this.getInputField,
        showError: this.state.showError,
        getErrorText: this.getErrorText,
        submitForm: this.submitForm,
        formFields: this.state.formFields,
        gotoNextStep: this.gotoNextStep
      }
      return (
        <WrappedComponent {...this.props} {...passedProps} />
      )
    }
  }
};
export default StepHOC;
