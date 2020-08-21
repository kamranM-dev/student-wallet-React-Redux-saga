import React from 'react';
import { string } from 'prop-types';
import './testimonial.scss';
import classNames from 'classnames';

const Testimonial = ({ user, title, username, occupation }) => {
  const classList = classNames('testimonial-image', `app-testimonial-${user}`);
  return (
    <div className="app-testimonial-container text-center">
      <div className={ classList }></div>
      <div className="app-testimonial-title text-xlarge">
        { title }
      </div>
      <div className="app-testimonial-user-name text-medium text-bold" style={ { marginTop: 25 } }>
        { username }
      </div>
      <div className="app-testimonial-user-occupation text-medium">
        { occupation }
      </div>
    </div>
  );
};
Testimonial.propTypes = {
  user: string,
  title: string,
  username: string,
  occupation: string
};
export default Testimonial;
