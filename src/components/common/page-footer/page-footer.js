import React from 'react';
import PropTypes from 'prop-types';
import {AppLogo} from '../app-logo/app-logo';
import classNames from 'classnames';
import {TWITTER_URL} from '../../../constants/urls';
import {Link} from "react-router-dom";

import footerImage from '../../../assets/images/footer-image.png';
import footerLogo from '../../../assets/images/footerlogo.png';
import './page-footer.scss';

const TextWithIcon = ({iconClass, children}) => {
  const iconClassList = classNames('fa', iconClass);
  return (
    <div className="text-with-icon">
      <i className={iconClassList}></i>
      {children}
    </div>
  );
};
TextWithIcon.propTypes = {
  iconClass: PropTypes.string,
  children: PropTypes.node
};

const LandingFooter = () => {
  return (
    <div className="landing-footer">
      <div className="landing-footer-content container">
        <div className="landing-footer-columns">
          <div className="landing-footer__column">
            <div className="landing-footer__column-title">
              <AppLogo isWhite/>
            </div>
            <div className="landing-footer__column-content">
              StudentWallet helps students of any age find the best scholarships for college, university, trade school,
              and any other post-secondary opportunity.
            </div>
          </div>
          <div className="landing-footer__column">
            <div className="landing-footer__column-title">
              <div>Say Hello!</div>
            </div>
            <div className="landing-footer__column-content">
              <TextWithIcon iconClass="fa-map-marker fa-lg">
                <div>
                  <div><Link to="/">Student Wallet</Link></div>
                  <div>15860 e rio Verde drive</div>
                  <div>Scottsdale Arizona 85262</div>
                </div>
              </TextWithIcon>
              <TextWithIcon iconClass="fa-envelope">
                <a href={'mailto:Admin@fleischer.org'}>Admin@fleischer.org</a>
              </TextWithIcon>
            </div>
          </div>
          <div className="landing-footer__column stay-connected">
            <div className="landing-footer__column-title">
              <div>Stay Connected</div>
            </div>
            <div className="landing-footer__column-content">
              <div className="social-icons">
                <a href={TWITTER_URL} target={'blank_'}><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-footer__copyright text-center text-normal">
          <a href="http://fleischerscholars.com/">
            <img src={footerLogo} alt="footer" style={{width: 300, alignSelf: 'center', backgroundColor: 'white'}}/>
          </a>
        </div>
        <div className="landing-footer__copyright text-center text-normal">
          © 2017 Student Wallet. All Rights Reserved.
        </div>
        <div className="landing-footer__copyright text-center text-normal">
          Brought to you by the<a href="http://fleischerscholars.com/"> Fleischer Scholar's Program</a> and
          <a href="https://www.northatlantic.tech"> North Atlantic Tech</a>
        </div>
        <div className="landing-footer__copyright text-center text-normal">
          <a href="https://www.northatlantic.tech">
            <img src={footerImage} alt="footer" style={{width: 160, alignSelf: 'center'}}/>
          </a>
        </div>
        <div className="landing-footer__bottom-links text-center text-medium">
          <ul>
            <li>Partner with us</li>
            <li>Job opportunities</li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LandingFooter;
