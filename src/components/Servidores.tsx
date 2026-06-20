/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { getWhatsAppLink } from '../data';
import { Server, Activity, ShieldCheck, Zap, Info, ArrowUpRight, Cpu } from 'lucide-react';

interface ServidorItem {
  id: string;
  nome: string;
  descricao: string;
  vibe: string;
  categoriaDestaque: string;
  uptime: string;
  defaultPing: number;
}

export const Servidores: React.FC = () => {
  const [selectedServer, setSelectedServer] = useState<string>('unitv');
  const [pings, setPings] = useState<Record<string, number>>({
    unitv: 24,
    starplay: 31,
    blinder: 28,
    'new-one': 35,
    epic: 19
  });

  const servidores: ServidorItem[] = [
    {
      id: 'unitv',
      nome: 'UniTV',
      descricao: 'Referência premium com sincronização ultra rápida para canais ao vivo FHD e 4K. Ideal para toda a família.',
      vibe: 'Estabilidade Lendária',
      categoriaDestaque: 'Canais de Filmes',
      uptime: '99.98%',
      defaultPing: 22
    },
    {
      id: 'starplay',
      nome: 'Starplay',
      descricao: 'Catálogo on-demand imbatível. Filmes recém-saídos do cinema e maratona de séries completas atualizadas diariamente.',
      vibe: 'Cinema Sob Demanda',
      categoriaDestaque: 'Filmes e Séries',
      uptime: '99.95%',
      defaultPing: 30
    },
    {
      id: 'blinder',
      nome: 'Blinder',
      descricao: 'Servidor otimizado com fluxo contínuo em 60 fps para programação esportiva nacional e transmissões internacionais.',
      vibe: 'Ultra Fluidez 60 FPS',
      categoriaDestaque: 'Futebol Ao Vivo',
      uptime: '99.99%',
      defaultPing: 27
    },
    {
      id: 'new-one',
      nome: 'New One',
      descricao: 'Nova arquitetura com codificação de dados otimizada para o melhor desempenho em Smart TVs e celulares antigos.',
      vibe: 'Compatibilidade Leve',
      categoriaDestaque: 'Multi-Dispositivos',
      uptime: '99.91%',
      defaultPing: 33
    },
    {
      id: 'epic',
      nome: 'Epic',
      descricao: 'Infraestrutura robusta de ultra-baixa latência com servidores redundantes para anular qualquer tipo de travamento.',
      vibe: 'Redundância Máxima',
      categoriaDestaque: 'Canais Fechados Premium',
      uptime: '99.97%',
      defaultPing: 18
    }
  ];

  // Keep changing ping values slightly to simulate high-fidelity real-time network states!
  useEffect(() => {
    const timer = setInterval(() => {
      setPings(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(key => {
          const base = servidores.find(s => s.id === key)?.defaultPing || 25;
          const drift = Math.floor(Math.random() * 5) - 2; // -2 to +2 variation
          next[key] = Math.max(12, base + drift);
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeServer = servidores.find(s => s.id === selectedServer) || servidores[0];

  const requestTestLink = getWhatsAppLink(
    `Olá BrunoTV! Gostaria de testar especificamente o servidor premium [${activeServer.nome}] (${activeServer.vibe}) pelo aplicativo para comprovar a qualidade.`
  );

  return (
    <section id="servidores" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Visual background decor matching the sleek glow-gold and glass aesthetic */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 p-2.5 rounded-xl border border-brand-gold/20 inline-block">
            Múltiplas Fontes de Transmissão
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight pt-2">
            Nossos <span className="text-gradient-gold font-extrabold">Servidores de Elite</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Trabalhamos em parceria com as melhores centrais de sinal IPTV do mercado mundial. Você pode selecionar o servidor de sua preferência com ativação instantânea.
          </p>
        </div>

        {/* Dynamic Interactive Panel / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Server List Selection Panel (Left column - 5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-4">
              Selecione o Servidor para ver Detalhes:
            </h3>
            
            <div className="space-y-3">
              {servidores.map((server) => {
                const isSelected = selectedServer === server.id;
                const serverPing = pings[server.id] || server.defaultPing;
                
                return (
                  <button
                    key={server.id}
                    type="button"
                    onClick={() => setSelectedServer(server.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? 'bg-gradient-to-r from-brand-deep to-[#0e1c3a] border-brand-gold glow-gold shadow-lg shadow-brand-gold/5'
                        : 'glass border-white/5 hover:border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Interactive Live Indicator */}
                      <div className={`p-3 rounded-xl ${
                        isSelected ? 'bg-brand-gold text-brand-dark' : 'bg-white/5 text-slate-300'
                      }`}>
                        <Server className="h-5 w-5" />
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-medium text-white text-base">
                            {server.nome}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
                            ONLINE
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-light mt-0.5">
                          {server.vibe}
                        </p>
                      </div>
                    </div>

                    {/* Network stats preview */}
                    <div className="text-right flex flex-col items-end gap-1 font-mono">
                      <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        {serverPing}ms
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Latência Geral
                      </span>
                    </div>

                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Server Details Showcase Card (Right column - 7 columns) */}
          <div className="lg:col-span-7 h-full">
            <div className="glass rounded-3xl p-8 sm:p-10 border-white/10 relative overflow-hidden flex flex-col justify-between h-auto lg:min-h-[500px]">
              {/* Backlight atmosphere gradient */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>

              {/* Server Name Display Header */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase">
                      Informações Técnicas do Servidor
                    </span>
                    <h4 className="font-display text-3xl font-extrabold text-white mt-1">
                      Servidor <span className="text-brand-gold">{activeServer.nome}</span>
                    </h4>
                  </div>
                  <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full">
                    <Cpu className="h-6 w-6 animate-pulse" />
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {activeServer.descricao}
                </p>

                {/* Grid of server statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Uptime Anual
                    </span>
                    <span className="block text-lg font-bold font-mono text-emerald-400">
                      {activeServer.uptime}
                    </span>
                    <span className="block text-[10px] text-slate-500 font-light">
                      Disponibilidade Real
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Rota Prioritária
                    </span>
                    <span className="block text-lg font-bold font-mono text-brand-gold">
                      CDN Brasil
                    </span>
                    <span className="block text-[10px] text-slate-500 font-light">
                      Rotas redundantes
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Foco do Sistema
                    </span>
                    <span className="block text-lg font-bold font-display text-slate-200">
                      {activeServer.categoriaDestaque}
                    </span>
                    <span className="block text-[10px] text-slate-500 font-light">
                      Máxima otimização
                    </span>
                  </div>

                </div>

                {/* Information Callout banner inside Card */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-xs text-slate-300 leading-normal">
                  <Info className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                  <span>
                    <strong>Dica de Uso:</strong> Se você busca principalmente assistir campeonatos esportivos e partidas ao vivo, recomendamos configurar o servidor <strong>{servidores.find(s => s.id === 'blinder')?.nome}</strong> ou <strong>{servidores.find(s => s.id === 'epic')?.nome}</strong> no seu aplicativo oficial BrunoTV.
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 mt-8">
                <div className="text-center sm:text-left">
                  <p className="text-xs text-slate-400 font-light">Gostou da proposta deste servidor?</p>
                  <p className="text-sm font-bold text-white font-display mt-0.5">Teste o {activeServer.nome} agora sem custos!</p>
                </div>
                
                <a
                  href={requestTestLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-sm text-brand-dark bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-600 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-105 gap-2 group cursor-pointer whitespace-nowrap"
                >
                  Liberar Sinal {activeServer.nome}
                  <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Servidores;
