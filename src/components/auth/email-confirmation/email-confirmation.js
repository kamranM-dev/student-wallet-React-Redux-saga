import React from 'react';
import { func } from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {confirmEmail} from '../../../api/user';
import NotificationBar from '../../common/notification-bar/notification-bar';

class EmailConfirmation extends React.Component {
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

    confirmEmail(code,(err,res) => {
      if(!err){
        this.setState({status:"Email has been confirmed"});
        //this.props.push(ROUTES.LANDING_PAGE);
      }
      else{
        if(res == null){
          //alert("Ops! Something happened!");
          this.setState({status:"Ops! Something happened!"});
        }
        else{
          //alert(res);
          this.setState({status:res});
        }
      }
    });
  }

  getPart (parts, param) {
    const part = parts.find(i => i.startsWith(param));
    return part.split('=')[1];
  }

  render () {
    return (
           <NotificationBar text={this.state.status} />
    );
  }
}
EmailConfirmation.propTypes = {
  push: func,
};
const mapDispatchToProps = { push };

export default connect(null, mapDispatchToProps)(EmailConfirmation);

