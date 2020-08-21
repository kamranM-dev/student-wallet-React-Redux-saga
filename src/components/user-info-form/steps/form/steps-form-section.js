import React from 'react';
import {node} from 'prop-types';

const StepsFormSection = ({ children }) => {
  return (
    <div className="steps-form-section">
      { children }
    </div>
  );
};
StepsFormSection.propTypes = {
  children: node
};
export default StepsFormSection;
