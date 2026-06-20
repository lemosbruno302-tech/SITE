/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RECURSOS } from '../data';
import { DynamicIcon } from './Icons';

export const Recursos: React.FC = () => {
  return (
    <section id="recursos" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Tecnologia de Ponta
          </h2>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Tudo o que você espera de uma <br />
            <span className="text-gradient-blue font-extrabold">IPTV Premium</span>
          </p>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Descubra por que o BrunoTV é a escolha favorita para entretenimento completo em alta definição, com alta estabilidade e sem mensalidades abusivas.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {RECURSOS.map((recurso) => (
            <div
              key={recurso.id}
              className="group relative p-8 rounded-2xl glass hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_35px_rgba(212,175,55,0.1)] overflow-hidden"
            >
              {/* Highlight Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Hover Golden Top Bar decorator */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-gold to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon Frame */}
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300 mb-6 font-semibold">
                <DynamicIcon name={recurso.icone} size={28} className="transition-transform duration-300 group-hover:rotate-6 sm:group-hover:scale-110" />
              </div>

              {/* Card Title & Desc */}
              <h3 className="text-lg font-bold text-white font-display leading-snug mb-3 group-hover:text-brand-gold transition-colors duration-200">
                {recurso.titulo}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                {recurso.descricao}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Recursos;
