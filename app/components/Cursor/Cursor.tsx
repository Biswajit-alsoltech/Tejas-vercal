'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const dropletRef = useRef<HTMLDivElement>(null);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (dropletRef.current) {
        dropletRef.current.style.left = `${clientX}px`;
        dropletRef.current.style.top = `${clientY}px`;
      }

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, .clickable, input[type="submit"]');
      setIsHoveringClickable(!!clickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={dropletRef}
      className={`${styles.droplet} ${isHoveringClickable ? styles.active : ''}`}
    ></div>
  );
}
