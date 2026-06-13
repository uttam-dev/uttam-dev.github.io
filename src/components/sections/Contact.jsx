import React from 'react';
import { SectionReveal } from '../ui/SectionReveal';

export function Contact() {
  return (
    <SectionReveal className="py-16 border-t border-(--color-border)">
      <h3 className="font-mono text-xs text-(--color-text-subtle) uppercase tracking-widest mb-8">Contact</h3>

      <div className="flex flex-col">
        <a
          href="mailto:work.uttam.dev@gmail.com"
          className="underline-slide font-mono text-sm text-(--color-text-primary) self-start"
        >
          work.uttam.dev@gmail.com
        </a>

        <div className="flex gap-6 mt-6">
          <a
            href="https://github.com/uttam-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-slide text-sm text-(--color-text-muted) hover:text-(--color-text-primary) transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-(--color-border)">·</span>
          <a
            href="https://www.linkedin.com/in/uttam-prajapati-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-slide text-sm text-(--color-text-muted) hover:text-(--color-text-primary) transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
