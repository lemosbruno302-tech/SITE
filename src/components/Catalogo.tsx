/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CATALOGO } from '../data';
import { Play, Film, Flame, Star, ShieldCheck, Search, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

// Popular searchable items list to offer absolute high-fidelity autocomplete / search results immediately on-site!
const CANAIS_POPULARES = [
  // 1. ESPORTES (Futebol & Lutas)
  { 
    id: 'p-1', 
    categoria: 'Esportes', 
    titulo: 'Premiere FC HD/4K (Brasileirão)', 
    subtitulo: 'Todos os jogos ao vivo das Séries A & B do Campeonato Brasileiro com transmissão contínua e estável.', 
    imagemUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80', 
    tag: 'Futebol Ao Vivo' 
  },
  { 
    id: 'p-2', 
    categoria: 'Esportes', 
    titulo: 'UEFA Champions League & Libertadores', 
    subtitulo: 'Os grandes duelos europeus e as maiores batalhas de futebol da América Latina ao vivo no seu televisor.', 
    imagemUrl: 'https://images.unsplash.com/photo-1504155268344-3c155162a536?w=800&auto=format&fit=crop&q=80', 
    tag: 'Futebol 60 FPS' 
  },
  { 
    id: 'p-3', 
    categoria: 'Esportes', 
    titulo: 'Card Principal UFC - Canal Combate', 
    subtitulo: 'As disputas emocionantes de cinturão no octógono oficial do UFC, lutas preliminares e transmissões de MMA.', 
    imagemUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&auto=format&fit=crop&q=80', 
    tag: 'Lutas UFC' 
  },
  { 
    id: 'p-4', 
    categoria: 'Esportes', 
    titulo: 'Grandes Noites de Boxe Internacional', 
    subtitulo: 'As maiores lutas unificadas de pesos pesados direto das arenas de Las Vegas e Londres ao vivo.', 
    imagemUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop&q=80', 
    tag: 'Boxe Ao Vivo' 
  },

  // 2. FILMES DE SUCESSO
  { 
    id: 'p-5', 
    categoria: 'Filmes', 
    titulo: 'Gladiador II (4K Ultra HD)', 
    subtitulo: 'A aguardada sequência do aclamado clássico histórico. Sangue, glória e batalhas intensas na arena romana.', 
    imagemUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80', 
    tag: 'Sucesso Estreia' 
  },
  { 
    id: 'p-6', 
    categoria: 'Filmes', 
    titulo: 'Duna: Parte Dois 4K UHD', 
    subtitulo: 'O espetáculo épico de ficção científica com ótimos visuais de areias, batalhas galácticas e som de cinema.', 
    imagemUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80', 
    tag: 'Filmes 4K' 
  },
  { 
    id: 'p-7', 
    categoria: 'Filmes', 
    titulo: 'Oppenheimer - Ganhador do Oscar', 
    subtitulo: 'Assista à premiada obra-prima de Christopher Nolan com excelente nível de detalhes e imagens UHD cristalinas.', 
    imagemUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&auto=format&fit=crop&q=80', 
    tag: 'Vencedor do Oscar' 
  },
  { 
    id: 'p-8', 
    categoria: 'Filmes', 
    titulo: 'Divertida Mente 2 (Disney Pixar)', 
    subtitulo: 'Ansiedade, tédio e novas emoções chegam para divertir toda a família nesta incrível animação de sucesso.', 
    imagemUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80', 
    tag: 'Família' 
  },
  { 
    id: 'p-9', 
    categoria: 'Filmes', 
    titulo: 'Avatar: O Caminho da Água', 
    subtitulo: 'Toda a riqueza do belíssimo oceano de Pandora disponível com suporte a áudio imersivo Dolby Atmos.', 
    imagemUrl: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&auto=format&fit=crop&q=80', 
    tag: 'Qualidade Ultra' 
  },

  // 3. SÉRIES DE SUCESSO
  { 
    id: 'p-10', 
    categoria: 'Séries', 
    titulo: 'The Last of Us - Saga HBO Max', 
    subtitulo: 'Joel e Ellie atravessam um empolgante mundo em colapso com atuações brilhantes nesta aclamada série.', 
    imagemUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8edd85?w=800&auto=format&fit=crop&q=80', 
    tag: 'Maratona Vip' 
  },
  { 
    id: 'p-11', 
    categoria: 'Séries', 
    titulo: 'House of the Dragon - Segunda Temporada', 
    subtitulo: 'A disputa territorial e militar da dinastia Targaryen pelo poder supremo nos Sete Reinos do trono de ferro.', 
    imagemUrl: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&auto=format&fit=crop&q=80', 
    tag: 'Séries em Alta' 
  },
  { 
    id: 'p-12', 
    categoria: 'Séries', 
    titulo: 'Breaking Bad & Better Call Saul', 
    subtitulo: 'Duas das maiores trajetórias de drama e suspense criminal de todos os tempos completas em UHD.', 
    imagemUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80', 
    tag: 'Lendária' 
  },
  { 
    id: 'p-13', 
    categoria: 'Séries', 
    titulo: 'Stranger Things final - Retro 80s', 
    subtitulo: 'O mistério sobrenatural da cidade de Hawkins e novos portais enfrentando as terríveis garras do Vecna.', 
    imagemUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&q=80', 
    tag: 'Infanto-Juvenil' 
  },

  // 4. CANAIS E NOVELAS
  { 
    id: 'p-14', 
    categoria: 'Canais Fechados', 
    titulo: 'Telecine Premium & HBO Max UHD', 
    subtitulo: 'Canais sob demanda com sinal premium dedicados 24h por dia para os grandes lançamentos.', 
    imagemUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80', 
    tag: 'TV Assinatura' 
  },
  { 
    id: 'p-15', 
    categoria: 'Canais Abertos', 
    titulo: 'Canais Abertos Nacionais HD (Globo/SBT/Record)', 
    subtitulo: 'Sinal digital terrestre com o melhor do jornalismo, variedades de futebol, novelas e programas infantis.', 
    imagemUrl: 'https://images.unsplash.com/photo-1461151304267-38cd89a7f18e?w=800&auto=format&fit=crop&q=80', 
    tag: 'TV Digital Estável' 
  }
];

export const Catalogo: React.FC = () => {
  const [selectedCategoria, setSelectedCategoria] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categoriasMenu = [
    { label: 'Todos os Conteúdos', id: 'todos' },
    { label: 'Filmes', id: 'Filmes' },
    { label: 'Séries', id: 'Séries' },
    { label: 'Novelas', id: 'Novelas' },
    { label: 'Esportes', id: 'Esportes' },
    { label: 'Canais TV', id: 'TV' }
  ];

  // Combine static mock catalogs from database with our highly detailed search catalog items
  const fullCatalogList = [...CANAIS_POPULARES, ...CATALOGO].filter((v, i, a) => a.findIndex(t => (t.titulo === v.titulo)) === i);

  const filteredCatalog = fullCatalogList.filter((item) => {
    // 1. Text Search filtering (matches title, subtitle or category)
    const matchesSearch = searchTerm.trim() === '' || 
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtitulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.categoria.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    // 2. Category selection filtering
    if (selectedCategoria === 'todos') return true;
    if (selectedCategoria === 'TV') {
      return item.categoria.includes('Canais') || item.categoria.toLowerCase().includes('tv');
    }
    return item.categoria === selectedCategoria;
  });

  return (
    <section id="catalogo" className="py-24 bg-gradient-to-b from-brand-dark to-brand-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-lg border border-brand-gold/15 inline-block">
              Streaming de Alta Qualidade
            </h2>
            <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight pt-1">
              Catálogo Interativo BrunoTV
            </p>
            <p className="text-slate-400 text-sm font-light max-w-lg">
              De canais ao vivo de notícias a filmes de Hollywood e esportes de futebol cruciais, faça uma busca instantânea e comprove nossa variedade de primeira classe.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-4 glass p-3.5 rounded-2xl backdrop-blur-md">
            <div className="px-4 py-2 text-center border-r border-white/10">
              <span className="block text-lg font-bold text-brand-gold font-display">+4.500</span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Canais de TV</span>
            </div>
            <div className="px-4 py-2 text-center border-r border-white/10">
              <span className="block text-lg font-bold text-brand-gold font-display">+10.000</span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Filmes 4K</span>
            </div>
            <div className="px-4 py-2 text-center">
              <span className="block text-lg font-bold text-brand-gold font-display">+2.500</span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Séries Ativas</span>
            </div>
          </div>
        </div>

        {/* Dynamic Search & Category Filtering Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Real-time Search Box */}
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="h-5 w-5 text-brand-gold animate-pulse" />
            </div>
            <input
              type="text"
              name="search-catalog"
              id="search-catalog"
              placeholder="Pesquise por canais, Premiere, Combate, HBO, filmes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 bg-brand-deep/80 border border-slate-800 rounded-2xl text-white text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all placeholder-slate-500 shadow-inner"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-brand-gold hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Filters Menu */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {categoriasMenu.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoria(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-sm cursor-pointer whitespace-nowrap border ${
                  selectedCategoria === cat.id
                    ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold shadow-[0_4px_15px_rgba(212,175,55,0.3)]'
                    : 'bg-white/5 text-slate-300 hover:text-brand-gold border-white/10 hover:border-brand-gold/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Search feedback */}
        {filteredCatalog.length === 0 ? (
          <div className="text-center py-16 bg-white/5 border border-white/5 rounded-3xl space-y-4">
            <Activity className="h-12 w-12 text-brand-gold mx-auto animate-bounce" />
            <h3 className="text-white font-bold text-lg font-display">Nenhum canal ou filme localizado</h3>
            <p className="text-slate-400 text-sm font-light max-w-sm mx-auto pl-2 pr-2">
              Não se preocupe! Nós temos a grade completa. Clique no suporte abaixo para conferir a lista no seu robô de atendimento.
            </p>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setSelectedCategoria('todos'); }}
              className="text-brand-gold hover:text-white underline text-xs font-semibold cursor-pointer"
            >
              Resetar busca e mostrar tudo
            </button>
          </div>
        ) : (
          /* Catalog Grid Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCatalog.map((item) => {
              const isPopular = 'tag' in item;
              const linkWpp = `https://api.whatsapp.com/send?phone=55996324910&text=Olá BrunoTV! Gostaria de testar especificamente o sinal do canal/filme [${item.titulo}] para atestar a estabilidade.`;

              return (
                <div
                  key={item.id}
                  className="group relative h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 hover:border-brand-gold/45 transition-all duration-500 ease-out flex flex-col justify-end"
                >
                  {/* Media Banner Image */}
                  <img
                    src={item.imagemUrl}
                    alt={item.titulo}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out -z-20"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dynamic Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/35 to-transparent opacity-90 group-hover:via-brand-dark/25 transition-all duration-500 -z-10"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-1.5 px-3 py-1.5 bg-brand-dark/85 backdrop-blur-md rounded-full border border-brand-gold/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                      {item.categoria}
                    </span>
                  </div>

                  {/* Quality Logo */}
                  <div className="absolute top-4 right-4 text-xs font-mono font-bold bg-brand-blue/90 text-white py-1 px-2.5 rounded text-[10px] uppercase tracking-wider backdrop-blur-sm">
                    {isPopular ? (item as any).tag : 'uhd 4k'}
                  </div>

                  {/* Central Dynamic Hover Play Action */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-14 w-14 rounded-full bg-brand-gold/0 backdrop-blur-0 text-brand-dark flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-brand-gold/90 group-hover:backdrop-blur-sm transition-all duration-500 ease-out shadow-xl">
                      <Play className="h-6 w-6 ml-1 text-brand-dark fill-current" />
                    </div>
                  </div>

                  {/* Text content details at the bottom of card */}
                  <a 
                    href={linkWpp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 space-y-2 transform transition-transform duration-300 block bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"
                  >
                    <h3 className="font-display text-lg font-extrabold text-white group-hover:text-brand-gold transition-colors duration-200">
                      {item.titulo}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                      {item.subtitulo}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs text-brand-gold font-semibold uppercase tracking-wider">
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Solicitar acesso grátis →
                      </span>
                      <span className="text-emerald-400 font-mono text-[10px]">60fps • 99% estável</span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Free Test Prompt Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-deep to-brand-navy border border-brand-gold/20 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-2xl -z-10"></div>
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-white font-bold font-display text-xl flex items-center justify-center md:justify-start gap-2">
              <Flame className="h-5 w-5 text-brand-gold fill-current" />
              Quer conferir a lista completa de conteúdo?
            </h4>
            <p className="text-slate-300 text-sm font-light">
              Nossa grade possui mais de 15.000 canais, filmes e séries. Libere agora um acesso de teste de 4 horas sem pagar nada.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=55996324910&text=Ol%C3%A1%20BrunoTV!%20Gostaria%20de%20receber%20um%20teste%20gr%C3%A1tis%20para%20conferir%20a%20lista%20completa%20de%20conte%C3%BAdo."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 whitespace-nowrap rounded-full bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold text-sm transition-all shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105"
          >
            Liberar Teste pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default Catalogo;
