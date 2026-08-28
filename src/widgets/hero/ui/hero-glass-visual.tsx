'use client';

import { gsap } from 'gsap';
import { ShieldCheck } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { GlassCard } from '@/shared/ui/glass-card';
import { heroContent } from '@/shared/config/landing-content';

export function HeroGlassVisual() {
  const element = useRef<HTMLDivElement>(null);
  const { card } = heroContent;

  useLayoutEffect(() => {
    const target = element.current;
    if (!target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        target,
        { autoAlpha: 0, x: 40, scale: 0.94 },
        { autoAlpha: 1, x: 0, scale: 1, duration: 1.1, delay: 0.35, ease: 'power3.out' },
      );
    }, target);
    return () => context.revert();
  }, []);

  return (
    <div ref={element} className="hero-glass-visual">
      <GlassCard className="hero-care-card" tone="dark">
        <div className="hero-glass-header">
          <div>
            <p>{card.title}</p>
            <span>{card.subtitle}</span>
          </div>
          <span className="private-pill">
            <ShieldCheck size={14} />
            {card.status}
          </span>
        </div>
        <div className="hero-conversation">
          <span className="hero-message-time">{card.time}</span>
          {card.messages.map((message, index) => (
            <p
              className={`hero-bubble hero-bubble-${message.sender}`}
              key={`${message.sender}-${index}`}
            >
              {message.text}
            </p>
          ))}
        </div>
        <div className="hero-privacy-strip">
          <ShieldCheck size={15} />
          {card.privacy}
        </div>
      </GlassCard>
    </div>
  );
}
