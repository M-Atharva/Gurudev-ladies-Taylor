/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Info from './components/Info';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-maroon/10 selection:text-maroon">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Info />
      </main>
      <WhatsAppButton />
    </div>
  );
}
