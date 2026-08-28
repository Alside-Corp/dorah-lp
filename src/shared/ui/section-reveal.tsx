'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, type ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const element = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const target = element.current;
    if (!target) return;

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduceMotion) {
        gsap.set(target, { clearProps: 'all' });
        return;
      }

      gsap.fromTo(
        target,
        { autoAlpha: 0.15, y: 56, scale: 0.985 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: target,
            start: 'top 92%',
            end: 'top 58%',
            scrub: 0.85,
          },
        },
      );
    }, target);

    return () => context.revert();
  }, []);

  return (
    <div ref={element} className={className}>
      {children}
    </div>
  );
}
