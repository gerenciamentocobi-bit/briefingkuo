import React from 'react';
import { Mail, Printer, Sparkles, CheckCircle2 } from 'lucide-react';
import './ThankYou.css';

export default function ThankYou({ answers, quizData }) {
  // Build a summary of answers for display
  const allQuestions = quizData.sections.flatMap((s) => s.questions);

  const formatTextAnswer = (q, answer) => {
    if (!answer || (Array.isArray(answer) && answer.length === 0)) return '—';
    if (q.type === 'single_choice') {
      if (typeof answer === 'string' && answer.startsWith('other:')) return answer.replace('other:', '');
      const opt = q.options?.find((o) => o.value === answer);
      return opt ? opt.label : answer;
    }
    if (q.type === 'multi_choice') {
      return answer.map((v) => {
        const opt = q.options?.find((o) => o.value === v);
        return opt ? opt.label : v;
      }).join(', ');
    }
    return answer;
  };

  const formatUIAnswer = (q, answer) => {
    if (!answer || (Array.isArray(answer) && answer.length === 0)) return '—';
    if (q.type === 'single_choice') {
      if (typeof answer === 'string' && answer.startsWith('other:')) return answer.replace('other:', '');
      const opt = q.options?.find((o) => o.value === answer);
      return opt ? (
        <span className="summary-ans-icon">
          {opt.icon && <span className="icon-shrink">{opt.icon}</span>}
          {opt.label}
        </span>
      ) : answer;
    }
    if (q.type === 'multi_choice') {
      return (
        <div className="summary-ans-multi">
          {answer.map((v) => {
            const opt = q.options?.find((o) => o.value === v);
            return opt ? (
              <span key={v} className="summary-ans-tag">
                {opt.icon && <span className="icon-shrink">{opt.icon}</span>}
                {opt.label}
              </span>
            ) : <span key={v} className="summary-ans-tag">{v}</span>;
          })}
        </div>
      );
    }
    return answer;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Briefing de Site Preenchido - ' + (answers.q7 || 'Cliente'));
    const body = encodeURIComponent(
      allQuestions
        .map((q) => `${q.question}\n→ ${formatTextAnswer(q, answers[q.id])}`)
        .join('\n\n')
    );
    window.open(`mailto:lukas.sandresp@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="thankyou animate-scaleIn">
      <div className="thankyou__icon">
        <Sparkles size={64} strokeWidth={1} color="var(--color-bordo)" />
      </div>

      <div className="thankyou__badge">Briefing Concluído!</div>

      <h1 className="thankyou__title">
        Incrível, obrigado!
      </h1>

      <p className="thankyou__subtitle">
        Suas respostas foram registradas com sucesso. Em breve nossa equipe entrará em contato para dar início ao seu projeto.
      </p>

      {/* Summary Card */}
      <div className="thankyou__summary">
        <h3 className="summary__title">
          <CheckCircle2 size={18} /> Resumo do seu Briefing
        </h3>
        <div className="summary__list">
          {allQuestions
            .filter((q) => answers[q.id] && answers[q.id] !== '' &&
              !(Array.isArray(answers[q.id]) && answers[q.id].length === 0))
            .map((q) => (
              <div key={q.id} className="summary__item">
                <span className="summary__question">{q.question}</span>
                <span className="summary__answer">{formatUIAnswer(q, answers[q.id])}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="thankyou__actions">
        <button className="btn-action btn-action--primary" onClick={handleEmail} id="btn-send-email">
          <Mail size={18} />
          <span>Enviar por E-mail</span>
        </button>
        <button className="btn-action btn-action--secondary" onClick={handlePrint} id="btn-print">
          <Printer size={18} />
          <span>Imprimir / Salvar PDF</span>
        </button>
      </div>

      <div className="thankyou__footer">
        <p>Desenvolvido com ❤️ por</p>
        <strong>Kuo Agência</strong>
      </div>
    </div>
  );
}
