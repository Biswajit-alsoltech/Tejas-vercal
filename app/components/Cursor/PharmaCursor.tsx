'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import './PharmaCursor.css';

const PharmaCursor = () => {
  const pathname = usePathname(); // Track route changes

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    class PharmaCursorEffect {
      cursor: HTMLElement;
      capsule: HTMLElement;
      lastX = 0;
      lastY = 0;
      velocityX = 0;
      currentLean = 0;
      distanceMoved = 0;
      colorIndex = 0;
      moveTimeout: any;
      currentGlowColor = '';
      isHovering = false;

      mouseMoveHandler: (e: MouseEvent) => void;
      handleClick: () => void;
      handleMouseUp: () => void;

      colors = [
        { top: '#ff6b6b', glow: 'rgba(255,107,107,0.8)' },
        { top: '#4ecdc4', glow: 'rgba(78,205,196,0.8)' },
        { top: '#2ed573', glow: 'rgba(46,213,115,0.8)' },
        { top: '#a55eea', glow: 'rgba(165,94,234,0.8)' },
        { top: '#ff9f43', glow: 'rgba(255,159,67,0.8)' },
        { top: '#fd79a8', glow: 'rgba(253,121,168,0.8)' },
      ];

      trailSizes = ['small', 'medium', 'tiny'];

      constructor() {
        this.cursor = document.getElementById('cursor')!;
        this.capsule = this.cursor.querySelector('.cursor-capsule')!;

        this.updateCursorColor();

        this.mouseMoveHandler = (e: MouseEvent) => {
          this.cursor.style.left = `${e.clientX}px`;
          this.cursor.style.top = `${e.clientY}px`;
          this.handleMovement(e.clientX, e.clientY);
        };

        this.handleClick = this.onClick.bind(this);
        this.handleMouseUp = this.onMouseUp.bind(this);

        document.addEventListener('mousemove', this.mouseMoveHandler);
        document.addEventListener('mousedown', this.handleClick);
        document.addEventListener('mouseup', this.handleMouseUp);

        this.attachHoverListeners();

        setInterval(() => {
          this.colorIndex = (this.colorIndex + 1) % this.colors.length;
          this.updateCursorColor();
        }, 2500);
      }

      attachHoverListeners() {
  document
    .querySelectorAll(' input, select, textarea, form, form *')
    .forEach((el) => {
      el.addEventListener('mouseenter', () => {
        this.cursor.style.display = 'none'; // Hide custom cursor
      });
      el.addEventListener('mouseleave', () => {
        this.cursor.style.display = 'block'; // Show again
      });
    });
}


      updateCursorColor() {
        const color = this.colors[this.colorIndex];
        this.capsule.style.background = `linear-gradient(180deg, ${color.top} 0%, ${color.top} 50%, #ffffff 50%, #ffffff 100%)`;
        this.currentGlowColor = color.glow;
      }

      handleMovement(x: number, y: number) {
        if (this.lastX !== 0) {
          const dist = Math.hypot(x - this.lastX, y - this.lastY);
          this.distanceMoved += dist;
          this.velocityX = x - this.lastX;

          const leanAngle = Math.max(-30, Math.min(30, this.velocityX * 1.2));
          this.capsule.style.transform = `rotate(${leanAngle}deg)`;
          this.currentLean = leanAngle;

          if (this.distanceMoved >= 5) {
            const particleCount = this.isHovering ? 2 : 1;
            for (let i = 0; i < particleCount; i++) {
              this.spawnTrail(this.lastX, this.lastY);
            }
            if (Math.random() > 0.8) this.spawnSparkle(this.lastX, this.lastY);
            this.distanceMoved = 0;
          }
        }

        this.lastX = x;
        this.lastY = y;

        clearTimeout(this.moveTimeout);
        this.moveTimeout = setTimeout(() => {
          this.capsule.style.transform = 'rotate(0deg)';
        }, 100);
      }

      spawnTrail(x: number, y: number) {
        const trail = document.createElement('div');

        // Random color from palette
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];

        // Decide pill type
        const isTablet = Math.random() < 0.4; // 40% chance tablet, 60% capsule

        if (isTablet) {
          // Solid color tablet (circle)
          trail.className = 'trail-pill trail-tablet';
          trail.style.background = randomColor.top;
        } else {
          // Gradient capsule
          const sizeClass = this.trailSizes[Math.floor(Math.random() * this.trailSizes.length)];
          trail.className = `trail-pill trail-capsule trail-capsule-${sizeClass}`;
          trail.style.background = `linear-gradient(180deg, ${randomColor.top} 0%, ${randomColor.top} 50%, #ffffff 50%, #ffffff 100%)`;
          const trailRotation = this.currentLean + (Math.random() - 0.5) * 15;
          trail.style.setProperty('--trail-rotation', `${trailRotation}deg`);
        }

        // Random position offset
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 12;
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        trail.style.left = `${x + offsetX}px`;
        trail.style.top = `${y + offsetY}px`;

        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 900);
      }


      spawnSparkle(x: number, y: number) {
        const sparkle = document.createElement('div');
        sparkle.className = 'trail-sparkle';

        const offsetX = (this.velocityX > 0 ? 1 : -1) * (10 + Math.random() * 10);
        const offsetY = (Math.random() - 0.5) * 20;

        sparkle.style.left = `${x + offsetX}px`;
        sparkle.style.top = `${y + offsetY}px`;

        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 700);
      }

      onClick() {
        this.cursor.classList.add('clicking');
        this.cursor.style.setProperty('--glow-color', this.currentGlowColor);

        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            this.spawnTrail(this.lastX, this.lastY);
            if (i % 2 === 0) this.spawnSparkle(this.lastX, this.lastY);
          }, i * 30);
        }
      }

      onMouseUp() {
        this.cursor.classList.remove('clicking');
      }

      handleHover(isHovering: boolean) {
        this.isHovering = isHovering;
        if (isHovering) {
          this.cursor.classList.add('hovered');
          this.cursor.style.setProperty('--glow-color', this.currentGlowColor);
        } else {
          this.cursor.classList.remove('hovered');
        }
      }


      cleanup() {
        document.removeEventListener('mousemove', this.mouseMoveHandler);
        document.removeEventListener('mousedown', this.handleClick);
        document.removeEventListener('mouseup', this.handleMouseUp);
        this.cursor.remove();
      }
    }

    // Create cursor element if it doesn't exist
    if (!document.getElementById('cursor')) {
      const cursor = document.createElement('div');
      cursor.id = 'cursor';
      cursor.className = 'cursor';
      cursor.innerHTML = '<div class="cursor-capsule"></div>';
      document.body.appendChild(cursor);
    }

    const cursorEffect = new PharmaCursorEffect();

    return () => {
      cursorEffect.cleanup();
    };
  }, []);

  // 🔄 On every route change, rebind hover listeners
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    cursor.classList.remove('hovered');
    cursor.classList.remove('clicking');

    const elements = document.querySelectorAll(
      'a, button, input, select, textarea, [data-cursor-hover]'
    );

    const enter = () => cursor.classList.add('hovered');
    const leave = () => cursor.classList.remove('hovered');

    elements.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [pathname]);

  return null;
};

export default PharmaCursor;
