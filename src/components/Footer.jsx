import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <a href="#hero" className="logo">
          <div className="logo-icon">SS</div>
          <div className="logo-text">Shubham Sharma<span>.</span></div>
        </a>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/shubham-sharma-428bb4167/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:shub.tech10@gmail.com" className="social-btn" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="tel:+917018049143" className="social-btn" aria-label="Phone">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Shubham Sharma. All rights reserved. | Capital Markets & FinTech Specialist
        </p>
      </div>
    </footer>
  );
}
