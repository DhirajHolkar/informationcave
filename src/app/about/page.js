// /app/about/page.js
'use client';
import React from 'react';
import '../../styles/aboutus-page.css'

const AboutPage = () => {
  return (
    <div className='aboutus-container'>
      <div className='aboutus-container-heading'>About Us</div>
      <p className='aboutus-text'>
        Welcome to informationcave.com We are passionate about sharing knowledge and content through our blog posts and collections. 
        We provide quality information for our audience, Whether you are here to read insightful posts or explore science and technology, or just love cool science stuff we are glad to have you!
      </p>
      <p className='aboutus-text'>
        Our goal is to Share the latest in science and technology in a way anyone can understand. Encourage curiosity, critical thinking, and a love for discovery. Support learners, educators, and curious minds across the globe. 
        Thank you for being a part of our journey. Lets explore this fascinating world and our future together.
      </p>
      <p className='aboutus-text'>
        Stay connected and explore more exciting content. If you have any questions or feedback, feel free to reach out to us anytime!
      </p>
    </div>
  );
};

export default AboutPage;
