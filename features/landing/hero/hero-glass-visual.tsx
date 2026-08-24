'use client';

import { gsap } from 'gsap';
import { ShieldCheck } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { heroContent } from '../content';

export function HeroGlassVisual() {
  const element = useRef<HTMLDivElement>(null);
  const { card } = heroContent;

  useLayoutEffect(() => {
    const target = element.current;
    if (!target) return;

    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.fromTo(
        target,
        { autoAlpha: 0, x: 40, scale: 0.94 },
        { autoAlpha: 1, x: 0, scale: 1, duration: 1.1, delay: 0.35, ease: 'power3.out' },
      );

      gsap.to(target, {
        y: -12,
        duration: 3.2,
        delay: 1.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
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

        <div className="hero-care-message">
          <span className="hero-message-time">{card.time}</span>
          <p>{card.message}</p>
        </div>

        <p className="hero-care-note">
          <span />
          {card.note}
        </p>

        <div className="hero-privacy-strip">
          <ShieldCheck size={15} />
          {card.privacy}
        </div>
      </GlassCard>
    </div>
  );
}
