import React, { useState } from 'react';
import './QuestionCard.css';

// ── Sub-components ────────────────────────────────────────────────────────────

function SingleChoice({ question, value, onChange }) {
  const [otherText, setOtherText] = useState('');
  const [showOther, setShowOther] = useState(false);

  const handleSelect = (optVal) => {
    if (optVal === 'other') {
      setShowOther(true);
      onChange(otherText ? `other:${otherText}` : 'other');
    } else {
      setShowOther(false);
      onChange(optVal);
    }
  };

  const currentVal = value?.startsWith?.('other:') ? 'other' : value;

  return (
    <div className="options-grid">
      {question.options.map((opt, i) => (
        <button
          key={opt.value}
          id={`opt-${question.id}-${opt.value}`}
          className={`option-btn ${currentVal === opt.value ? 'option-btn--selected' : ''}`}
          onClick={() => handleSelect(opt.value)}
          style={{ animationDelay: `${i * 0.07}s` }}
          type="button"
        >
          {opt.icon && <span className="option-icon">{opt.icon}</span>}
          <span className="option-label">{opt.label}</span>
          {currentVal === opt.value && <span className="option-check">✓</span>}
        </button>
      ))}
      {showOther && (
        <div className="other-input-wrapper">
          <input
            className="text-input"
            type="text"
            placeholder={question.otherPlaceholder || 'Descreva sua resposta...'}
            value={otherText}
            onChange={(e) => {
              setOtherText(e.target.value);
              onChange(e.target.value ? `other:${e.target.value}` : 'other');
            }}
            autoFocus
          />
        </div>
      )}
      {question.note && (
        <p className="question-note">💡 {question.note}</p>
      )}
    </div>
  );
}

function MultiChoice({ question, value = [], onChange }) {
  const toggle = (optVal) => {
    if (value.includes(optVal)) {
      onChange(value.filter((v) => v !== optVal));
    } else {
      onChange([...value, optVal]);
    }
  };

  return (
    <div className="options-grid">
      <p className="multi-hint">Selecione todas que se aplicam</p>
      {question.options.map((opt, i) => (
        <button
          key={opt.value}
          id={`opt-${question.id}-${opt.value}`}
          className={`option-btn ${value.includes(opt.value) ? 'option-btn--selected' : ''}`}
          onClick={() => toggle(opt.value)}
          style={{ animationDelay: `${i * 0.07}s` }}
          type="button"
        >
          {opt.icon && <span className="option-icon">{opt.icon}</span>}
          <span className="option-label">{opt.label}</span>
          {value.includes(opt.value) && <span className="option-check">✓</span>}
        </button>
      ))}
    </div>
  );
}

function TextInput({ question, value, onChange }) {
  return (
    <div className="input-wrapper">
      <input
        id={`input-${question.id}`}
        className="text-input"
        type={question.inputType || 'text'}
        placeholder={question.placeholder || ''}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function TextareaInput({ question, value, onChange }) {
  return (
    <div className="input-wrapper">
      <textarea
        id={`textarea-${question.id}`}
        className="textarea-input"
        placeholder={question.placeholder || ''}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
      />
    </div>
  );
}

// ── QuestionCard ──────────────────────────────────────────────────────────────

export default function QuestionCard({ question, value, onChange, questionNumber, totalQuestions }) {
  const renderInput = () => {
    switch (question.type) {
      case 'single_choice':
        return <SingleChoice question={question} value={value} onChange={onChange} />;
      case 'multi_choice':
        return <MultiChoice question={question} value={value} onChange={onChange} />;
      case 'text':
        return <TextInput question={question} value={value} onChange={onChange} />;
      case 'textarea':
        return <TextareaInput question={question} value={value} onChange={onChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="question-card animate-fadeInUp">
      <div className="question-number">
        <span>{String(questionNumber).padStart(2, '0')}</span>
        <span className="question-number-divider">—</span>
        <span>{String(totalQuestions).padStart(2, '0')}</span>
      </div>

      <h2 className="question-title">
        {question.question}
        {question.required && <span className="required-badge">*</span>}
      </h2>

      <div className="question-content">
        {renderInput()}
      </div>
    </div>
  );
}
