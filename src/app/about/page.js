// /app/about/page.js
'use client';
import React from 'react';
import '../../styles/aboutus-page.css'

const AboutPage = () => {
  return (
    <div className='aboutus-container'>
      <h1 className='aboutus-container-heading'>About Us</h1>
      <p className='aboutus-text'>
        Welcome to our website! We are passionate about sharing knowledge and content through our blog posts and movie collections. 
        Our mission is to provide quality information and entertainment for our audience. Whether you are here to read insightful posts or explore movies, we are glad to have you!
      </p>
      <p className='aboutus-text'>
        Stay connected and explore more exciting content. If you have any questions or feedback, feel free to reach out to us anytime!
      </p>
    </div>
  );
};

export default AboutPage;
