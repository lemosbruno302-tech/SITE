/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getWhatsAppLink } from '../data';
import { Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
// @ts-expect-error - static image import
import logoImg from '../assets/images/brunotv_logo_1781915060814.jpg';

export const Footer: React.FC = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Planos', href: '#planos' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-slate-900 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-brand-navy/35">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden glass border border-brand-gold/20 shadow-md transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={logoImg} 
                  alt="BrunoTV Logo" 
                  className="w-full h-full object-cover scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-xl font-extrabold tracking-tight text-white uppercase">
                BRUNO<span className="text-gradient-gold">TV</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Sua melhor plataforma de streaming com canais nacionais e internacionais abertos e de TV fechada, as séries mais assistidas da atualidade e campeonatos esportivos completos.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Navegação Rápida</h4>
            <div className="grid grid-cols-2 gap-2 text-slate-400 text-xs sm:text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-gold transition-colors py-1 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Nossas Redes</h4>
            <div className="flex items-center space-x-3.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-navy hover:bg-brand-blue/35 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800"
                aria-label="Instagram Siga-nos"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-navy hover:bg-brand-blue/35 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800"
                aria-label="Facebook Conecte-se"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={getWhatsAppLink('Olá BrunoTV, vim do rodapé do site e gostaria de solicitar informações.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-navy hover:bg-brand-blue/35 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800"
                aria-label="Atendimento no WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-light pt-2">
              Qualidade de sinal, economia e o melhor atendimento técnico.
            </p>
          </div>

        </div>

        {/* Legal copyrights & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-light">
          <div>
            <span>BrunoTV &copy; {new Date().getFullYear()}. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleScrollUp}
              className="flex items-center gap-1.5 px-4 py-2 bg-brand-navy text-slate-400 hover:text-brand-gold rounded-full border border-slate-800 hover:border-slate-700 transition"
              aria-label="Voltar para o Topo"
            >
              <span>Subir</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
