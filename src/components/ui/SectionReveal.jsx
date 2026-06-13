import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { sectionReveal } from '../../lib/motion';

export function SectionReveal({ children, className, style, id }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <section id={id} className={className} style={style}>{children}</section>;
  }

  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}
