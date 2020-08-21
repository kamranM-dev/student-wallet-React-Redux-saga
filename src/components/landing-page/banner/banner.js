import React, {Component} from 'react';
import BannerFooter from './banner-footer/banner-footer';
import Button from '../../common/button/button';
import {displayLoginModal} from '../../../actions/authModal';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import './banner.scss';

class Banner extends Component {
  signUp = () => {
    this.props.displayLoginModal();
  };

  render() {
    return (
      <div className="banner-section">
        <div className="image"/>
        <div className="banner-text">
          <div className="banner-title text-xxxlarge">
            Find access to thousands of scholarships, and find the ones that are a best match to you. 100% free.
          </div>
          <div className="banner-secondary">
            Our proprietary platform utilizes advanced technologies to match students of any age to the best
            scholarships, financial aid, grants, and much more. From Ivy-League universities to local trade schools and
            online colleges, Student Wallet will do the heavy lifting for you. Student Wallet is absolutely free, does
            not track you, does not sell or share any user data, and does not profit off your information in any way.
          </div>
          <Button text="Get Started" onClick={this.signUp.bind(this)} size={Button.Size.LARGE}/>
        </div>
        <BannerFooter/>
      </div>
    );
  }
};

Banner.propTypes = {
  push: PropTypes.func,
  displayLoginModal: PropTypes.func,
};

const mapDispatchToProps = {displayLoginModal, push};

export default connect(null, mapDispatchToProps)(Banner);
