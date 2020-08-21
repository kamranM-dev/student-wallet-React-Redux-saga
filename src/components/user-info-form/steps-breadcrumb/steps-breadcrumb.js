import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './steps-breadcrumb.scss';

class StepsBreadcrumb extends Component {
  createCrumbs = () => {
    const { steps, activeStep } = this.props;
    return steps.map((step, i) => {
      const stepClass = classNames('steps-breadcrumb__step',
        { 'steps-breadcrumb__active': activeStep === i + 1 },
        { 'steps-breadcrumb__completed': activeStep > i + 1 });
      return (
        <div key={i} className={ stepClass } onClick={()=> this.props.changeStep(i+1)}>
          <div className="step-indicator">
            <div className="outer">
              <div className="inner"></div>
            </div>
          </div>
          <div className="step-text">{ step }</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="steps-breadcrumb">
        { this.createCrumbs() }
      </div>
    );
  }
}
StepsBreadcrumb.propTypes = {
  changeStep: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired
};

export default StepsBreadcrumb;
