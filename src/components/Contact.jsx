import React, { useState } from 'react';
import contactImg from '../assets/shubham_contact.jpg';

export default function Contact({ triggerToast }) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      triggerToast(`Thank you, ${contactForm.name}! Your message has been sent successfully.`);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('shub.tech10@gmail.com');
    triggerToast('Email address copied to clipboard: shub.tech10@gmail.com');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">
            Let's Connect & <span>Collaborate</span>
          </h2>
          <p className="section-desc max-w-700">
            Open for Senior Business Analyst, AI Product Owner, and Systems Consulting opportunities across Capital Markets, Retirement Systems, and FinTech.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-info-card">
            <div className="contact-image-wrapper">
              <img src={contactImg} alt="Shubham Sharma - Senior Consultant" className="contact-card-img" />
            </div>

            <div className="info-card-item">
              <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="info-content-wrap">
                <div className="info-lbl">Direct Email</div>
                <div className="info-val">
                  <a href="mailto:shub.tech10@gmail.com">shub.tech10@gmail.com</a>
                </div>
              </div>
              <button
                className="btn-icon-copy"
                onClick={copyEmail}
                title="Copy Email"
                aria-label="Copy Email"
              >
                <i className="fa-regular fa-copy"></i>
              </button>
            </div>

            <div className="info-card-item">
              <div className="info-icon"><i className="fa-brands fa-linkedin"></i></div>
              <div className="info-content-wrap">
                <div className="info-lbl">LinkedIn Network</div>
                <div className="info-val">
                  <a href="https://www.linkedin.com/in/shubham-sharma-428bb4167/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/shubham-sharma
                  </a>
                </div>
              </div>
            </div>

            <div className="info-card-item">
              <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
              <div className="info-content-wrap">
                <div className="info-lbl">Mobile Contact</div>
                <div className="info-val">
                  <a href="tel:+917018049143">+91-7018049143</a>
                </div>
              </div>
            </div>

            <div className="info-card-item">
              <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div className="info-content-wrap">
                <div className="info-lbl">Location & Availability</div>
                <div className="info-val">India (Open to Hybrid / Remote Global Roles)</div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-sub text-muted text-sm">
              Reach out to discuss role opportunities, consulting inquiries, or system architecture.
            </p>

            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name">Your Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Work Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. alex@fintechcorp.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Topic / Role Opportunity</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="e.g. Senior BA + AI Role / Consulting Discussion"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows="4"
                  placeholder="Briefly describe your team, project requirements, or opportunity..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold btn-block" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Transmitting...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> Send Direct Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
