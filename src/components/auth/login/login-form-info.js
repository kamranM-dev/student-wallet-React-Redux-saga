import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AuthInfoFeature from '../auth-modal/auth-info-feature';
import AuthInfoTitle from '../common/auth-info-title';

export default class LoginFormInfo extends Component {
  render () {
    const classList = classNames(this.props.className, 'signup-form-content');
    return (
      <div className={ classList }>
        <AuthInfoTitle style={ { marginBottom: 40 } } text="Get Your Free Student Wallet Account" className="hide-mobile"/>
        <AuthInfoFeature icon="fa-list"
                    title="Instant Curated List of Scholarships"
                    content="Let our software do the hard work for you. Whether it’s a college, trade school, or Ivy-League University, our platform will help you find the funding options that are best for you. "/>
        <AuthInfoFeature icon="fa-usd"
                    title="Everything You Need to Pay for School"
                    content="From private scholarships & FAFSA financial aid to the best student loan rates."/>
        <AuthInfoFeature icon="fa-check"
                    title="Free & Confidential"
                    content="No hidden fees. Your data is protected by bank-level security."/>
      </div>
    );
  }
}
LoginFormInfo.propTypes = {
  className: PropTypes.string
};
