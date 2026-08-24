import { SectionReveal } from '@/components/motion/section-reveal';
import { psychologistContent } from '../content';

export function Psychologist() {
  return (
    <section className="section-papel section-pad">
      <div className="container split-grid split-grid-psychologist">
        <SectionReveal>
          <p className="eyebrow section-kicker-space">{psychologistContent.eyebrow}</p>
          <h2 className="display section-title">
            {psychologistContent.titleLines.map((line) => (
              <span key={line} className="title-line">
                {line}
              </span>
            ))}
          </h2>
          <p className="section-copy copy-muted">{psychologistContent.text}</p>
        </SectionReveal>
        <SectionReveal className="timeline-card">
          <div className="timeline-head">
            <p className="timeline-label">{psychologistContent.timelineLabel}</p>
            <span className="timeline-status">{psychologistContent.status}</span>
          </div>
          <div className="timeline-list">
            {psychologistContent.timeline.map((item) => (
              <div className="timeline-item" key={item.date}>
                <span className="timeline-dot" />
                <div>
                  <div className="timeline-item-head">
                    <b>{item.date}</b>
                    <span>{item.tone}</span>
                  </div>
                  <p className="timeline-copy">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
