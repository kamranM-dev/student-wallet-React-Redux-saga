import React from 'react';
import { node } from 'prop-types';

const StepFooter = ({ children }) => {
  return (
    <div className="user-info-form__step-footer">
      { children }
    </div>
  );
};
StepFooter.propTypes = {
  children: node
};
export default StepFooter;
