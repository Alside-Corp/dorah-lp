import { SectionReveal } from '@/components/motion/section-reveal';
import { problemContent } from '../content';
import { ProblemSignal } from './problem-signal';

export function Problem() {
  return (
    <section id="problema" className="section-dark section-pad">
      <div className="container split-grid split-grid-problem">
        <div className="problem-aside">
          <p className="eyebrow text-gelo">{problemContent.eyebrow}</p>
          <ProblemSignal />
        </div>
        <SectionReveal>
          <h2 className="display section-title">{problemContent.title}</h2>
          <p className="section-copy copy-muted-light">{problemContent.text}</p>
          <div className="stats-grid">
            {problemContent.stats.map((stat) => (
              <div className="stat-cell" key={stat.label}>
                <b className="stat-number">{stat.value}</b>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
