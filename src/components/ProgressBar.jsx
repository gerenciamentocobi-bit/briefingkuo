import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({ current, total, sectionTitle, sectionIcon }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress-wrapper">
      <div className="progress-header">
        <div className="progress-section-info">
          <span className="progress-section-icon">{sectionIcon}</span>
          <span className="progress-section-title">{sectionTitle}</span>
        </div>
        <div className="progress-counter">
          <span className="progress-current">{current}</span>
          <span className="progress-divider">/</span>
          <span className="progress-total">{total}</span>
        </div>
      </div>

      <div className="progress-track" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
        <div
          className="progress-fill"
          style={{ '--progress-width': `${percentage}%`, width: `${percentage}%` }}
        >
          <div className="progress-glow" />
        </div>
      </div>

      <div className="progress-steps">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`progress-dot ${i < current ? 'progress-dot--done' : ''} ${i === current - 1 ? 'progress-dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
