import { SectionReveal } from '@/components/motion/section-reveal';
import { dashboardContent } from '../content';
import { AnimatedChart } from './animated-chart';

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
            <p className="font-medium">{dashboardContent.panelTitle}</p>
            <span className="dashboard-period">{dashboardContent.period}</span>
          </div>
          <div className="dashboard-metrics">
            {dashboardContent.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
          <AnimatedChart />
        </SectionReveal>
      </div>
    </section>
  );
}
