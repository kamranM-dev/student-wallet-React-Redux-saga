import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './card.scss';

const Card = ({ children, className }) => {
  const classList = classNames('card', className);
  return (
    <div className={ classList }>
      { children }
    </div>
  );
};
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
export default Card;
