'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { silentWindowContent } from '../content';

gsap.registerPlugin(ScrollTrigger);

export function SilentChatVisual() {
  const root = useRef<HTMLDivElement>(null);
  const { chat } = silentWindowContent;

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          end: 'bottom 42%',
          scrub: 1.6,
        },
      });

      timeline
        .fromTo('.chat-window', { y: 24, scale: 0.985 }, { y: 0, scale: 1, ease: 'none' })
        .fromTo(
          '.chat-bubble-user',
          { autoAlpha: 0, x: -18, y: 10 },
          { autoAlpha: 1, x: 0, y: 0, ease: 'none' },
          '<0.18',
        )
        .fromTo(
          '.chat-bubble-reply',
          { autoAlpha: 0, x: 18, y: 10 },
          { autoAlpha: 1, x: 0, y: 0, ease: 'none' },
          '>-0.05',
        )
        .fromTo('.chat-caption', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, ease: 'none' }, '>-0.02');
    }, element);

    return () => context.revert();
  }, []);

  return (
    <div ref={root}>
      <GlassCard className="chat-card">
        <div className="chat-window">
          <div className="chat-window-top">
            <p className="chat-time">{chat.time}</p>
          </div>
          <p className="chat-bubble chat-bubble-user">{chat.user}</p>
          <p className="chat-bubble chat-bubble-reply">{chat.reply}</p>
        </div>
        <p className="chat-caption">{chat.caption}</p>
      </GlassCard>
    </div>
  );
}
