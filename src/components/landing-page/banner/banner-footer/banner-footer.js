import React from 'react';
import BannerFooterItem from './banner-footer-item';
import './banner-footer.css';

const BannerFooter = () => {
  return (
    <div className="banner-footer">
      <ul>
        <BannerFooterItem iconClass="fa-clock-o" text="100% Free"/>
        <BannerFooterItem iconClass="fa-university" text="Graduate Debt-Free"/>
        <BannerFooterItem iconClass="fa-check" text="Thousands of scholarships"/>
      </ul>
    </div>
  );
};

export default BannerFooter;
