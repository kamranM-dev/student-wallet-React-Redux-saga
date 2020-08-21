import React from 'react';
import GettingStartedForm from './getting-started-form';
import './getting-started.scss';

const GettingStarted = () => {
  return (
    <div className="getting-started text-center">
      <div className="getting-started__title text-xxxlarge font-secondary">
        Sign up to get started today
      </div>
      <div className="getting-started__text text-normal text-center">
        With Student Wallet, you can keep track of your favorite schools, funding needed, and choose the best financial aid options all from one dashboard.
      </div>
      <GettingStartedForm />
    </div>
  );
};
export default GettingStarted;
