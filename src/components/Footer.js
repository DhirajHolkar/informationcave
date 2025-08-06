// /components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>
        © {new Date().getFullYear()} protoncave.com | All rights reserved. |{' '}
        <Link href="/about">
          <span className='footer-link'>About Us |</span>
        </Link>
        <Link href="/contact">
          <span className='footer-link'>Contact Us |</span>
        </Link>
        <Link href="/privacy-policy">
          <span className='footer-link'>Privacy Policy |</span>
        </Link>
        <Link href="/terms-and-conditions">
          <span className='footer-link'>Terms and Conditions</span>
        </Link>
      </p>
    </footer>
  );
};


export default Footer;
