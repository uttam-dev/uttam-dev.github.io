import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, textVariant } from '../../lib/motion';

export function AnimatedText({ text, className, as: Component = 'div', style }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className} style={style}>{text}</Component>;
  }

  // Split text by lines (e.g. separated by \n or array of strings)
  const lines = Array.isArray(text) ? text : text.split('\n');

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className={`${className || ''} overflow-hidden pb-2 -mb-2`}
      style={style}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden pb-2 -mb-2">
          <motion.div variants={textVariant} className="inline-block pb-1">
            {/* If line is empty string, render a non-breaking space to keep layout */}
            {line === '' ? '\u00A0' : line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
