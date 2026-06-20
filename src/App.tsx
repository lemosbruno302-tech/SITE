/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Recursos from './components/Recursos';
import Servidores from './components/Servidores';
import Catalogo from './components/Catalogo';
import Planos from './components/Planos';
import ComoFunciona from './components/ComoFunciona';
import Depoimentos from './components/Depoimentos';
import Faq from './components/Faq';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWpp from './components/FloatingWpp';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 overflow-x-hidden antialiased">
      <Header />
      <main>
        <Hero />
        <Recursos />
        <Servidores />
        <Catalogo />
        <Planos />
        <ComoFunciona />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <FloatingWpp />
    </div>
  );
}
