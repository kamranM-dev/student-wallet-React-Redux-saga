import React from 'react';
import PropTypes from 'prop-types';
import { values } from 'lodash';
import classNames from 'classnames';
import './button.scss';

const SIZE = {
  FULLWIDTH: 'sw-button--full-width',
  LARGE: 'sw-button--large',
  MEDIUM: 'sw-button--medium',
  SMALL: 'sw-button--small'
};

const Button = ({ onClick, text, size = SIZE.MEDIUM, style, children, className }) => {
  const classList = classNames('sw-button text-medium font-secondary', size, className);

  return (
    <button onClick={ onClick } className={ classList } style={ style }>{ children || text }</button>
  );
};
Button.Size = SIZE;
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(values(SIZE)),
  style: PropTypes.object
};

export default Button;
