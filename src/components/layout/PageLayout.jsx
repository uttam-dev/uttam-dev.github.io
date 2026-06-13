import React from 'react';
import { CursorGlow } from '../ui/CursorGlow';

export function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-(--color-bg)">
      <CursorGlow />
      <main className="max-w-xl mx-auto px-6">
        {children}
      </main>
    </div>
  );
}
