/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Recurso {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface CatalogoItem {
  id: string;
  categoria: string;
  titulo: string;
  subtitulo: string;
  imagemUrl: string;
}

export interface Plano {
  id: string;
  nome: string;
  preco: string;
  periodo: string;
  beneficios: string[];
  destaque: boolean;
  linkWpp: string;
}

export interface Depoimento {
  id: string;
  nome: string;
  foto: string;
  avaliacao: number;
  comentario: string;
  role: string;
}

export interface FaqItem {
  id: string;
  pergunta: string;
  resposta: string;
}
