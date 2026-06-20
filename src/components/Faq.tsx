/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS, getWhatsAppLink } from '../data';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-teste');

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-brand-dark to-brand-deep relative overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Central de Ajuda
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </p>
          <p className="text-slate-400 text-sm font-light">
            Tem alguma dúvida sobre o funcionamento do BrunoTV? Agrupamos as respostas mais importantes abaixo:
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'glass border-brand-gold/50 shadow-[0_4px_20px_rgba(212,175,55,0.06)]'
                    : 'glass border-white/5 hover:border-white/10'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <HelpCircle className={`h-5 w-5 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-brand-gold' : 'text-slate-500'
                    }`} />
                    <span className="font-display font-bold text-sm sm:text-base text-white hover:text-brand-gold-light transition-colors">
                      {faq.pergunta}
                    </span>
                  </div>
                  
                  {/* Chevron rotate indicator */}
                  <div className={`p-1.5 rounded-full bg-brand-dark transition-transform duration-350 shrink-0 ${
                    isOpen ? 'rotate-180 text-brand-gold' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="h-4.5 w-4.5" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-slate-800' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 sm:px-8 py-5 sm:py-6 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {faq.resposta}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customized WhatsApp Redirect below the accordion stack */}
        <div className="mt-16 text-center max-w-xl mx-auto bg-brand-navy/20 border border-slate-800 p-8 rounded-3xl space-y-4">
          <p className="text-sm font-medium text-slate-200">
            Ainda ficou com alguma dúvida sobre o aplicativo?
          </p>
          <p className="text-xs text-slate-400 font-light">
            Não tem problema! Fale diretamente com o BrunoTV pelo atendimento de plantão no WhatsApp.
          </p>
          <a
            href={getWhatsAppLink('Olá BrunoTV, lí as dúvidas frequentes mas ainda gostaria de perguntar sobre: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all hover:scale-105 shadow-md"
          >
            <MessageSquare className="h-4.5 w-4.5 fill-current text-white" />
            Tirar Dúvidas no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default Faq;
