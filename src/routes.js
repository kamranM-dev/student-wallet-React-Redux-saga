import React from "react";
import { Route, withRouter } from "react-router-dom";
import AuthenticatedComponent from "./components/authenticated-component";
import { ROUTES } from "./constants/routes";
import App from "./components/landing-page/landing-page";
import Dashboard from "./components/dashboard/dashboard";
import UserInfoForm from "./components/user-info-form/user-info-form";
import FacebookLoginRedirect from "./components/auth/facebook-login-redirect/facebook-login-redirect";
import EmailConfirmation from "./components/auth/email-confirmation/email-confirmation";
import TermsAndService from "./components/landing-page/terms-and-service/terms-and-service";
import PrivacyPolicy from "./components/landing-page/privacy-policy/privacy-policy";

import PageHeader from "./components/common/page-header/page-header";
import LandingFooter from "./components/common/page-footer/page-footer";
import AuthModal from "./components/auth/auth-modal/auth-modal";

import { positions, Provider as AlertProvider } from "react-alert";
import Alert from "@material-ui/lab/Alert";

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
};

const AlertTemplate = ({ options, message, close }) => (
  <Alert
    severity={options.type}
    style={{ fontSize: 15, marginTop: "10px" }}
    onClick={close}
  >
    {message}
  </Alert>
);

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop = withRouter(ScrollToTop);

export const routes = (
  <AlertProvider template={AlertTemplate} {...options}>
    <ScrollToTop>
      <PageHeader />
      <AuthModal />
      <Route exact path={ROUTES.ROOT} component={App} />
      <Route path={ROUTES.LANDING_PAGE} component={App} />
      <Route
        exact
        path={ROUTES.DASHBOARD}
        component={AuthenticatedComponent(Dashboard)}
      />
      <Route
        exact
        path={ROUTES.USER_INFO_FORM}
        component={AuthenticatedComponent(UserInfoForm)}
      />
      <Route
        path={ROUTES.FACEBOOK_LOGIN_REDIRECT}
        component={FacebookLoginRedirect}
      />
      <Route path={ROUTES.CONFIRM_EMAIL} component={EmailConfirmation} />
      <Route path={ROUTES.TERMS_AND_SERVICE} component={TermsAndService} />
      <Route path={ROUTES.PRIVACY_POLICIES} component={PrivacyPolicy} />
      <LandingFooter />
    </ScrollToTop>
  </AlertProvider>
);
