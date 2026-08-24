import { SectionReveal } from '@/components/motion/section-reveal';
import { silentWindowContent } from '../content';
import { SilentChatVisual } from './silent-chat-visual';

export function SilentWindow() {
  return (
    <section className="section-papel section-pad">
      <div className="container split-grid split-grid-center">
        <SectionReveal>
          <p className="eyebrow section-kicker-space">{silentWindowContent.eyebrow}</p>
          <h2 className="display section-title">{silentWindowContent.title}</h2>
          <p className="section-copy copy-muted">{silentWindowContent.text}</p>
        </SectionReveal>
        <SectionReveal>
          <SilentChatVisual />
        </SectionReveal>
      </div>
    </section>
  );
}
