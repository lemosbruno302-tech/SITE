/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getWhatsAppLink } from '../data';
import { MessageCircle } from 'lucide-react';

export const FloatingWpp: React.FC = () => {
  const wppLink = getWhatsAppLink('Olá BrunoTV! Gostaria de falar com o suporte de plantão agora mesmo.');

  return (
    <a
      href={wppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Absolute ping ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:scale-110 animate-ping"></span>
      
      {/* Icon */}
      <MessageCircle className="h-6.5 w-6.5 relative z-10 fill-current" />
      
      {/* Hover tooltips */}
      <span className="absolute right-14 bg-brand-navy border border-slate-700 text-[11px] font-bold text-slate-100 py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
        Suporte Online
      </span>
    </a>
  );
};

export default FloatingWpp;
