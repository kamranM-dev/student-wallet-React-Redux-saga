import React from 'react';
import './opportunity-for-all.scss';
import Button from '../../common/button/button';

const OpportunityForAll = () => {
  return (
    <section className="opportunity-for-all">
      <div className="image"></div>
      <div className="opportunity-for-all__text-section">
        <div className="text-xxxlarge font-secondary title">
          Don’t Let Money Limit Your Potential.
        </div>
        <div className="text-medium font-secondary content">
          Student Wallet was created by students, for students. Unlike other platforms, Student Wallet is completely free and independent. Instead of burying you with a mountain of options, our algorithms curate a list specific to your interests, your career goals, your school choices, interested majors, budget, and schedule.
        </div>
        <Button size={Button.Size.MEDIUM} text="Get Started" style={ { width: 215 } } />
      </div>
    </section>
  );
};
export default OpportunityForAll;
