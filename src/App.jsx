import React, { useState, useCallback, useMemo } from 'react';
import { quizData } from './data/quizData.jsx';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import SectionIntro from './components/SectionIntro';
import ThankYou from './components/ThankYou';
import { Diamond } from 'lucide-react';
import './App.css';

// ── Flatten all questions with their section context ──────────────────────────
function buildSteps(data) {
  const steps = [];
  data.sections.forEach((section) => {
    // Add section intro step
    steps.push({ type: 'section_intro', section });
    // Add each question step
    section.questions.forEach((question) => {
      steps.push({ type: 'question', section, question });
    });
  });
  return steps;
}

const STEPS = buildSteps(quizData);
const TOTAL_QUESTIONS = quizData.sections.reduce((acc, s) => acc + s.questions.length, 0);

// ── Welcome Screen ────────────────────────────────────────────────────────────
function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome animate-scaleIn">
      <div className="welcome__top-logo">
        <img src="/logo.png" alt="Kuo Agência" className="welcome__top-img" />
      </div>

      <div className="welcome__content">
        <h1 className="welcome__title">
          Vamos criar algo{' '}
          <span className="title-highlight">extraordinário</span>{' '}
          juntos.
        </h1>

        <p className="welcome__subtitle">
          {quizData.subtitle}
        </p>

        <div className="welcome__stats">
          <div className="stat">
            <span className="stat-number">{quizData.sections.length}</span>
            <span className="stat-label">Seções</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">{TOTAL_QUESTIONS}</span>
            <span className="stat-label">Perguntas</span>
          </div>
        </div>

        <button className="btn-begin" onClick={onStart} id="btn-begin-quiz">
          <span>Iniciar Briefing</span>
          <div className="btn-begin__arrow">→</div>
        </button>

        <p className="welcome__disclaimer">
          Suas informações são seguras e utilizadas apenas para o desenvolvimento do seu projeto.
        </p>
      </div>

      {/* Decorative orbs */}
      <div className="orb orb--1" />
      <div className="orb orb--2" />
      <div className="orb orb--3" />
    </div>
  );
}

// ── Navigation Buttons ────────────────────────────────────────────────────────
function NavButtons({ onBack, onNext, canGoBack, canGoNext, isLast, currentAnswer, isRequired }) {
  const hasAnswer = currentAnswer !== undefined && currentAnswer !== '' &&
    !(Array.isArray(currentAnswer) && currentAnswer.length === 0);
  const nextDisabled = isRequired && !hasAnswer;

  return (
    <div className="nav-buttons">
      {canGoBack && (
        <button className="btn-nav btn-nav--back" onClick={onBack} id="btn-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M3 8L8 3M3 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Anterior</span>
        </button>
      )}

      <button
        className={`btn-nav btn-nav--next ${nextDisabled ? 'btn-nav--disabled' : ''} ${isLast ? 'btn-nav--submit' : ''}`}
        onClick={nextDisabled ? undefined : onNext}
        disabled={nextDisabled}
        id={isLast ? 'btn-submit' : 'btn-next'}
      >
        <span>{isLast ? 'Enviar Briefing 🚀' : 'Próxima'}</span>
        {!isLast && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [phase, setPhase] = useState('welcome'); // 'welcome' | 'quiz' | 'done'
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState('forward'); // for animation

  const currentStep = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;

  // Count questions answered so far for progress bar
  const answeredCount = useMemo(() => {
    let count = 0;
    STEPS.forEach((step, idx) => {
      if (idx <= stepIndex && step.type === 'question' && answers[step.question.id] !== undefined) {
        count++;
      }
    });
    return count;
  }, [stepIndex, answers]);

  // Current question number (among all questions)
  const currentQuestionNumber = useMemo(() => {
    let count = 0;
    for (let i = 0; i <= stepIndex; i++) {
      if (STEPS[i].type === 'question') count++;
    }
    return count;
  }, [stepIndex]);

  const handleAnswer = useCallback((questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const goNext = useCallback(() => {
    if (isLastStep) {
      setPhase('done');
      return;
    }
    setDirection('forward');
    setStepIndex((i) => i + 1);
  }, [isLastStep]);

  const goBack = useCallback(() => {
    if (stepIndex === 0) {
      setPhase('welcome');
      return;
    }
    setDirection('back');
    setStepIndex((i) => i - 1);
  }, [stepIndex]);

  // ── Render ──────────────────────────────────────────────────────────────────
  if (phase === 'welcome') {
    return (
      <div className="app-container">
        <WelcomeScreen onStart={() => setPhase('quiz')} />
      </div>
    );
  }

  if (phase === 'done') {
    return (
      <div className="app-container">
        <div className="quiz-shell">
          <ThankYou answers={answers} quizData={quizData} />
        </div>
      </div>
    );
  }

  // Quiz phase
  return (
    <div className="app-container">
      {/* ── Progress Bar ── */}
      <div className="quiz-progress">
        <div className="quiz-header-logo">
          <img src="/logo.png" alt="Agência KUO" />
        </div>
        <ProgressBar
          current={currentQuestionNumber}
          total={TOTAL_QUESTIONS}
          sectionTitle={currentStep.section.title}
          sectionIcon={currentStep.section.icon}
        />
      </div>

      {/* ── Quiz Content ── */}
      <div className="quiz-shell">
        {currentStep.type === 'section_intro' ? (
          <SectionIntro
            section={currentStep.section}
            onStart={goNext}
          />
        ) : (
          <>
            <QuestionCard
              key={currentStep.question.id}
              question={currentStep.question}
              value={answers[currentStep.question.id]}
              onChange={(val) => handleAnswer(currentStep.question.id, val)}
              questionNumber={currentQuestionNumber}
              totalQuestions={TOTAL_QUESTIONS}
            />

            <NavButtons
              onBack={goBack}
              onNext={goNext}
              canGoBack={stepIndex > 0}
              canGoNext={true}
              isLast={isLastStep}
              currentAnswer={answers[currentStep.question.id]}
              isRequired={currentStep.question.required}
            />
          </>
        )}
      </div>

      {/* ── Kuo Branding ── */}
      <div className="quiz-branding">
        <span>Briefing de site para</span>
        <strong>Agência KUO</strong>
      </div>
    </div>
  );
}
