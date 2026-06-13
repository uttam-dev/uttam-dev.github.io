import React from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useReducedMotion } from 'framer-motion';

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full size-svh"
      style={{
        left: x,
        top: y,
        background: 'radial-gradient(circle, rgba(232,230,225,0.08) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        // transition: 'left 0.01s linear, top 0.01s linear' // smoothing for fast movement
      }}
    />
  );
}
