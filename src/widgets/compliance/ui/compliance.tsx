import { Check } from 'lucide-react';
import { SectionReveal } from '@/shared/ui/section-reveal';
import { StaggeredReveal } from '@/shared/ui/staggered-reveal';
import { complianceContent } from '@/shared/config/landing-content';

export function Compliance() {
  return (
    <section id="privacidade" className="section-papel section-pad">
      <div className="container compliance-layout">
        <SectionReveal>
          <p className="eyebrow section-kicker-space">{complianceContent.eyebrow}</p>
          <h2 className="display section-title">{complianceContent.title}</h2>
        </SectionReveal>
        <StaggeredReveal className="commitment-panel" itemSelector=".commitment-item">
          <p className="commitment-intro">{complianceContent.intro}</p>
          <ul className="commitment-list">
            {complianceContent.commitments.map((commitment) => (
              <li className="commitment-item" key={commitment.title}>
                <span className="commitment-icon">
                  <Check size={17} />
                </span>
                <div>
                  <strong>{commitment.title}</strong>
                  <p>{commitment.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </StaggeredReveal>
      </div>
    </section>
  );
}
