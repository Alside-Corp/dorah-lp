import Lenis from 'lenis';

export function createLenis() {
  return new Lenis({ lerp: 0.08, duration: 1.2, smoothWheel: true, syncTouch: false });
}
