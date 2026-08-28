import { SectionReveal } from '@/shared/ui/section-reveal';
import { problemContent } from '@/shared/config/landing-content';
import { ProblemSignal } from './problem-signal';

const problemStats = [
  { value: '534 mil', label: 'afastamentos por saúde mental em 2025 (recorde)' },
  { value: '196 dias', label: 'de duração média — o dobro dos demais' },
  { value: '5 anos', label: 'de alta consecutiva nos afastamentos' },
  { value: '1 em 3', label: 'pessoas sofrem em silêncio' },
];

export function Problem() {
  return (
    <section id="problema" className="section-dark section-pad">
      <div className="container problem-layout">
        <SectionReveal className="problem-copy">
          <p className="eyebrow text-gelo">{problemContent.eyebrow}</p>
          <h2 className="display section-title">{problemContent.title}</h2>
          <p className="section-copy copy-muted-light">{problemContent.text}</p>
        </SectionReveal>
        <div className="problem-aside">
          <ProblemSignal />
        </div>
        <div className="stats-grid">
          {problemStats.map((stat) => (
            <div className="stat-cell" key={stat.label}>
              <b className="stat-number">{stat.value}</b>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
