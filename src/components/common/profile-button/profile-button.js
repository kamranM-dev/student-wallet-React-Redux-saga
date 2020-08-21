import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../../../actions/auth';
import { hideHeaderLinks } from '../../../actions/header-links-visibility';
import {getUser, getUserName} from '../../../utils/store-getters';
import './profile-button.scss';
import {ROUTES} from '../../../constants/routes';

class ProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksDisplayed: false
    };
  }

  redirectTo = (path) => () => {
    this.props.push(path);
    this.props.hideHeaderLinks();
  };

  showLinks = () => {
    this.toggleLinks(true);
  };

  hideLinks = () => {
    this.toggleLinks(false);
  };

  toggleLinks = show => {
    const newValue = typeof show === 'boolean' ? show : !this.state.linksDisplayed;
    this.setState({
      linksDisplayed: newValue
    });
  };

  getimage = () => {
    if (this.props.user.user_img) {
      //const imageUrl = `url(${this.props.user.user_img})`;
      const url = "https://graph.facebook.com/"+this.props.user.username+"/picture";
      const imageUrl = `url(${url})`;
      return (<div className="profile-image" style={{ backgroundImage: imageUrl }}></div>);
    }
    return (<div className="profile-image profile-image__default-user"/>);
  };

  render() {
    const linkClass = ClassNames('profile-links', { 'show': this.state.linksDisplayed });
    const fullName = getUserName(this.props.user);
    return (
      <div className="profile-button-section" onMouseOver={ this.showLinks } onTouchStart={ this.toggleLinks }
           onMouseOut={ this.hideLinks }>
        <div className="profile-button">
          <div className="user-name">{ fullName }</div>
          { this.getimage() }
        </div>
        <ul className={ linkClass }>
          <li className="dashboard-link" onClick={ this.redirectTo(ROUTES.DASHBOARD) }>
            <div className="text-content">Dashboard</div>
          </li>
          <li className="dashboard-link" onClick={ this.redirectTo(ROUTES.USER_INFO_FORM) }>
            <div className="text-content">Edit profile</div>
          </li>
          <li onClick={ this.props.logout }>
            <div className="text-content">Logout</div>
          </li>
        </ul>
      </div>
    );
  }
}

ProfileButton.propTypes = {
  logout: PropTypes.func,
  push: PropTypes.func,
  hideHeaderLinks: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state)
  };
};
const mapDispatchToProps = { push, logout, hideHeaderLinks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileButton);
