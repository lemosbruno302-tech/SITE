/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DEPOIMENTOS } from '../data';
import { Star, MessageSquare } from 'lucide-react';

export const Depoimentos: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Satisfação Garantida
          </h2>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Quem Usa BrunoTV, Recomenda!
          </p>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Veja a opinião sincera de quem já é nosso assinante ativo há meses e aproveita a melhor experiência de TV no dia a dia.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {DEPOIMENTOS.map((depo) => (
            <div
              key={depo.id}
              className="group relative p-6 sm:p-8 rounded-2xl glass hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Message icon badge top right */}
              <div className="absolute top-4 right-4 text-slate-800/60 group-hover:text-brand-gold/20 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < depo.avaliacao
                        ? 'text-brand-gold fill-current'
                        : 'text-slate-600'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6 italic">
                "{depo.comentario}"
              </p>

              {/* Profile Details */}
              <div className="flex items-center space-x-3.5 pt-4 border-t border-slate-850">
                <img
                  src={depo.foto}
                  alt={depo.nome}
                  className="h-11 w-11 rounded-full object-cover border border-brand-gold/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {depo.nome}
                  </h4>
                  <p className="text-[11px] text-brand-gold/85 font-medium uppercase tracking-wider">
                    {depo.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Depoimentos;
