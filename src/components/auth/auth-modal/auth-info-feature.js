import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AuthInfoFeature = ({ icon, title, content }) => {
  const iconClass = classNames('fa', icon);
  return (
    <div className="signup__app-feature">
      <div className="text-medium" style={ { minWidth: 50, textAlign: 'center', paddingTop: 2 } }>
        <i className={ iconClass }></i>
      </div>
      <div>
        <div className="text-large font-secondary">{ title }</div>
        <div className="text-medium">{ content }</div>
      </div>
    </div>
  );
};
AuthInfoFeature.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};
export default AuthInfoFeature;
