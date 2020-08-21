import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { facebookLogin } from '../../../actions/auth';

class FacebookLoginRedirect extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      status: 'Loading...'
    };
  }

  componentWillMount () {
    const props = this.props;
    // if code and token were requested, this would be props.location.hash
    const hash = props.location.search.substr(1);

    const parts = hash.split('&');
    const code = this.getPart(parts, 'code');

    this.props.facebookLogin(code);
  }

  getPart (parts, param) {
    const part = parts.find(i => i.startsWith(param));
    return part.split('=')[1];
  }

  render () {
    return (
      <div>

      </div>
    );
  }
}
FacebookLoginRedirect.propTypes = {
  facebookLogin: func
};
const mapDispatchToProps = { facebookLogin };

export default connect(null, mapDispatchToProps)(FacebookLoginRedirect);

