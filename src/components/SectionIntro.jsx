import React from 'react';
import './SectionIntro.css';

export default function SectionIntro({ section, onStart }) {
  return (
    <div className="section-intro animate-scaleIn">
      <div className="section-intro__icon">{section.icon}</div>
      <div className="section-intro__tag">Seção</div>
      <h2 className="section-intro__title">{section.title}</h2>
      <p className="section-intro__subtitle">{section.subtitle}</p>
      <button className="btn-start" onClick={onStart} id="btn-start-section">
        <span>Começar</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
