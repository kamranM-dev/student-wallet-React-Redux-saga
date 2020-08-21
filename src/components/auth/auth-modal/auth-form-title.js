import React from 'react';
import { string } from 'prop-types';
import './auth-form-title.scss';

const AuthFormTitle = ({ text }) => {
  return (
    <div className="auth-form__title">
      { text }
    </div>
  );
};
AuthFormTitle.propTypes = {
  text: string
};
export default AuthFormTitle;
