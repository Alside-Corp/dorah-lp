'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { createLenis } from '@/shared/lib/lenis';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = createLenis();
    lenis.on('scroll', ScrollTrigger.update);
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  return children;
}
