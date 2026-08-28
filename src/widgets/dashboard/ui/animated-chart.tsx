import type { CSSProperties } from 'react';
import { dashboardContent } from '@/shared/config/landing-content';

export function AnimatedChart() {
  return (
    <div className="chart">
      {dashboardContent.chartValues.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className="metric-bar chart-bar"
          style={
            {
              '--bar-height': `${height}%`,
              '--bar-delay': `${index * 70}ms`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
