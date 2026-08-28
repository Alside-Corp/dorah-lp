import { SectionReveal } from '@/shared/ui/section-reveal';
import { ctaContent } from '@/shared/config/landing-content';
import { ContactForm } from './contact-form';

export function CallToAction() {
  return (
    <section id="contato" className="relative overflow-hidden bg-areia py-32 max-sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-8 max-sm:px-4">
        <SectionReveal className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="text-left">
            <p className="mb-8 text-sm font-bold tracking-[0.16em] text-gelo-profundo uppercase">
              {ctaContent.eyebrow}
            </p>
            <h2 className="max-w-2xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] font-medium tracking-[-0.035em]">
              {ctaContent.title}
            </h2>
          </div>

          <form name="solicitar-contato" method="POST" data-netlify="true" hidden>
            <input type="hidden" name="form-name" value="solicitar-contato" />
            <input name="name" />
            <input name="email" />
            <input name="phone" />
            <input name="company" />
            <input name="bot-field" />
            <input name="subject" />
          </form>

          <ContactForm />
        </SectionReveal>
      </div>
    </section>
  );
}
