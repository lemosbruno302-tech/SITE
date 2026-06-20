/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { getWhatsAppLink } from '../data';
import { Check, Star, Shield, Lock, Zap, Server } from 'lucide-react';

interface PlanoPrecos {
  nome: string;
  id: string;
  periodo: string;
  precoStd: string;
  precoUnitv: string;
  beneficios: string[];
  destaque: boolean;
  equivalente?: string;
  tipo: string;
}

export const Planos: React.FC = () => {
  const [selectedServerType, setSelectedServerType] = useState<'standard' | 'unitv'>('standard');

  const planos: PlanoPrecos[] = [
    {
      id: 'plano-mensal',
      nome: 'Mensal',
      tipo: 'Acesso por 30 dias',
      periodo: 'mês',
      precoStd: '30,00',
      precoUnitv: '35,00',
      beneficios: [
        'Acesso completo a canais, filmes e séries',
        'Imagens em qualidade SD, HD, FHD e 4K',
        '1 Tela simultânea inclusa',
        'Sem fidelidade ou taxa de cancelamento',
        'Suporte via WhatsApp incluso'
      ],
      destaque: false
    },
    {
      id: 'plano-trimestral',
      nome: 'Trimestral',
      tipo: 'Acesso por 90 dias',
      periodo: 'trimestre',
      precoStd: '90,00',
      precoUnitv: '105,00',
      beneficios: [
        'Acesso completo por 3 meses',
        'Qualidade de transmissão máxima',
        '1 Tela simultânea inclusa',
        'Perfeito para testar nossa constância',
        'Suporte prioritário via WhatsApp',
        'Liberação imediata com PIX'
      ],
      destaque: false
    },
    {
      id: 'plano-semestral',
      nome: 'Semestral',
      tipo: 'Acesso por 180 dias',
      periodo: 'semestre',
      precoStd: '180,00',
      precoUnitv: '210,00',
      beneficios: [
        'Acesso completo por 6 meses',
        'Excelente para Smart TVs, Celular e TV Box',
        'Sinal de Ultra Fluidez de 60fps',
        'Sem flutuações de mensalidades',
        'Suporte estendido via WhatsApp',
        'Ativação rápida passo a passo'
      ],
      destaque: false
    },
    {
      id: 'plano-anual',
      nome: 'Anual',
      tipo: 'Sucesso Absoluto (12 meses)',
      periodo: 'ano',
      precoStd: '300,00',
      precoUnitv: '360,00',
      beneficios: [
        'Acesso completo por 1 ano inteiro',
        'Equivalente a grandes descontos!',
        'Todas as centrais atualizadas inclusas',
        'Suporte VIP dedicado com atendimento rápido',
        'Sem taxas extras de manutenção',
        'Garantia total de funcionamento anual'
      ],
      destaque: true,
      equivalente: 'Equivale a apenas R$ 25,00/mês!'
    }
  ];

  return (
    <section id="planos" className="py-24 bg-brand-dark/95 relative overflow-hidden">
      
      {/* Background radial highlight for plans pricing */}
      <div className="absolute top-[30%] left-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20 inline-block">
            Preços Justos sem Surpresas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight pt-2">
            Escolha o Plano Ideal para Você
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Ativação rápida e suporte gratuito em todas as opções. Sem contratos de fidelidade ou taxas de cancelamento ocultas.
          </p>
        </div>

        {/* Server Selector Tabs */}
        <div className="flex flex-col items-center justify-center mb-14 space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
            <Server className="h-3.5 w-3.5 text-brand-gold" />
            Selecione o Servidor desejado para ver os valores:
          </p>
          
          <div className="p-1 rounded-2xl bg-brand-deep border border-white/10 flex flex-wrap items-center justify-center gap-1">
            <button
              type="button"
              onClick={() => setSelectedServerType('standard')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                selectedServerType === 'standard'
                  ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 text-brand-dark font-extrabold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Blinder, Starplay, Epic, New One
            </button>
            <button
              type="button"
              onClick={() => setSelectedServerType('unitv')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                selectedServerType === 'unitv'
                  ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 text-brand-dark font-extrabold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              UniTV Premium (.unitv)
            </button>
          </div>
          
          <p className="text-xs text-slate-400 italic text-center">
            {selectedServerType === 'standard' 
              ? '✓ Servidores robustos com qualidade garantida, futebol liso e alta estabilidade!'
              : '✓ Sinal Premium com infraestrutura dedicada e o melhor servidor residencial .unitv!'}
          </p>
        </div>

        {/* Pricing Cards Grid (4 columns now!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {planos.map((plano) => {
            const preco = selectedServerType === 'standard' ? plano.precoStd : plano.precoUnitv;
            const [reais, centavos] = preco.split(',');

            // Build dynamic high-converting WhatsApp links
            const serverLabel = selectedServerType === 'standard' 
              ? 'dos Servidores Gerais (Blinder/Starplay/Epic/New One)'
              : 'do Servidor Premium UniTV (.unitv)';
              
            const customMessage = `Olá BrunoTV! Gostaria de prosseguir com a ativação do plano [${plano.nome.toUpperCase()}] ${serverLabel} no valor de R$ ${preco}. Como posso efetuar o pagamento?`;
            const linkWpp = getWhatsAppLink(customMessage);

            return (
              <div
                key={plano.id}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  plano.destaque
                    ? 'glass border-2 border-brand-gold shadow-[0_12px_40px_rgba(212,175,55,0.2)] lg:-translate-y-2'
                    : 'glass border-white/10 hover:border-white/20 hover:-translate-y-1 shadow-xl'
                }`}
              >
                
                {/* "MAIS POPULAR" Golden Badge for high-tier card */}
                {plano.destaque && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 text-brand-dark text-[10px] font-extrabold uppercase py-1.5 px-4 rounded-full tracking-wider flex items-center gap-1 shadow-md whitespace-nowrap">
                    <Star className="h-3 w-3 fill-current animate-spin-slow" />
                    MAIS POPULAR • ECONOMIZE MÁXIMO
                  </div>
                )}

                {/* Plan Title & Monthly price breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {plano.nome}
                      </h3>
                      <p className="text-[10px] text-slate-400 font-light mt-0.5">
                        {plano.tipo}
                      </p>
                    </div>
                    {plano.destaque && (
                      <span className="p-1 px-2 rounded bg-brand-gold/10 text-brand-gold text-[9px] font-bold uppercase tracking-wider">
                        VIP
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline space-x-1 pt-1">
                    <span className="text-xs font-semibold text-slate-400">R$</span>
                    <span className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                      {reais}
                    </span>
                    <span className="text-sm font-semibold text-slate-400">,{centavos}</span>
                    <span className="text-xs text-slate-400 font-light ml-1">/ {plano.periodo}</span>
                  </div>

                  {plano.destaque && plano.equivalente ? (
                    <p className="text-xs text-brand-gold-light font-medium bg-brand-gold/5 border border-brand-gold/10 p-2 rounded-lg text-center">
                      {selectedServerType === 'standard' 
                        ? 'Equivale a apenas R$ 25,00 por mês!' 
                        : 'Equivale a apenas R$ 30,00 por mês!'}
                    </p>
                  ) : (
                    <p className="text-xs text-slate-400 font-light">&nbsp;</p>
                  )}

                  {/* Divider */}
                  <hr className="border-white/10 my-2" />

                  {/* Benefits List */}
                  <ul className="space-y-3 pt-2">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-300 gap-2">
                        <div className={`p-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                          plano.destaque ? 'bg-brand-gold/20 text-brand-gold' : 'bg-brand-blue/15 text-brand-blue'
                        }`}>
                          <Check className="h-3 w-3 font-bold" />
                        </div>
                        <span className="leading-snug">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subscribe Action Button */}
                <div className="pt-8 space-y-3">
                  <a
                    href={linkWpp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-5 rounded-full font-bold text-xs text-center block transition-all duration-300 tracking-wide cursor-pointer uppercase ${
                      plano.destaque
                        ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 text-brand-dark hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                        : 'border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white bg-white/5 hover:bg-white/10 hover:scale-[1.02]'
                    }`}
                  >
                    Ativar {plano.nome}
                  </a>

                  {/* Secure checkout notice */}
                  <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-light">
                    <Lock className="h-3 w-3 text-emerald-400" />
                    <span>Configuração imediata via WhatsApp</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Safety Guarantees strip */}
        <div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 bg-brand-deep/30 border border-white/5 p-6 rounded-2xl text-center">
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm flex items-center justify-center gap-1.5">
              <Shield className="h-4 w-4 text-brand-gold" />
              Garantia de Sinal
            </h4>
            <p className="text-slate-400 text-xs font-light">Instalação assistida passo a passo.</p>
          </div>
          <div className="space-y-2 border-t sm:border-t-0 sm:border-x border-white/5 pt-4 sm:pt-0">
            <h4 className="text-white font-bold text-sm flex items-center justify-center gap-1.5">
              <Zap className="h-4 w-4 text-brand-gold" />
              Ativação Expressa
            </h4>
            <p className="text-slate-400 text-xs font-light">Seu acesso liberado em até 10 minutos.</p>
          </div>
          <div className="space-y-2 border-t sm:border-t-0 pt-4 sm:pt-0">
            <h4 className="text-white font-bold text-sm flex items-center justify-center gap-1.5">
              <Lock className="h-4 w-4 text-brand-gold" />
              Sem Fidelidade
            </h4>
            <p className="text-slate-400 text-xs font-light">Cancele ou altere planos quando quiser.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Planos;
