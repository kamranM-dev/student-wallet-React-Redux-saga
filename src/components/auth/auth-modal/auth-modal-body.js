import React from 'react';
import { node } from 'prop-types';

const AuthModalBody = ({ children }) => {
  return (
    <div className="rm-modal__body rm-modal__body--signup rd-text">
      { children }
    </div>
  );
};
AuthModalBody.propTypes = {
  children: node
};
export default AuthModalBody;
