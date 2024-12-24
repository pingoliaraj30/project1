import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <a className="footer-logo text-uppercase logo" href="#">
          <span className="logo-left">PR</span> <span className="logo-right">COMPANY</span>
        </a>
      </div>
      <div className="footer-columns">
        {/* GET STARTED */}
        <div className="footer-column">
          <h5>GET STARTED</h5>
          <ul>
            <li>Start</li>
            <li>Documentation</li>
            <li>Installation</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h5>COMPANY</h5>
          <ul>
            <li>Contact</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h5>QUICK LINKS</h5>
          <ul>
            <li>Support Center</li>
            <li>Service Status</li>
            <li>Security</li>
            <li>Customers</li>
            <li>Blog</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="footer-column">
          <h5>LEGAL</h5>
          <ul>
            <li>Privacy Notice</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* LET'S CHAT */}
        <div className="footer-column">
          <h5>Location</h5>
          <p>Have a support question?</p>
          <button className="btn-get-in-touch">GET IN TOUCH</button>
          <h6>YOU CALL US</h6>
          <p>0124-64XXXX</p>
        </div>
      </div>

      <div className="footer-bottom justify-content-center">
        <p>©2024-25. | Designed By: Raj Pingolia. | All rights reserved.</p>
        <div className="footer-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

    </footer >
  );
};

export default Footer;
