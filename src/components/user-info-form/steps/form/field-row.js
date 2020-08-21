import React from 'react';
import {node} from 'prop-types';

const FieldRow = ({ children }) => {
  return (
    <div className="steps-form__field-row">
      { children }
    </div>
  );
};
FieldRow.propTypes = {
  children: node
};
export default FieldRow;
