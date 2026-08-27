import { SectionReveal } from '@/components/motion/section-reveal';
import { dashboardContent } from '../content';
import { AnimatedChart } from './animated-chart';

const metrics = [
  ['72%', 'adesão'],
  ['-18%', 'absenteísmo'],
  ['8.6', 'índice de cuidado'],
  ['-24%', 'risco de afastamento'],
];
const areas = [
  ['Operações', '72%', 'Estável', 'stable'],
  ['Comercial', '48%', 'Atenção', 'attention'],
  ['Tecnologia', '84%', 'Melhora', 'better'],
  ['Atendimento', '55%', 'Atenção', 'attention'],
];

export function Dashboard() {
  return (
    <section id="rh" className="section-dark section-pad">
      <div className="container split-grid split-grid-dashboard">
        <SectionReveal>
          <p className="eyebrow section-kicker-space text-gelo">{dashboardContent.eyebrow}</p>
          <h2 className="display section-title">{dashboardContent.title}</h2>
          <p className="section-copy copy-muted-light">{dashboardContent.text}</p>
        </SectionReveal>
        <SectionReveal className="glass-card glass-card--light dashboard-card">
          <div className="dashboard-head">
            <p className="dashboard-panel-title">{dashboardContent.panelTitle}</p>
            <span className="dashboard-period">{dashboardContent.period}</span>
          </div>
          <div className="dashboard-metrics dashboard-metrics-four">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <p className="metric-value">{value}</p>
                <p className="metric-label">{label}</p>
              </div>
            ))}
          </div>
          <p className="chart-title">Evolução do índice de cuidado</p>
          <AnimatedChart />
          <div className="area-trend">
            <p className="area-trend-title">Tendência por área</p>
            {areas.map(([area, width, status, tone]) => (
              <div className={`area-row area-row-${tone}`} key={area}>
                <span className="area-name">{area}</span>
                <span className="area-track">
                  <span style={{ width }} />
                </span>
                <span className={`area-status area-status-${tone}`}>{status}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
