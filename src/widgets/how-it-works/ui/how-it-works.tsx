import { SectionReveal } from '@/shared/ui/section-reveal';
import { InteractiveCard } from '@/shared/ui/interactive-card';
import { howItWorksContent } from '@/shared/config/landing-content';

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-papel section-pad">
      <div className="container">
        <SectionReveal>
          <p className="eyebrow section-kicker-space">{howItWorksContent.eyebrow}</p>
          <h2 className="display section-title">{howItWorksContent.title}</h2>
        </SectionReveal>
        <div className="step-grid">
          {howItWorksContent.steps.map((step) => (
            <SectionReveal key={step.number}>
              <InteractiveCard className={`interactive-card step-card ${step.tone}`}>
                <p className="step-number">{step.number}</p>
                <div className="step-rule" />
                <h3 className="step-title">{step.title}</h3>
                <p className="step-copy">{step.text}</p>
              </InteractiveCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
