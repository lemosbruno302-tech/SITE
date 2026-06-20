/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CreditCard, Key, AppWindow, Play, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data';

export const ComoFunciona: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Escolha um Plano',
      desc: 'Navegue pelos nossos planos mensal, semestral ou anual e escolha o que melhor se encaixa no seu orçamento.',
      icon: CreditCard,
    },
    {
      number: '02',
      title: 'Receba seu Acesso',
      desc: 'Fale conosco pelo WhatsApp. Após a confirmação, nossa equipe gera seus dados de acesso (usuário e senha) no ato.',
      icon: Key,
    },
    {
      number: '03',
      title: 'Instale o Aplicativo',
      desc: 'Fornecemos o link direto de instalação do aplicativo oficial BrunoTV correspondente ao seu modelo de Smart TV ou celular.',
      icon: AppWindow,
    },
    {
      number: '04',
      title: 'Comece a Assistir',
      desc: 'Abra o app, insira as credenciais fornecidas e desfrute de canais ao vivo, filmes de sucesso e séries com estabilidade total.',
      icon: Play,
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-brand-deep to-brand-dark relative overflow-hidden">
      
      {/* Decorative vector shape */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Simples e Descomplicado
          </h2>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Como Funciona o BrunoTV?
          </p>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Em menos de 10 minutos você configura tudo e começa a maratona dos seus canais ou séries favoritos. Siga os passos:
          </p>
        </div>

        {/* Steps Grid - Connecting line on desktop */}
        <div className="relative">
          {/* Connecting line helper */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-blue via-brand-gold to-yellow-600 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => {
              const IconComp = step.icon;
              return (
                <div key={i} className="group text-center space-y-5 relative">
                  
                  {/* Step bubble / Icon wrapper */}
                  <div className="relative mx-auto flex items-center justify-center w-24 h-24 rounded-full glass group-hover:border-brand-gold/60 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    
                    {/* Floating Step Number */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r from-brand-gold to-yellow-600 text-brand-dark font-extrabold text-xs flex items-center justify-center border-2 border-brand-dark shadow-md font-display">
                      {step.number}
                    </div>

                    <IconComp className="h-8 w-8 text-slate-300 group-hover:text-brand-gold transition-colors duration-300" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2 max-w-xs mx-auto">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-light transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Contact Link below step process */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppLink('Olá BrunoTV! Gostaria de conversar com a equipe para obter ajuda na instalação e ativação do meu aplicativo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-300 bg-brand-navy/50 hover:bg-brand-navy/90 hover:text-white border border-slate-800 hover:border-brand-gold/45 transition-all"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            Dúvidas na instalação? Fale com nosso suporte
            <ArrowRight className="h-4 w-4 text-brand-gold" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ComoFunciona;
