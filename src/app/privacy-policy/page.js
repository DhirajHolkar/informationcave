// app/privacy-policy/page.js

'use client';
import React from 'react';
import '../../styles/privacy-policy-page.css'

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <div className="policy-title">Privacy Policy</div>
      <p className="policy-text">
        Your privacy is important to us. This Privacy Policy explains how we handle your information when you visit our website.
      </p>

      <div className="policy-subtitle">Information We Collect</div>
      <p className="policy-text">
        We do not collect any personal information from visitors to this website.
      </p>

      <div className="policy-subtitle">Changes to This Policy</div>
      <p className="policy-text">
        We may update our Privacy Policy from time to time. Please review this page periodically for
        any changes.
      </p>

      <p className="policy-note">Last updated: June 24, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
