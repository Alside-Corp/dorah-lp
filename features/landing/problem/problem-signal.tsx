'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, MessageCircle, Moon } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { problemContent } from '../content';

gsap.registerPlugin(ScrollTrigger);

const icons = [MessageCircle, Moon, Activity];

export function ProblemSignal() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.fromTo(
        '.problem-signal-node',
        { autoAlpha: 0, y: 26, scale: 0.94 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: 'none',
          stagger: 0.08,
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            end: 'top 48%',
            scrub: 0.8,
          },
        },
      );

      gsap.to('.problem-signal-orbit', {
        rotate: 360,
        duration: 24,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%',
      });

      gsap.to('.problem-signal-pulse', {
        scale: 1.14,
        autoAlpha: 0.18,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    }, element);

    return () => context.revert();
  }, []);

  return (
    <div ref={root} className="problem-signal" aria-hidden="true">
      <div className="problem-signal-orbit">
        <span className="problem-signal-pulse" />
        <span className="problem-signal-pulse" />
      </div>
      <div className="problem-signal-core">
        <span>fase silenciosa</span>
      </div>
      <div className="problem-signal-list">
        {problemContent.signals.map(({ label, value }, index) => {
          const Icon = icons[index];

          return (
          <div className="problem-signal-node" key={label}>
            <Icon size={17} />
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
          );
        })}
      </div>
    </div>
  );
}
