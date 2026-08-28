import { SectionReveal } from '@/shared/ui/section-reveal';
import { ctaContent } from '@/shared/config/landing-content';
import { ContactForm } from './contact-form';

export function CallToAction() {
  return (
    <section id="contato" className="contact-section section-areia section-pad">
      <div className="container">
        <SectionReveal className="contact-layout">
          <div className="contact-copy">
            <p className="eyebrow contact-eyebrow">{ctaContent.eyebrow}</p>
            <h2 className="display contact-title">{ctaContent.title}</h2>
          </div>
          <ContactForm />
        </SectionReveal>
      </div>
    </section>
  );
}
