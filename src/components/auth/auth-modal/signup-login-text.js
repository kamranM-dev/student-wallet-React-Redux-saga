import React from 'react';
import PropTypes from 'prop-types';
import { SIGNUP_MODE } from '../../../constants/signup-modes';

const LoginText = ({ mode }) => {
  const text = mode === SIGNUP_MODE ? 'Or sign up with your email address'
    : 'Or login with your email address';
  return (<div style={ { color: '#939393', margin: '20px 0' } } className="text-small">{ text }</div>);
};
LoginText.propTypes = {
  mode: PropTypes.string
};

export default LoginText;
