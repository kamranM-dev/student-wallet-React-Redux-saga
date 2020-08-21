import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { routes } from "./routes";
import { ACTION_TYPES } from "./constants/action-types";
import PropTypes from "prop-types";
import { getLoggedInUser } from "./actions/user";

const { FETCH_LOGGED_IN_USER_ERROR } = ACTION_TYPES;

class AppRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const store = this.props.store;
    const token = store.getState().user.token;
    if (!token) {
      store.dispatch({ type: FETCH_LOGGED_IN_USER_ERROR });
    } else {
      store.dispatch(getLoggedInUser(token));
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>{routes}</ConnectedRouter>
      </Provider>
    );
  }
}

AppRender.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default AppRender;
