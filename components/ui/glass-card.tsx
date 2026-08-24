import { type HTMLAttributes, type ReactNode } from 'react';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: 'light' | 'dark';
};

export function GlassCard({ children, className = '', tone = 'light', ...props }: GlassCardProps) {
  return (
    <div className={`glass-card glass-card--${tone} ${className}`} {...props}>
      {children}
    </div>
  );
}
