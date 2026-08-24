import { ArrowUpRight } from 'lucide-react';
import { SectionReveal } from '@/components/motion/section-reveal';
import { heroContent } from '../content';
import { HeroGlassVisual } from './hero-glass-visual';

export function Hero() {
  return (
    <section id="inicio" className="grain surface-aurora section-areia hero-section">
      <div className="container hero-shell">
        <SectionReveal className="hero-copy">
          <p className="eyebrow section-kicker-space">{heroContent.eyebrow}</p>
          <h1 className="display hero-title">
            {heroContent.title} <em className="hero-title-emphasis">{heroContent.emphasis}</em>
          </h1>
          <p className="hero-text">{heroContent.text}</p>
          <div className="hero-actions">
            <a href="#contato" className="button button-primary">
              {heroContent.primaryAction} <ArrowUpRight size={16} />
            </a>
            <a href="#como-funciona" className="button button-secondary">
              {heroContent.secondaryAction}
            </a>
          </div>
          <p className="hero-note">{heroContent.note}</p>
        </SectionReveal>
        <HeroGlassVisual />
      </div>
    </section>
  );
}
