import React from 'react';
import { object, func } from 'prop-types';

export default class DateInput extends React.Component {
  render() {
    return (
      <div className="input-field sw-date-picker">
        <input className="text-medium"
               id="birth_date"
               value={this.props.value}
               onClick={ this.props.onClick }
               placeholder="Birth Date"/>
        <i className="fa fa-calendar"></i>
      </div>
    );
  }
}
DateInput.propTypes = {
  value: object,
  onClick: func
};
