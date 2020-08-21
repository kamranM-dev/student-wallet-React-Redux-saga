import React from 'react';
import '../button.scss';
import { string, func } from 'prop-types';

const SubmitButton = ({ onClick, text }) => {
  return (
    <input type="submit" className="sw-button sw-button--full-width" onClick={ onClick } value={ text }/>
  );
};
SubmitButton.propTypes = {
  onClick: func,
  text: string
};
export default SubmitButton;
