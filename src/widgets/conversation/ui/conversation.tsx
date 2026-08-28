import { SectionReveal } from '@/shared/ui/section-reveal';
import { conversationContent } from '@/shared/config/landing-content';

export function Conversation() {
  return (
    <section className="section-areia conversation-section section-pad centered-section">
      <div className="container">
        <SectionReveal>
          <p className="eyebrow section-kicker-space">{conversationContent.eyebrow}</p>
          <blockquote className="display section-title centered-title">
            {conversationContent.quote}
          </blockquote>
          <p className="section-copy copy-muted centered-copy">{conversationContent.text}</p>
        </SectionReveal>
      </div>
    </section>
  );
}
