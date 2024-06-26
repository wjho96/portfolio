import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer_inner">
        &copy; <span>{new Date().getFullYear()}</span> JonghoWoo. All Rights Reserved.
        <div className="contact-icons">
          <a href="tel:01041839584"><FontAwesomeIcon icon={faPhone} /> 010-4183-9584</a>
          <a href="mailto:wjho96@naver.com"><FontAwesomeIcon icon={faEnvelope} /> wjho96@naver.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

