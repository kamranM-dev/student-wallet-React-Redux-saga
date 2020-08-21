import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './image-card.scss';

const ImageCard = ({ image, text, title, prefixClass, isTextCenter = false }) => {
  const imageClass = classNames(`${prefixClass}__image`, `${prefixClass}__${image}`);
  const cardClass = classNames('image-card', { 'text-center': isTextCenter });
  return (
    <div className={ cardClass }>
      <div className={ imageClass }></div>
      <div className="image-card__title text-large font-secondary">{ title }</div>
      <div className="image-card__text">{ text }</div>
    </div>
  );
};
ImageCard.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  isTextCenter: PropTypes.bool,
  prefixClass: PropTypes.string
};

export default ImageCard;
