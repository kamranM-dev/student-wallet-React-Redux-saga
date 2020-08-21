import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import classNames from 'classnames';
import {connect} from "react-redux";

import LoginForm from '../login/login-form';
import SignupForm from '../signup/signup-form';
import LoginFormInfo from '../login/login-form-info';
import { SIGNUP_MODE } from '../../../constants/signup-modes';
import AuthModalBody from './auth-modal-body';
import {hideAuthModal} from "../../../actions/authModal";

import './auth-modal.scss';


 class AuthModal extends React.Component {
  getSections = () => {
    if (this.props.mode === SIGNUP_MODE) {
      return (
        <AuthModalBody>
          <LoginFormInfo className="signup-modal__content"/>
          <SignupForm className="signup-modal__form-section" mode={this.props.mode}/>
        </AuthModalBody>
      );
    } else {
      return (
        <AuthModalBody>
          <LoginFormInfo className="signup-modal__content"/>
          <LoginForm className="signup-modal__form-section" mode={this.props.mode}/>
        </AuthModalBody>
      );
    }
  }

  render () {
    const classList = classNames('rm-modal rm-modal__signup');
    return (
      <Modal
        ariaHideApp={false}
        isOpen={this.props.signUpOpen}
        onRequestClose={this.props.hideAuthModal}
        overlayClassName="rm-overlay"
        contentLabel="Auth Modal"
        className={ classList }>
        { this.getSections() }
      </Modal>
    );
  };
}

AuthModal.propTypes = {
  mode: PropTypes.string,
  signUpOpen: PropTypes.bool,
  hideAuthModal: PropTypes.func,
};

const mapStateToProps = ({ authModal }) => {
  return {
    mode: authModal.mode,
    signUpOpen: authModal.signUpOpen
  };
};
const mapDispatchToProps = { hideAuthModal };
export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
