import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SubmitButton from "../../common/button/button-types/submit-button";
import FacebookButton from "../../common/button/facebook-button";
import InputField from "../../common/input-field/input-field";
import SignupLoginText from "../auth-modal/signup-login-text";
import AuthFormTitle from "../auth-modal/auth-form-title";
import AuthInfoTitle from "../common/auth-info-title";
import { ruleRunner, run } from "../../../utils/validation/validation";
import {
  minLength,
  mustMatch,
  required,
} from "../../../utils/validation/validators";
import { connect } from "react-redux";
import { displayLoginModal } from "../../../actions/authModal";
import { signUp } from "../../../api/user";
import {withAlert} from "react-alert";

const NAME = "name";
const EMAIL = "email";
const PASSWORD1 = "password1";
const PASSWORD2 = "password2";

const runners = [
  ruleRunner("name", "Name", required),
  ruleRunner("email", "Email Address", required),
  ruleRunner("password1", "Password", required, minLength(6)),
  ruleRunner(
    "password2",
    "Password Confirmation",
    required,
    mustMatch("password1", "Password")
  ),
];
const InputFieldStyle = {
  marginBottom: 10,
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
      formFields: {},
      validationErrors: {},
      sendingData: false,
    };
  }

  handleFieldChanged = (field) => (e) => {
    const oldFormFields = this.state.formFields;

    const formFields = {
      ...oldFormFields,
      [field]: e.target.value,
    };
    const validationErrors = run(formFields, runners);
    this.setState({
      formFields,
      validationErrors,
    });
  };

  getErrorText = (field) => {
    const errors = this.state.validationErrors;
    return errors[field];
  };

  submitForm = (e) => {
    e.preventDefault();
    const errors = run(this.state.formFields, runners);
    this.setState({
      showError: true,
      validationErrors: errors,
    });

    let email = this.state.formFields.email;
    let pwd = this.state.formFields.password1;
    let name = this.state.formFields.name.split(" ");
    let fname = name.length > 1 ? name[0] : name;
    let lname = name.length > 1 ? name[1] : "";
    if (Object.keys(errors).length === 0 && !this.state.sendingData) {
      this.setState({ sendingData: true });
      signUp(email, name, pwd, fname, lname, (err, res) => {
        if (err) {
          // alert for error message.
          if (res.code === 500) {
            this.props.alert.error(res.msg);
            return;
          }
          let errors = run(this.state.formFields, runners);
          errors.email = res.msg;
          this.setState({
            showError: true,
            validationErrors: errors,
            sendingData: false,
          });
        } else {
          this.props.alert.show("Confirmation email sent.");
          this.setState({
            showError: false,
            sendingData: false,
          });
        }
      });
    }
  };

  redirectToLogin = (e) => {
    e.preventDefault();
    this.props.displayLoginModal();
  };

  render() {
    const classList = classNames(this.props.className);
    return (
      <div className={classList}>
        <AuthInfoTitle
          style={{ marginBottom: 20 }}
          text="Get Your Free Student Wallet Account"
          className="hide-tablet"
        />
        <div
          className="form-box signup-form"
          style={{ backgroundColor: "#f0f8fd", border: "1px solid #d8e1e6" }}
        >
          <AuthFormTitle text="Create your Account" />
          <div style={{ padding: "30px 20px" }}>
            <FacebookButton mode={this.props.mode} />
            <SignupLoginText mode={this.props.mode} />
            <form noValidate onSubmit={this.submitForm}>
              <InputField
                id={EMAIL}
                isValidated
                placeholder="Email Address"
                style={InputFieldStyle}
                showError={this.state.showError}
                type="email"
                onChange={this.handleFieldChanged(EMAIL)}
                errorText={this.getErrorText(EMAIL)}
              />
              <InputField
                id={NAME}
                isValidated
                placeholder="Name"
                style={InputFieldStyle}
                showError={this.state.showError}
                onChange={this.handleFieldChanged(NAME)}
                errorText={this.getErrorText(NAME)}
              />
              <InputField
                id={PASSWORD1}
                isValidated
                placeholder="Password"
                style={InputFieldStyle}
                type="password"
                showError={this.state.showError}
                onChange={this.handleFieldChanged(PASSWORD1)}
                errorText={this.getErrorText(PASSWORD1)}
              />
              <InputField
                id={PASSWORD2}
                isValidated
                placeholder="Confirm Password"
                style={InputFieldStyle}
                type="password"
                showError={this.state.showError}
                onChange={this.handleFieldChanged(PASSWORD2)}
                errorText={this.getErrorText(PASSWORD2)}
              />
              {!this.state.sendingData ? (
                <SubmitButton text="GET STARTED" />
              ) : (
                <div className="lds-ring">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="text-gray text-small" style={{ margin: "14px 0" }}>
          Have an account?{" "}
          <a href="#/" onClick={this.redirectToLogin}>
            Sign in here
          </a>
        </div>
      </div>
    );
  }
}

SignupForm.propTypes = {
  displayLoginModal: PropTypes.func,
  mode: PropTypes.string,
  className: PropTypes.string,
};
export default withAlert()(connect(null, { displayLoginModal })(SignupForm));
