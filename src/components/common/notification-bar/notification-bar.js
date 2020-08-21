import React from 'react';
import './notification-bar.scss';

const NotificationBar = ({text}) => {
  return (
    <div className="notification-bar text-small">
      {text}
    </div>
  );
};
export default NotificationBar;
