import React from 'react';
import { string, object } from 'prop-types';
import classNames from 'classnames';
import './auth-info-title.scss';

const AuthInfoTitle = ({ text, style, className }) => {
  const classList = classNames('text-bold font-secondary signup-info-title', className);
  return (
    <div className={ classList } style={ style }>
      { text }
    </div>
  );
};
AuthInfoTitle.propTypes = {
  text: string,
  className: string,
  style: object
};
export default AuthInfoTitle;
