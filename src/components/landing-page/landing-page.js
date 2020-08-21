import React, {Component} from 'react';
import Banner from './banner/banner';
import HowItWorks from './how-it-works/how-it-works';
import OpportunityForAll from './opportunity-for-all/opportunity-for-all';
import Testimonials from './testimonials/testimonials';
import GettingStarted from './getting-started/getting-started';
import Divider from '../common/divider';

import {connect} from 'react-redux';

import {push} from 'react-router-redux';
import PropTypes from 'prop-types';
import './landing-page.css';


class App extends Component {

  render() {
    return (
      <div className="landing-page">
        <Banner/>
        <Divider backgroundColor="#f3f3f3"/>

        <HowItWorks/>
        <OpportunityForAll/>
        <Testimonials/>
        <GettingStarted/>

        <Divider height={4} backgroundColor="#8dc449"/>
      </div>
    );
  }
}

//export default App;

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    route: state.router.location.pathName,
  };
};

App.propTypes = {
  displaySignupModal: PropTypes.func,
  mode: PropTypes.string,
  className: PropTypes.string,
  getLoggedInUserSuccess: PropTypes.func,
};
export default connect(mapStateToProps, {pushPath: push})(App);
