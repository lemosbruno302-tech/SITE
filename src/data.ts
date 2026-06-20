/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Recurso, CatalogoItem, Plano, Depoimento, FaqItem } from './types';

export const WHATSAPP_NUMBER = '55996324910';

export function getWhatsAppLink(message: string): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export const RECURSOS: Recurso[] = [
  {
    id: 'canais-ao-vivo',
    titulo: 'Canais ao Vivo',
    descricao: 'Acesso a milhares de canais abertos e fechados em Full HD, 4K e UHD sem travamentos.',
    icone: 'TvPlay',
  },
  {
    id: 'filmes-atualizados',
    titulo: 'Filmes Atualizados',
    descricao: 'Os maiores lançamentos do cinema diretamente no seu aplicativo, adicionados constantemente.',
    icone: 'Film',
  },
  {
    id: 'series-completas',
    titulo: 'Séries Completas',
    descricao: 'Séries de todas as grandes plataformas de streaming com temporadas completas e dubladas.',
    icone: 'Clapperboard',
  },
  {
    id: 'novelas',
    titulo: 'Novelas Completas',
    descricao: 'Clássicos e novelas atuais completas para você assistir quando e de onde quiser.',
    icone: 'BookmarkHeart',
  },
  {
    id: 'conteudo-infantil',
    titulo: 'Conteúdo Infantil',
    descricao: 'Desenhos, animações e canais cuidadosamente selecionados para a diversão das crianças.',
    icone: 'Smile',
  },
  {
    id: 'futebol-esportes',
    titulo: 'Futebol e Esportes',
    descricao: 'Campeonatos estaduais, Brasileirão, Champions League, UFC, F1 e canais de esportes 24h.',
    icone: 'Trophy',
  },
  {
    id: 'compatibilidade',
    titulo: 'Compatível com Smart TV',
    descricao: 'Instale na sua Samsung, LG, TCL, Android TV, além de celulares, tablets e notebooks.',
    icone: 'Tv',
  },
  {
    id: 'suporte-rapido',
    titulo: 'Suporte Rápido',
    descricao: 'Atendimento humanizado pelo WhatsApp pronto para ajudar você na instalação e configuração.',
    icone: 'Headphones',
  },
];

export const CATALOGO: CatalogoItem[] = [
  {
    id: 'filmes',
    categoria: 'Filmes',
    titulo: 'Os Maiores Lançamentos',
    subtitulo: 'Ação, Aventura, Ficção, Terror, Comédia e muito mais na ponta dos seus dedos.',
    imagemUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'series',
    categoria: 'Séries',
    titulo: 'Maratone suas Favoritas',
    subtitulo: 'Temporadas inteiras das séries mais aclamadas mundialmente com áudio impecável.',
    imagemUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8edd85?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'novelas-cat',
    categoria: 'Novelas',
    titulo: 'Dramas Emocionantes',
    subtitulo: 'Toda a emoção das novelas nacionais e internacionais completas.',
    imagemUrl: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'esportes',
    categoria: 'Esportes',
    titulo: 'Emoção ao Vivo',
    subtitulo: 'Jogos de Futebol ao vivo, lutas de MMA, corridas e canais especializados em esportes.',
    imagemUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'canais-abertos',
    categoria: 'Canais Abertos',
    titulo: 'TV Aberta Local',
    subtitulo: 'Sinal digital com ótima qualidade para todos os canais nacionais abertos.',
    imagemUrl: 'https://images.unsplash.com/photo-1461151304267-38cd89a7f18e?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'canais-fechados',
    categoria: 'Canais Fechados',
    titulo: 'Grade Completa de TV Paga',
    subtitulo: 'Filmes, documentários, notícias e variedades para a família toda.',
    imagemUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop&q=80',
  },
];

export const PLANOS: Plano[] = [
  {
    id: 'plano-mensal',
    nome: 'Plano Mensal',
    preco: '30,00',
    periodo: 'mês',
    beneficios: [
      'Acesso completo a todas as seções',
      'Milhares de canais ao vivo',
      'Filmes e Séries atualizados',
      'Qualidade SD, HD, FHD e 4K',
      'Suporte via WhatsApp incluso',
      'Sem fidelidade ou multa de cancelamento',
      '1 Tela por vez'
    ],
    destaque: false,
    linkWpp: getWhatsAppLink('Olá BrunoTV! Gostaria de assinar o Plano MENSAL de R$ 30,00. Gostaria de receber os dados de pagamento.'),
  },
  {
    id: 'plano-anual',
    nome: 'Plano Anual',
    preco: '300,00',
    periodo: 'ano',
    beneficios: [
      'Acesso completo por 12 meses',
      'Economia equivalente a 2 meses grátis!',
      'Milhares de canais ao vivo',
      'Filmes e Séries atualizados',
      'Qualidade SD, HD, FHD e 4K',
      'Suporte VIP prioritário no WhatsApp',
      'Sem fidelidade (renovação anual)',
      '1 Tela por vez (consulte telas adicionais)'
    ],
    destaque: true,
    linkWpp: getWhatsAppLink('Olá BrunoTV! Gostaria de assinar o PLANO ANUAL de R$ 300,00. Gostaria de receber o link de pagamento e ativação com desconto especial.'),
  },
  {
    id: 'plano-semestral',
    nome: 'Plano Semestral',
    preco: '180,00',
    periodo: 'semestre',
    beneficios: [
      'Acesso completo por 6 meses',
      'Milhares de canais ao vivo',
      'Filmes e Séries atualizados',
      'Qualidade SD, HD, FHD e 4K',
      'Suporte rápido via WhatsApp',
      'Sem taxas extras de ativação',
      '1 Tela por vez'
    ],
    destaque: false,
    linkWpp: getWhatsAppLink('Olá BrunoTV! Gostaria de assinar o Plano SEMESTRAL de R$ 180,00. Gostaria de prosseguir com a ativação.'),
  },
];

export const DEPOIMENTOS: Depoimento[] = [
  {
    id: '1',
    nome: 'Thiago Martins',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    avaliacao: 5,
    comentario: 'A qualidade dos canais de futebol é maravilhosa! Assisto aos jogos do meu time sem travamento e em alta resolução. Recomendo muito esse aplicativo.',
    role: 'Cliente há 8 meses',
  },
  {
    id: '2',
    nome: 'Juliana Costa',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    avaliacao: 5,
    comentario: 'O catálogo de filmes e séries superou minhas expectativas. Consigo assistir a todas as produções recentes que acabaram de sair do cinema. Ótimo custo-benefício!',
    role: 'Cliente há 1 ano',
  },
  {
    id: '3',
    nome: 'Carlos Eduardo',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    avaliacao: 5,
    comentario: 'O suporte via WhatsApp resolveu minhas dúvidas de configuração na Smart TV Samsung em menos de 5 minutos. Atendimento nota 10, muito práticos!',
    role: 'Cliente há 3 meses',
  },
  {
    id: '4',
    nome: 'Mariana Azevedo',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
    avaliacao: 4,
    comentario: 'Muito fácil de usar, principalmente na TV da sala. Coloquei o aplicativo e as crianças amaram a parte de desenhos. Muito de qualidade mesmo.',
    role: 'Cliente há 6 meses',
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-teste',
    pergunta: 'Como funciona o teste?',
    resposta: 'Disponibilizamos um teste rápido de forma totalmente gratuita. Você receberá um acesso temporário com a grade completa para experimentar a qualidade da imagem, catálogo de filmes e rapidez do aplicativo antes de escolher o seu plano. Fale conosco no WhatsApp para liberar seu teste imediatamente!',
  },
  {
    id: 'faq-dispositivos',
    pergunta: 'Em quais dispositivos funciona?',
    resposta: 'O aplicativo BrunoTV é compatível com praticamente qualquer dispositivo moderno: Smart TVs (Samsung, LG, TCL, AOC, etc.), TV Box, Chromecast, Celulares e Tablets (Android e iOS), Computadores e Notebooks. No momento da ativação, te guiamos passo a passo.',
  },
  {
    id: 'faq-filmes',
    pergunta: 'O aplicativo possui filmes e séries?',
    resposta: 'Sim! Possuímos um catálogo completo com milhares de filmes, desde os lançamentos mais recentes de cinema até clássicos, além de séries completas, novelas e conteúdo infantil, tudo organizado, dublado e legendado por categorias.',
  },
  {
    id: 'faq-acesso',
    pergunta: 'Como recebo meu acesso?',
    resposta: 'Após a confirmação do plano ou solicitação de teste, nossa equipe enviará os dados de acesso (usuário, senha e link do servidor) ou as orientações direto no seu WhatsApp em instantes.',
  },
  {
    id: 'faq-suporte',
    pergunta: 'Existe suporte?',
    resposta: 'Sim, oferecemos suporte técnico diário por WhatsApp para auxiliar em configurações, renovação de assinatura ou eventuais dúvidas sobre os aplicativos.',
  },
];
