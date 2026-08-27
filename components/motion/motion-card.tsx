'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function MotionCard({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.article className={className} whileHover={{ y: -8, scale: 1.015 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.article>;
}
