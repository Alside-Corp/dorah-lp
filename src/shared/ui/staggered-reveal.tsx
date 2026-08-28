'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, type ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

type StaggeredRevealProps = {
  children: ReactNode;
  className?: string;
  itemSelector: string;
  fillSelector?: string;
};

export function StaggeredReveal({
  children,
  className,
  itemSelector,
  fillSelector,
}: StaggeredRevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      const fills = fillSelector ? element.querySelectorAll<HTMLElement>(fillSelector) : [];
      if (fills.length) {
        gsap.set(fills, { scaleX: 0, transformOrigin: 'left center' });
      }
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      });

      timeline.from(element.querySelectorAll(itemSelector), {
        autoAlpha: 0,
        duration: 0.45,
        ease: 'power2.out',
        stagger: 0.1,
        y: 18,
      });

      if (fills.length) {
        timeline.to(
          fills,
          { duration: 0.55, ease: 'power2.out', scaleX: 1, stagger: 0.1 },
          '-=0.22',
        );
      }
    }, element);

    return () => context.revert();
  }, [fillSelector, itemSelector]);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
