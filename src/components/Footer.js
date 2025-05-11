// /components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>
        © {new Date().getFullYear()} informationcave.com | All rights reserved. |{' '}
        <Link href="/about">
          <span className='footer-link'>About Us</span>
        </Link>
      </p>
    </footer>
  );
};


export default Footer;
