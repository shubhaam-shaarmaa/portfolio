import React, { useState } from 'react';

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

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact <span>Me</span></h2>
          <p className="section-desc">
            Interested in discussing Retirement Systems, Asset Management, Business Analysis requirements, or Product Owner opportunities? Let's connect!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-info-card" style={{ overflow: 'hidden' }}>
            <div className="contact-image-wrapper" style={{ margin: '-2.2rem -2.2rem 1rem -2.2rem', overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
              <img src="/shubham_contact.jpg" alt="Shubham Sharma - Senior Consultant" style={{ width: 'calc(100% + 4.4rem)', height: '240px', objectFit: 'cover', objectPosition: 'center 20%' }} />
            </div>
            <div className="info-card-item">
              <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
              <div>
                <div className="info-lbl">Email Address</div>
                <div className="info-val">
                  <a href="mailto:shub.tech10@gmail.com">shub.tech10@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="info-card-item">
              <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
              <div>
                <div className="info-lbl">Phone Number</div>
                <div className="info-val">
                  <a href="tel:+917018049143">+91-7018049143</a>
                </div>
              </div>
            </div>

            <div className="info-card-item">
              <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div>
                <div className="info-lbl">Location</div>
                <div className="info-val">Himachal Pradesh, India</div>
              </div>
            </div>

            <div className="info-card-item">
              <div className="info-icon"><i className="fa-brands fa-linkedin"></i></div>
              <div>
                <div className="info-lbl">LinkedIn Profile</div>
                <div className="info-val">
                  <a href="https://www.linkedin.com/in/shubham-sharma-428bb4167/" target="_blank" rel="noopener noreferrer">shubham-sharma-428bb4167</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="e.g. John Doe"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="e.g. john@example.com"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder="e.g. Business Analysis / Product Owner Opportunity"
                  required
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> Send Message
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
