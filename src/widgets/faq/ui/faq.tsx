import { ChevronDown } from 'lucide-react';
import { SectionReveal } from '@/shared/ui/section-reveal';
import { StaggeredReveal } from '@/shared/ui/staggered-reveal';
import { faqItems } from '../model/content';

export function Faq() {
  return (
    <section
      id="perguntas-frequentes"
      className="section-papel section-pad"
      aria-labelledby="faq-title"
    >
      <div className="container faq-layout">
        <SectionReveal className="faq-intro">
          <p className="eyebrow section-kicker-space">Perguntas frequentes</p>
          <h2 id="faq-title" className="display section-title">
            Clareza também é <em className="faq-emphasis">cuidado.</em>
          </h2>
          <p className="section-copy copy-muted">
            Entenda como a Dorah apoia quem cuida e protege quem conversa.
          </p>
        </SectionReveal>
        <StaggeredReveal className="faq-list" itemSelector=".faq-item">
          {faqItems.map((item) => (
            <details className="faq-item" name="dorah-faq" key={item.question}>
              <summary className="faq-question">
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  );
}
