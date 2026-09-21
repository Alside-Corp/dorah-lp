'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useReducedMotion } from '@/shared/lib/use-reduced-motion';

export function MotionCard({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className={className}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      animate={reduceMotion ? { y: 0, scale: 1 } : undefined}
      transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}
