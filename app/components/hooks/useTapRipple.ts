// hooks/useTapRipple.ts
import { useEffect } from 'react';

const useTapRipple = () => {
  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) return;

    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;

      const ripple = document.createElement('span');
      ripple.className = 'tap-ripple';
      ripple.style.left = `${touch.clientX}px`;
      ripple.style.top = `${touch.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    document.addEventListener('touchstart', handleTouch);
    return () => document.removeEventListener('touchstart', handleTouch);
  }, []);
};

export default useTapRipple;
