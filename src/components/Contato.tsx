/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data';
import { Send, Phone, User, MessageSquare, ShieldCheck, CheckCircle2, Server } from 'lucide-react';

export const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servidor: 'Qualquer um / Recomendar Melhor',
    mensagem: '',
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim()) {
      setErrorMsg('Por favor, informe seu nome.');
      return;
    }
    if (!formData.telefone.trim()) {
      setErrorMsg('Por favor, informe seu telefone com DDD.');
      return;
    }
    if (!formData.mensagem.trim()) {
      setErrorMsg('Por favor, escreva sua mensagem.');
      return;
    }

    // High fidelity feedback: Show success, then redirect to WhatsApp
    setFormSuccess(true);
    
    const formattedMessage = `Olá BrunoTV! meu nome é ${formData.nome}.
Telefone de contato: ${formData.telefone}.
Servidor Preferencial selecionado: ${formData.servidor}.
Mensagem: ${formData.mensagem}`;

    const wppLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp link in new tab after 1.5 seconds so they see the success message
    setTimeout(() => {
      window.open(wppLink, '_blank', 'noopener,noreferrer');
      setFormSuccess(false);
      setFormData({ nome: '', telefone: '', servidor: 'Qualquer um / Recomendar Melhor', mensagem: '' });
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-brand-dark/95 relative overflow-hidden">
      
      {/* Decorative background effects */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 p-2.5 rounded-xl border border-brand-gold/20">
                Fale com o Administrador
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight pt-3">
                Restou Dúvidas? <br />
                <span className="text-gradient-gold font-extrabold">Entre em contato!</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
                Preencha o formulário para falar diretamente conosco ou clique para iniciar uma conversa expressa no WhatsApp. Estamos disponíveis para te atender.
              </p>
            </div>

            {/* Direct Contacts card list */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-deep/60 border border-slate-800">
                <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-display text-sm">WhatsApp Oficial</h4>
                  <p className="text-slate-400 text-xs font-light mt-1">Sinal, testes e suporte especializado.</p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Olá! Gostaria de falar com o atendimento sobre o BrunoTV.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:text-yellow-400 font-bold text-sm mt-1.5 inline-block"
                  >
                    +55 (99) 6324-910
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-deep/60 border border-slate-800">
                <div className="p-3 rounded-xl bg-brand-gold/15 text-brand-gold shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-display text-sm">Segurança de Rede</h4>
                  <p className="text-slate-400 text-xs font-light mt-1">Conexão encriptada e estabilidade redundante.</p>
                </div>
              </div>
            </div>

            {/* Bottom mini disclaimer */}
            <p className="text-[11px] text-slate-505 text-slate-500 font-light">
              Atendimento de segunda à domingo, das 08h00 às 22h00.
            </p>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-deep border border-slate-800/80 hover:border-brand-blue/20 transition-all shadow-2xl relative">
              
              {formSuccess ? (
                /* Success Message Overlay */
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4 animate-fade-in py-10 transition-all">
                  <div className="h-16 w-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="h-10 w-10 animate-pulse" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Sucesso!</h3>
                  <p className="text-slate-300 text-sm font-light max-w-sm">
                    Sua mensagem de contato foi processada! Estamos te redirecionando para o nosso canal de suporte no WhatsApp para atendimento imediato...
                  </p>
                  <span className="text-xs text-brand-gold font-mono tracking-widest animate-pulse">Agurdando abertura automática...</span>
                </div>
              ) : (
                /* Standard Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Envie uma Mensagem
                    </h3>
                    <p className="text-slate-400 text-xs font-light">Complete as lacunas para gerar o atendimento:</p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Input Name */}
                  <div className="space-y-2">
                    <label htmlFor="nome" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Seu Nome Completo
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Nome Ex: João Silva"
                        className="block w-full pl-11 pr-4 py-3.5 bg-brand-dark/90 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 font-light focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Input Phone */}
                  <div className="space-y-2">
                    <label htmlFor="telefone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Número de Telefone (WhatsApp)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                        <Phone className="h-4 w-4" />
                      </div>
                      <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Apenas números com DDD Ex: (99) 99632-4910"
                        className="block w-full pl-11 pr-4 py-3.5 bg-brand-dark/90 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 font-light focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Input Server Option selection */}
                  <div className="space-y-2">
                    <label htmlFor="servidor" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Deseja selecionar um Servidor Específico?
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                        <Server className="h-4 w-4" />
                      </div>
                      <select
                        name="servidor"
                        id="servidor"
                        value={formData.servidor}
                        onChange={handleChange}
                        className="block w-full pl-11 pr-10 py-3.5 bg-brand-dark/90 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all cursor-pointer appearance-none"
                      >
                        <option value="Qualquer um / Recomendar Melhor" className="bg-brand-deep">Qualquer um / Recomendar Melhor</option>
                        <option value="UniTV (.unitv)" className="bg-brand-deep">UniTV (.unitv) - Excelente p/ Canais ao Vivo</option>
                        <option value="Starplay" className="bg-brand-deep">Starplay - Excelente p/ Filmes e Séries</option>
                        <option value="Blinder" className="bg-brand-deep">Blinder - Otimizado para Esportes</option>
                        <option value="New One" className="bg-brand-deep">New One - Super Leve e Compatível</option>
                        <option value="Epic" className="bg-brand-deep">Epic - Redundante com Baixa Latência</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Input Message */}
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Escreva sua Mensagem / Dúvida
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 flex items-start pointer-events-none text-slate-500">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <textarea
                        name="mensagem"
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Quero solicitar o teste, tirar uma dúvida técnica sobre os aplicativos disponíveis..."
                        className="block w-full pl-11 pr-4 py-3.5 bg-brand-dark/90 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 font-light focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center py-4 px-6 rounded-full font-bold text-brand-dark bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-pointer text-sm"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar e Falar no WhatsApp
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-light pt-1">
                    Isso abrirá automaticamente um chat com nosso suporte pré-carregando seus dados com segurança.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Contato;
