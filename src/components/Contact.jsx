import React, { useState } from 'react';
import contactImg from '../assets/shubham_contact.jpg';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ triggerToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (typeof triggerToast === 'function') {
        triggerToast(`Thank you, ${formData.name || 'there'}! Your message has been sent successfully.`);
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const copyEmail = () => {
    if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(PERSONAL_INFO.email)
        .then(() => {
          if (typeof triggerToast === 'function') {
            triggerToast(`Email copied to clipboard: ${PERSONAL_INFO.email}`);
          }
        })
        .catch(() => {
          if (typeof triggerToast === 'function') {
            triggerToast(`Email: ${PERSONAL_INFO.email}`);
          }
        });
    } else {
      if (typeof triggerToast === 'function') {
        triggerToast(`Email: ${PERSONAL_INFO.email}`);
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Connect & Collaborate</span>
          <h2 className="section-title">
            Let's Build <span>Better Solutions</span>
          </h2>
          <p className="section-desc max-w-700">
            Let's build better solutions at the intersection of business, technology and AI. Open to Senior Business Analyst, Techno-Functional Consultant, and Capital Markets opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Cards & Photo */}
          <div className="contact-info-column">
            <div className="contact-image-wrapper">
              <img
                src={contactImg}
                alt="Shubham Sharma - Senior Consultant"
                className="contact-card-img"
              />
              <div className="contact-img-badge">
                <i className="fa-solid fa-signal text-emerald"></i> Available for Opportunities
              </div>
            </div>

            <div className="contact-cards-stack">
              {/* Email Item */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-cyan">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">Direct Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-val">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  className="contact-copy-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>

              {/* LinkedIn Item */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-gold">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">LinkedIn Network</span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    linkedin.com/in/shubham-sharma
                  </a>
                </div>
              </div>

              {/* GitHub Item */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-purple">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">GitHub Repository</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-val"
                  >
                    github.com/shubhaam-shaarmaa
                  </a>
                </div>
              </div>

              {/* Location & Mobile */}
              <div className="contact-item-card">
                <div className="contact-item-icon bg-blue">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-item-info">
                  <span className="contact-lbl">Location & Phone</span>
                  <span className="contact-val text-muted">
                    {PERSONAL_INFO.location} &nbsp;·&nbsp; {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <h3 className="form-card-title">
                <i className="fa-solid fa-paper-plane text-cyan"></i> Send a Direct Message
              </h3>
              <p className="form-card-subtitle">
                Discuss opportunities across Business Analysis, Capital Markets solutions, or AI workflows.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@firm.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject / Role Opportunity</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Senior Business Analyst Opportunity — Capital Markets"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message Details</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role specifics, project scope, or scheduling details..."
                    className="form-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin"></i> Sending Message...
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
      </div>
    </section>
  );
}
