import React from 'react';
import { bool, func } from 'prop-types';
import { getUserToken } from '../utils/storage';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { ROUTES } from '../constants/routes';

const AuthenticatedComponent = (Component) => {
  class AuthenticatedComponent extends React.Component {
    componentDidMount() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        this.props.pushPath(ROUTES.DASHBOARD);
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated === true
            ? <Component {...this.props}/>
            : null
          }
        </div>
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    isAuthenticated: bool,
    route: func,
    pushPath: func
  };

  const mapStateToProps = (state) => {
    const token = getUserToken();
    return {
      isAuthenticated: !!token,
      route: state.router.location.pathName,
    };
  };

  return connect(mapStateToProps, {pushPath: push})(AuthenticatedComponent);
};

export default AuthenticatedComponent;
