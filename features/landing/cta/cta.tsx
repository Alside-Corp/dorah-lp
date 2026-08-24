import { ArrowUpRight } from 'lucide-react';
import { SectionReveal } from '@/components/motion/section-reveal';
import { ctaContent } from '../content';

export function Cta() {
  return (
    <section id="contato" className="grain section-areia section-pad centered-section">
      <div className="container">
        <SectionReveal>
          <p className="eyebrow section-kicker-space">{ctaContent.eyebrow}</p>
          <h2 className="display cta-title centered-title">{ctaContent.title}</h2>
          <a href={ctaContent.href} className="button button-primary cta-button">
            {ctaContent.action} <ArrowUpRight size={17} />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
