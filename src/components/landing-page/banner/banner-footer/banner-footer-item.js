import React from 'react';
import PropTypes from 'prop-types';
import './banner-footer-item.scss';
import classNames from 'classnames';

const BannerFooterItem = ({ iconClass, text }) => {
  const classList = classNames('fa', iconClass);
  return (
    <li className="banner-footer-item">
      <i className={ classList }></i>
      <div className="banner-footer-item__text">{ text }</div>
    </li>
  );
};
BannerFooterItem.propTypes = {
  iconClass: PropTypes.string,
  text: PropTypes.string
};
export default BannerFooterItem;
