import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Tag({ children, animateIn = false, variants }) {
  const shouldReduceMotion = useReducedMotion();
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-sm border border-(--color-border) font-mono text-xs text-(--color-text-muted) transition-all duration-200 cursor-default hover:border-(--color-text-subtle) hover:text-(--color-text-primary)";

  if (shouldReduceMotion) {
    return <span className={baseClasses}>{children}</span>;
  }

  return (
    <motion.span
      variants={animateIn ? variants : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={baseClasses}
    >
      {children}
    </motion.span>
  );
}
