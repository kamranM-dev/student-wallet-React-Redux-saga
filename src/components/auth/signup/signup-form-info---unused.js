import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AuthInfoFeature from '../auth-modal/auth-info-feature';

export default class SignupFormInfo extends Component {
  render () {
    const classList = classNames(this.props.className, 'signup-form-content');
    return (
      <div className={ classList }>
        <div className="text-xxxlarge text-bold font-secondary" style={ { marginBottom: 40 } }>
          Sign up to your StudentWallet Account
        </div>
        <AuthInfoFeature icon="fa-user"
                    title="Personalised loan offers"
                    content="Compare personalized loan offers from multiple vetted lenders"/>
        <AuthInfoFeature icon="fa-phone"
                    title="Awesome support"
                    content="Our expert client success team is here to help you along the way"/>
        <AuthInfoFeature icon="fa-check"
                    title="Free checking"
                    content="Checking rates won’t affect your credit"/>
      </div>
    );
  }
}
SignupFormInfo.propTypes = {
  className: PropTypes.string
};
