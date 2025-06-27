// app/terms/page.js
'use client';
import React from 'react';
import '../../styles/terms-and-conditions-page.css'

const TermsPage =()=> {
  return (
    <div className="terms-container">
      <div className="terms-title">Terms and Conditions</div>
      <p className="terms-text">
        At our core, we are passionate about science and committed to sharing knowledge responsibly. While we always do our best to ensure the information on this website is accurate, reliable, and up to date, it is important to understand the terms under which you use our content. Please read the following carefully.
        By accessing and using this website, you agree to be bound by the terms outlined below. If you do not agree with any part of these terms, please refrain from using the site.
      </p>

      <div className="terms-subtitle">Use of Content</div>
      <p className="terms-text">
        All content published on this website is intended for informational and educational purposes only. While we encourage learning and sharing, reproduction, republication, or redistribution of our content — in part or whole — is not permitted without prior written permission from the site owner or content creator.
      </p>

      <div className="terms-subtitle">Disclaimer</div>
      <p className="terms-text">
        We strive to ensure that all information provided on this website is accurate, current, and based on reputable sources. However, scientific knowledge is constantly evolving, and errors or omissions may occur. Therefore, the content is provided “as is” and without warranties of any kind, either express or implied. 
        We do not provide medical, legal, or professional advice. Users are encouraged to independently verify any information found on this site and consult with qualified professionals where appropriate.
      </p>

      <div className="terms-subtitle">Limitation of Liability</div>
      <p className="terms-text">
        Under no circumstances shall the website owner or contributors be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from the use or inability to use this website or its content. Use of the site and its materials is entirely at your own risk.
      </p>

      <div className="terms-subtitle">Third-Party Links</div>
      <p className="terms-text">
        This website may include links to external websites for reference, further reading, or convenience. We are not responsible for the content, policies, or practices of these third-party sites. Inclusion of any external link does not imply endorsement by us. Users are advised to review the privacy and terms of those websites independently.
      </p>

      <div className="terms-subtitle">Modifications</div>
      <p className="terms-text">
        We may update our terms and conditions from time to time. Please review this page periodically for
        any changes. We reserve the right to modify or update these terms at any time without prior notice. Continued use of the site following any changes constitutes your acceptance of the revised terms.
        Lets keep exploring, learning, and staying curious — science is always evolving, and so are we.
        We have always got your back as you journey through the wonders of science with us.
      </p>

      <p className="terms-note">Last updated: June 24, 2025</p>
    </div>
  );
};

export default TermsPage;
