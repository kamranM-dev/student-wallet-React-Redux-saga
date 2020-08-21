import React from 'react';
import ImageCard from '../../common/image-card/image-card';
import './how-it-works.scss';

const HOW_IT_WORKS = 'how-it-works';

const HowItWorks = () => {
  const props = {
    prefixClass: HOW_IT_WORKS,
    isTextCenter: true
  };

  return (
    <div className="how-it-works container">
      <div className="text-xxxlarge text-center">
        How Student Wallet Works
      </div>
      <div className="how-it-works__cards">
        <ImageCard image="application"
                   {...props}
                   title="Sign Up for Free in 30-secs"
                   text="Sign up and have immediate browse all scholarships using our Scholarship Explorer. You can also enter your personal information to see scholarships that you specifically qualify for."/>
        <ImageCard image="scholarship"
                   {...props}
                   title="Our Algorithms Get to Work"
                   text="Based on your unique data, our algorithm will curate a list of scholarships you are most likely to win, potentially saving you hundreds of hours. You will also be matched to grants (free money that does not have to be repaid), federal financial aid, university scholarships, private donors, and more."/>
        <ImageCard image="apply"
                   {...props}
                   title="Graduate Debt-Free"
                   text="Student Wallet will continue to update it's library of scholarships and other funding options regularly. By checking back here often, you can best ensure that you secure the funding you need to graduate debt free."/>
      </div>
    </div>
  );
};
export default HowItWorks;
