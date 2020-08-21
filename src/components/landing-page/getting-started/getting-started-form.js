import React, {Component} from 'react';
import Button from '../../common/button/button';
import './getting-started-form.scss';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import PropTypes from 'prop-types';
import {displayLoginModal} from '../../../actions/authModal';

class GettingStartedForm extends Component {

  signUp = () => {
    this.props.displayLoginModal();
  };

  render() {
    return (
      <div className="getting-started-form">
        <Button size={Button.Size.MEDIUM} text="Get Started" onClick={this.signUp.bind(this)}/>
      </div>
    );
  }
}

GettingStartedForm.propTypes = {
  token: PropTypes.string,
  push: PropTypes.func,
  displaySignupModal: PropTypes.func,
  displayLoginModal: PropTypes.func,
};

const mapDispatchToProps = {displayLoginModal, push};

export default connect(null, mapDispatchToProps)(GettingStartedForm);
