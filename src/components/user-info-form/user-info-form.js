import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import StepHOC from './steps/step-hoc';
import Step1 from './steps/step-1';
import Step2 from './steps/step-2';
import {step1Runners, step2Runners} from './steps/form/field-config';
import StepsBreadcrumb from './steps-breadcrumb/steps-breadcrumb';
import './user-info-form.scss';
import './steps/form/form.scss';
import {updateAdditionalInfo} from "../../actions/user";
import {push} from "react-router-redux";
import {ROUTES} from "../../constants/routes";

const steps = ['Education Details', 'Personal Info'];

class UserInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
      formData: {}
    };
  }

  gotoNextStep = (data) => {
    this.setState({
      activeStep: this.state.activeStep + 1,
      formData: {
        ...this.state.formData,
        ...data
      }
    });
    this.props.updateAdditionalInfo(
      {
        ...data
      }
    );
  };

  gotoPreviousStep = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  submitForm = (data) => {
    this.props.updateAdditionalInfo(
      {
        ...this.state.formData,
        ...data
      }
    );
    this.props.pushPath(ROUTES.DASHBOARD);
  };

  changeStep = (step) => {
    this.setState({
      activeStep: step,
    });
  };

  getStepComponent = () => {
    switch (this.state.activeStep) {
      case 1: {
        const C = StepHOC(Step1, step1Runners, 'education_details');
        return <C gotoNextStep={this.gotoNextStep} defaultValues={this.props.userData.education_details}/>;
      }

      case 2: {
        const C2 = StepHOC(Step2, step2Runners, 'profile');
        return <C2 gotoPreviousStep={this.gotoPreviousStep} submitForm={this.submitForm}
                   defaultValues={this.props.userData.profile}/>;
      }

      default: {
        return null;
      }
    }
  };

  render() {
    return (
      <div className="signup-user-info">
        <StepsBreadcrumb steps={steps} activeStep={this.state.activeStep} changeStep={this.changeStep}/>
        <div className="steps-section">
          {this.getStepComponent()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    route: state.router.location.pathName,
    userData: state.user.data,
  };
};

UserInfoForm.propTypes = {
  updateAdditionalInfo: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};


const dispatchToProps = (dispatch) => {
  return {
    updateAdditionalInfo: bindActionCreators(updateAdditionalInfo, dispatch),
    pushPath: bindActionCreators(push, dispatch)
  }
};

export default connect(mapStateToProps, dispatchToProps)(UserInfoForm);
