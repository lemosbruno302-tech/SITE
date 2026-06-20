/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { getWhatsAppLink } from '../data';
import { Menu, X } from 'lucide-react';
// @ts-expect-error - static image import
import logoImg from '../assets/images/brunotv_logo_1781915060814.jpg';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Servidores', href: '#servidores' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Planos', href: '#planos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-navy/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden glass border border-brand-gold/30 shadow-lg transition-transform duration-300 group-hover:scale-115">
              <img 
                src={logoImg} 
                alt="BrunoTV Logo" 
                className="w-full h-full object-cover scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display text-2xl font-extrabold tracking-tight text-white uppercase sm:block">
              BRUNO<span className="text-gradient-gold">TV</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#planos"
              className="text-sm font-semibold text-slate-100 hover:text-brand-gold transition-all"
            >
              Ver Planos
            </a>
            <a
              href={getWhatsAppLink('Olá BrunoTV, gostaria de solicitar um teste grátis imediatamente!')}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm text-brand-dark bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Teste Grátis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark/98 backdrop-blur-lg border-b border-brand-navy/60 transition-all">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-base font-medium text-slate-300 hover:text-brand-gold hover:bg-slate-900 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-4 flex flex-col space-y-3">
              <a
                href={getWhatsAppLink('Olá BrunoTV, gostaria de solicitar um teste grátis imediatamente!')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 shadow-md"
              >
                Solicitar Teste Grátis
              </a>
              <a
                href="#planos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full font-semibold text-slate-200 border border-slate-700 hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                Ver Planos Disponíveis
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
