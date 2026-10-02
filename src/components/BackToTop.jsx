import React from 'react';

export default function BackToTop({ scrolled }) {
  const scrollToTop = () => {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button className={`back-to-top ${scrolled ? 'visible' : ''}`} onClick={scrollToTop} aria-label="Back to top">
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
