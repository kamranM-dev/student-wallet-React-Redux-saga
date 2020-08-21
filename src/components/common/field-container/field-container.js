import React, { Component } from 'react';
import { string, object, bool, node } from 'prop-types';
import classNames from 'classnames';

class FieldContainer extends Component {
  getErrorContainer = () => {
    if (this.props.isValidated) {
      return (
        <div className="error-container">
          { this.getErrorText() }
        </div>
      );
    }
  };

  getErrorText = () => {
    if (this.props.showError && this.props.errorText) {
      return <div className="text-error text-left">{ this.props.errorText }</div>;
    }
  };

  render () {
    const { style, className, children } = this.props;
    const classList = classNames('input-field-container', className);
    return (
      <div className={ classList } style={ style }>
        { children }
        {
          this.getErrorContainer()
        }
      </div>
    );
  }
}
FieldContainer.defaultProps = {
  isValidated: false,
  showError: false,
  errorText: ''
};
FieldContainer.propTypes = {
  style: object,
  className: string,
  isValidated: bool,
  showError: bool,
  children: node,
  errorText: string
};

export default FieldContainer;
