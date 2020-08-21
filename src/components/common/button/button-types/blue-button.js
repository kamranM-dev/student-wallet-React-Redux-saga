import React from 'react';
import Button from '../button';

const BlueButton = ({ ...props }) => {
  return (
    <Button className="sw-button--blue" {...props}/>
  );
};
export default BlueButton;
