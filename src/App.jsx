import React from 'react';
import { PageLayout } from './components/layout/PageLayout';
import { Hero } from './components/sections/Hero';
import { Stack } from './components/sections/Stack';
import { Focus } from './components/sections/Focus';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <PageLayout>
      <Hero />
      <Stack />
      <Focus />
      <Contact />
    </PageLayout>
  );
}

export default App;
