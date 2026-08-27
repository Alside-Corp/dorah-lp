import { SectionReveal } from '@/components/motion/section-reveal';
import { StaggeredReveal } from '@/components/motion/staggered-reveal';
import { psychologistContent } from '../content';

const themes = [
  ['Sobrecarga no trabalho', '84%'],
  ['Sono / descanso', '60%'],
  ['Motivação', '40%'],
];

export function Psychologist() {
  return (
    <section className="section-gelo section-pad">
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
        <StaggeredReveal
          className="weekly-summary-card"
          itemSelector=".weekly-summary-stats > div, .theme-bar-row, .pattern-note"
          fillSelector=".theme-bar-fill"
        >
          <div className="weekly-summary-head">
            <div>
              <p className="weekly-summary-title">Resumo da semana</p>
              <span className="weekly-summary-subtitle">Pessoa acompanhada · 12–18 mai</span>
            </div>
            <span className="timeline-status">Contexto clínico</span>
          </div>
          <div className="weekly-summary-stats">
            <div>
              <b>5</b>
              <span>
                conversas
                <br />
                na semana
              </span>
            </div>
            <div>
              <b>3</b>
              <span>
                temas
                <br />
                recorrentes
              </span>
            </div>
            <div>
              <b>↑</b>
              <span>
                frequência
                <br />
                vs.
                <br /> semana anterior
              </span>
            </div>
          </div>
          <p className="theme-bars-title">Temas que apareceram</p>
          <div className="theme-bars">
            {themes.map(([label, value], index) => (
              <div className="theme-bar-row" key={label}>
                <div className="theme-bar-label">
                  <span>{label}</span>
                </div>
                <div className="theme-bar-track">
                  <span
                    className={`theme-bar-fill theme-bar-fill-${index + 1}`}
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pattern-note">
            <p>
              <strong>Padrão observado:</strong>Sobrecarga aparece com mais força nas segundas e
              terças. Leitura sugerida ao psicólogo.
            </p>
          </div>
        </StaggeredReveal>
      </div>
    </section>
  );
}
