import React from 'react';
import PropTypes from 'prop-types';

const CircleImage = ({ size = 56, src }) => {
  return (
    <img src={ src } alt="user" style={ { width: size, height: size, borderRadius: '50%' } }/>
  );
};
CircleImage.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string
};
export default CircleImage;
