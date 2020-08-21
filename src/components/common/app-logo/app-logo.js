import React from 'react';
import { bool, func } from 'prop-types';
import logo from '../../../assets/images/wallet.png';
import logoWhite from '../../../assets/images/wallet-white.png';
import noop from 'lodash.noop';

export const AppLogo = ({ isWhite = false, onClick = noop }) => {
  const src = isWhite ? logoWhite : logo;
  return <img src={ src } className="app-logo" alt="Student Wallet" onClick={onClick}/>;
};
AppLogo.propTypes = {
  isWhite: bool,
  onClick: func
};
