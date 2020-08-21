import React from 'react';
import Testimonial from './testimonial';
import './testimonials.css';

const Testimonials = () => {
  return (
      <div className="app-testimonials">
        <Testimonial user="user1"
                     username="Brenda M."
                     occupation="Arizona State University"
                     title='“My entire accounting degree was paid for by scholarships. I even received cash to buy a laptop & books.”'/>
      </div>
  );
};
export default Testimonials;
