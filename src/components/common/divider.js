import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ height = 2, backgroundColor = '#f3f3f3', style }) => {
  return (
    <div style={ { height, backgroundColor, ...style } }></div>
  );
};
export default Divider;
Divider.propTypes = {
  style: PropTypes.object,
  height: PropTypes.number,
  backgroundColor: PropTypes.string
};
