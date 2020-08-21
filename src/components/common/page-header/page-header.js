import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';
import classNames from 'classnames';
import Button from '../button/button';
import BlueButton from '../button/button-types/blue-button';
import './page-header.scss';
import { AppLogo } from '../app-logo/app-logo';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { displaySignupModal, displayLoginModal } from '../../../actions/authModal';
import { toggleHeaderLinksVisibility } from '../../../actions/header-links-visibility';
import { logout } from '../../../actions/auth';
import { ROUTES } from '../../../constants/routes';
import {getUser, getToken} from '../../../utils/store-getters';
import ProfileButton from '../profile-button/profile-button';

class PageHeader extends Component {
  showProfileLinks = () => {
    this.props.toggleHeaderLinksVisibility();
  };

  signup = () => {
    this.props.displaySignupModal();
  };

  login = () => {
    this.props.displayLoginModal();
  };

  getAuthLinks = () => {
    return [
      <li key="profile-button">
        <ProfileButton/>
      </li>
    ];
  };

  getUnAuthLinks = () => {
    return [
      <li key="signup">
        <Button size={ Button.Size.MEDIUM } text="SIGN UP" onClick={ this.signup }/>
      </li>,
      <li key="login">
      <BlueButton size={ Button.Size.MEDIUM } text="LOG IN" onClick={ this.login }/>
      </li>
    ];
  };

  getLinks = () => {
    return this.props.token
      ? this.getAuthLinks() : this.getUnAuthLinks();
  };

  render () {
    const bars = <i className="fa fa-bars" onClick={ this.showProfileLinks.bind(this) }></i>;
    const navClass = classNames('right-links',
      { 'hide-mobile': !this.props.areHeaderLinksVisible },
      { 'hide-tablet': this.props.areHeaderLinksVisible });
    return (
      <div className="page-header">
        <div className="left">
          <AppLogo onClick={ () => this.props.push(ROUTES.ROOT) }/>
          { bars }
        </div>
        <div className="right">
          <ul className={ navClass }>
            { this.getLinks() }
          </ul>
        </div>
      </div>
    );
  }
}
PageHeader.propTypes = {
  token: string,
  push: func,
  logout: func,
  displaySignupModal: func,
  displayLoginModal: func,
  toggleHeaderLinksVisibility: func,
  areHeaderLinksVisible: bool
};
const mapStateToProps = (state) => {
  return {
    token: getToken(state),
    user: getUser(state),
    areHeaderLinksVisible: state.areHeaderLinksVisible
  };
};
const mapDispatchToProps = { displaySignupModal, displayLoginModal, push, logout, toggleHeaderLinksVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
