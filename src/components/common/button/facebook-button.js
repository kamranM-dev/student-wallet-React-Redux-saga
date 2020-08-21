import React from 'react';
import './button.scss';
import { string } from 'prop-types';
import { SIGNUP_MODE } from '../../../constants/signup-modes';

const FACEBOOK_PARAMS = {
  DEV: {
    // APPID: '171568383372381', // Test App created by Asad
    APPID: '1267879756698672',
    URL: 'http://localhost:8080/'
  },
  PROD: {
    APPID: '1867556720150450',
    URL: 'https://www.studentwallet.org/'
  }
};

const params = process.env.NODE_ENV !== 'production' ? FACEBOOK_PARAMS.DEV : FACEBOOK_PARAMS.PROD;
const link = `https://www.facebook.com/v2.9/dialog/oauth?response_type=code&scope=email,public_profile&client_id=${params.APPID}&redirect_uri=${params.URL}facebook-login-redirect`;

const FacebookButton = ({ mode }) => {
  const text = mode === SIGNUP_MODE ? 'SIGN UP WITH FACEBOOK' : 'LOGIN WITH FACEBOOK';
  return (
    <a style={ { backgroundColor: '#405d9b' } } className="sw-button sw-button--full-width" href={ link }>
      <div style={{ width: '100%' }}>
        <i className="fa fa-facebook" style={ { marginRight: 20 } }/>
        <span>{ text }</span>
      </div>
    </a>
  );
};
FacebookButton.propTypes = {
  mode: string
};
export default FacebookButton;
