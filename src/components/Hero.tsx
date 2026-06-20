/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getWhatsAppLink } from '../data';
import { Play, Sparkles, MessageCircle } from 'lucide-react';
// @ts-expect-error - static image import
import heroMockup from '../assets/images/brunotv_hero_mockup_1781911150422.jpg';

export const Hero: React.FC = () => {
  const wppTeste = getWhatsAppLink('Olá BrunoTV! Gostaria de receber meu teste grátis imediatamente para conhecer os canais, filmes e séries.');
  const wppFalar = getWhatsAppLink('Olá BrunoTV! Gostaria de tirar algumas dúvidas sobre o funcionamento do aplicativo.');

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-radial from-brand-deep via-brand-dark to-brand-dark"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-blue/15 blur-[80px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-brand-gold/10 blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/60 border border-brand-gold/30 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-brand-gold animate-bounce" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                O melhor entretenimento IPTV de 2026
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Toda sua diversão em um <br className="hidden sm:inline" />
              <span className="text-gradient-blue">único aplicativo</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Assista a filmes, séries, canais ao vivo, esportes de alta velocidade, novelas emocionantes e conteúdos sob demanda em alta resolução 4K. Estabilidade garantida sem quedas de sinal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#planos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-brand-dark bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 scale-100 hover:scale-105"
              >
                <Play className="h-5 w-5 mr-2 fill-current" />
                Teste Agora
              </a>

              <a
                href={wppFalar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-slate-200 border border-slate-700/80 bg-brand-navy/20 hover:bg-brand-navy/60 hover:text-white hover:border-brand-gold/60 transition-all duration-300 gap-2"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-navy/40 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold font-display text-brand-gold">+15.000</p>
                <p className="text-xs text-slate-400 font-medium">Conteúdos</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold font-display text-brand-gold">99.9%</p>
                <p className="text-xs text-slate-400 font-medium">Estabilidade</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold font-display text-brand-gold">4K UHD</p>
                <p className="text-xs text-slate-400 font-medium">Qualidade Ultra</p>
              </div>
            </div>
          </div>

          {/* Interactive Screen Device Mockups */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Backlight Glow effect behind the main mockup */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-gold/20 rounded-2xl blur-3xl -z-10 transition-opacity"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-brand-gold/20 p-2 bg-brand-dark/40 shadow-2xl animate-float">
                <img
                  src={heroMockup}
                  alt="BrunoTV Mockup Displays - TV, Celular, Tablet"
                  className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating badge inside the UI image container */}
                <div className="absolute right-4 bottom-4 p-3 rounded-xl bg-brand-dark/90 backdrop-blur-md border border-brand-gold/40 shadow-lg flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-100">Servidores Ativos e Online</span>
                </div>
              </div>

              {/* Background abstract decoration rings */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-gold/10 rounded-full pointer-events-none -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-52 h-52 border border-brand-blue/10 rounded-full pointer-events-none -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
