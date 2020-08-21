import React from 'react';
import ImageCard from '../../common/image-card/image-card';
import './app-features.scss';

const APP_FEATURE = 'app-feature';

const AppFeatures = () => {
  const props = {
    prefixClass: APP_FEATURE,
    isTextCenter: false
  };

  return (
    <section className="container app-features">
      <ImageCard image="scholarship"
                 { ...props }
                 title="Scholarship Database"
                 text="Review and filter all of your scholarship matches. Find the best fits for you and start applying now!" />
      <ImageCard image="campus"
                 { ...props }
                 title="Campus Explorer"
                 text="View colleges and universities best suited for you based on your profile and scholarship opportunities." />
      <ImageCard image="opportunities"
                 { ...props }
                 title="Student Opportunities"
                 text="View the best opportunities for your needs, from Student Loans to the best Credit Cards for students." />
    </section>
  );
};
export default AppFeatures;
