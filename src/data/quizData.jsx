import React from 'react';
import { 
  Target, TrendingUp, ShoppingBag, Briefcase, Lightbulb, 
  CheckCircle2, XCircle, AlertCircle, MessageSquare, Zap, 
  BarChart, Star, LayoutTemplate, Flame, Diamond, Palette, 
  Building2, MonitorPlay, Users, ClipboardList, MapPin, 
  Image, PenTool, Layout, Send, Calendar, Lock, Camera, 
  Mail, MessageCircle, Phone, Globe
} from 'lucide-react';

export const quizData = {
  title: "Briefing para Desenvolvimento de Site",
  subtitle: "Responda com calma. Iremos usar suas respostas para a criação do seu novo site, que além de ser bonito, será estratégico para ajudar a alavancar seu negócio. Cada detalhe é importante e qualquer dúvida estamos aqui.",
  sections: [
    // ─── SEÇÃO 1: SOBRE O PROJETO ────────────────────────────────────────
    {
      id: "section_1",
      title: "Sobre o Projeto",
      subtitle: "Vamos entender o objetivo do seu novo site.",
      icon: <Target size={48} strokeWidth={1.5} />,
      questions: [
        {
          id: "q1",
          type: "single_choice",
          question: "Qual o objetivo principal do site?",
          required: true,
          options: [
            { value: "institucional", label: "Apresentação Institucional", icon: <Building2 size={24} strokeWidth={1.5} /> },
            { value: "leads", label: "Geração de Leads", icon: <TrendingUp size={24} strokeWidth={1.5} /> },
            { value: "ecommerce", label: "E-commerce / Vendas Online", icon: <ShoppingBag size={24} strokeWidth={1.5} /> },
            { value: "portfolio", label: "Portfólio", icon: <Briefcase size={24} strokeWidth={1.5} /> },
            { value: "other", label: "Outro objetivo", icon: <Lightbulb size={24} strokeWidth={1.5} /> },
          ],
          otherPlaceholder: "Descreva o objetivo...",
        },
        {
          id: "q2",
          type: "textarea",
          question: "Descreva o público-alvo principal do site.",
          placeholder: "Ex: Empresários do setor de saúde, entre 35 e 55 anos, que buscam soluções de gestão...",
          required: true,
        },
      ],
    },

    // ─── SEÇÃO 2: IDENTIDADE VISUAL ──────────────────────────────────────
    {
      id: "section_2",
      title: "Identidade Visual",
      subtitle: "Vamos entender como comunicar a essência da sua marca.",
      icon: <Palette size={48} strokeWidth={1.5} />,
      questions: [
        {
          id: "q3",
          type: "single_choice",
          question: "A empresa possui identidade visual pronta? (Logo, cores, tipografia, etc.)",
          required: true,
          options: [
            { value: "sim", label: "Sim, tenho identidade visual completa", icon: <CheckCircle2 size={24} strokeWidth={1.5} /> },
            { value: "nao", label: "Não possuo ainda", icon: <XCircle size={24} strokeWidth={1.5} /> },
            { value: "parcial", label: "Tenho parcialmente (só logo, por exemplo)", icon: <AlertCircle size={24} strokeWidth={1.5} /> },
          ],
          note: "Caso tenha, por favor envie os arquivos para lukas.sandresp@gmail.com",
        },
        {
          id: "q4",
          type: "text",
          question: "Descreva a essência da marca em até 3 palavras.",
          placeholder: "Ex: inovador, elegante, acessível",
          required: true,
        },
        {
          id: "q5",
          type: "single_choice",
          question: "Qual tom de voz da comunicação gostaria de utilizar?",
          required: true,
          options: [
            { value: "formal", label: "Formal e Profissional", icon: <Briefcase size={24} strokeWidth={1.5} /> },
            { value: "amigavel", label: "Amigável e Próximo", icon: <MessageSquare size={24} strokeWidth={1.5} /> },
            { value: "jovem", label: "Jovem e Dinâmico", icon: <Zap size={24} strokeWidth={1.5} /> },
            { value: "serio", label: "Sério e Técnico", icon: <BarChart size={24} strokeWidth={1.5} /> },
            { value: "inspiracional", label: "Inspiracional e Motivador", icon: <Star size={24} strokeWidth={1.5} /> },
          ],
        },
        {
          id: "q6",
          type: "textarea",
          question: "Qual a Missão, Visão e Valores da sua empresa?",
          placeholder: "Missão: O que fazemos e para quem...\nVisão: Onde queremos chegar...\nValores: O que nos guia...",
          required: false,
        },
      ],
    },

    // ─── SEÇÃO 3: EMPRESA E MERCADO ──────────────────────────────────────
    {
      id: "section_3",
      title: "Empresa e Mercado",
      subtitle: "Nos conte mais sobre o seu negócio.",
      icon: <Globe size={48} strokeWidth={1.5} />,
      questions: [
        {
          id: "q7",
          type: "text",
          question: "Nome da empresa:",
          placeholder: "Nome da sua empresa",
          required: true,
        },
        {
          id: "q8",
          type: "textarea",
          question: "O que a empresa faz? Descreva brevemente seus produtos e/ou serviços.",
          placeholder: "Ex: Somos uma clínica de estética especializada em...",
          required: true,
        },
        {
          id: "q9",
          type: "textarea",
          question: "Qual o principal diferencial competitivo da empresa?",
          placeholder: "Por que um cliente deve escolher você ao invés da concorrência?",
          required: false,
        },
        {
          id: "q10",
          type: "text",
          question: "Cite 2 ou 3 concorrentes ou empresas de referência do seu setor:",
          placeholder: "Ex: Empresa A, Empresa B, Empresa C",
          required: false,
        },
      ],
    },

    // ─── SEÇÃO 4: REFERÊNCIAS E DESIGN ───────────────────────────────────
    {
      id: "section_4",
      title: "Referências e Design",
      subtitle: "Nos inspire! Vamos entender o estilo visual que você deseja.",
      icon: <LayoutTemplate size={48} strokeWidth={1.5} />,
      questions: [
        {
          id: "q11",
          type: "textarea",
          question: "Indique 2 ou 3 sites que você gosta (links ou nomes). O que você gosta neles?",
          placeholder: "Ex: https://exemplo.com — Gosto das cores e da organização das seções...",
          required: false,
        },
        {
          id: "q12",
          type: "multi_choice",
          question: "Que estilo visual você prefere para o site?",
          required: true,
          options: [
            { value: "moderno", label: "Moderno e Minimalista", icon: <Layout size={24} strokeWidth={1.5} /> },
            { value: "ousado", label: "Ousado e Impactante", icon: <Flame size={24} strokeWidth={1.5} /> },
            { value: "elegante", label: "Elegante e Sofisticado", icon: <Diamond size={24} strokeWidth={1.5} /> },
            { value: "colorido", label: "Colorido e Vibrante", icon: <Palette size={24} strokeWidth={1.5} /> },
            { value: "corporativo", label: "Corporativo e Sóbrio", icon: <Building2 size={24} strokeWidth={1.5} /> },
            { value: "criativo", label: "Criativo e Descontraído", icon: <PenTool size={24} strokeWidth={1.5} /> },
          ],
        },
        {
          id: "q13",
          type: "textarea",
          question: "Existe alguma coisa que você definitivamente NÃO quer no site?",
          placeholder: "Ex: Não quero muitas animações, não quero fundo escuro...",
          required: false,
        },
      ],
    },

    // ─── SEÇÃO 5: FUNCIONALIDADES E CONTEÚDO ─────────────────────────────
    {
      id: "section_5",
      title: "Funcionalidades e Conteúdo",
      subtitle: "O que seu site precisa ter para funcionar?",
      icon: <MonitorPlay size={48} strokeWidth={1.5} />,
      questions: [
        {
          id: "q14",
          type: "multi_choice",
          question: "Quais páginas são indispensáveis para o site?",
          required: true,
          options: [
            { value: "home", label: "Home / Página Inicial", icon: <LayoutTemplate size={24} strokeWidth={1.5} /> },
            { value: "sobre", label: "Sobre / Quem Somos", icon: <Users size={24} strokeWidth={1.5} /> },
            { value: "servicos", label: "Serviços / Produtos", icon: <ClipboardList size={24} strokeWidth={1.5} /> },
            { value: "portfolio", label: "Portfólio / Casos de Sucesso", icon: <Image size={24} strokeWidth={1.5} /> },
            { value: "blog", label: "Blog / Notícias", icon: <PenTool size={24} strokeWidth={1.5} /> },
            { value: "contato", label: "Contato / Fale Conosco", icon: <Phone size={24} strokeWidth={1.5} /> },
          ],
        },
        {
          id: "q15",
          type: "multi_choice",
          question: "Quais funcionalidades especiais o site precisa ter?",
          required: false,
          options: [
            { value: "whatsapp", label: "Botão de WhatsApp", icon: <MessageCircle size={24} strokeWidth={1.5} /> },
            { value: "formulario", label: "Formulário de Orçamento", icon: <Send size={24} strokeWidth={1.5} /> },
            { value: "newsletter", label: "Newsletter / E-mail Marketing", icon: <Mail size={24} strokeWidth={1.5} /> },
            { value: "instagram", label: "Feed do Instagram", icon: <Camera size={24} strokeWidth={1.5} /> },
            { value: "mapa", label: "Mapa / Localização", icon: <MapPin size={24} strokeWidth={1.5} /> },
            { value: "agendamento", label: "Agendamento Online", icon: <Calendar size={24} strokeWidth={1.5} /> },
            { value: "login", label: "Área de Login / Clientes", icon: <Lock size={24} strokeWidth={1.5} /> },
          ],
        },
        {
          id: "q16",
          type: "single_choice",
          question: "O conteúdo (textos e fotos) já está pronto?",
          required: true,
          options: [
            { value: "sim_tudo", label: "Sim, tenho tudo pronto", icon: <CheckCircle2 size={24} strokeWidth={1.5} /> },
            { value: "sim_parcial", label: "Tenho parte do conteúdo", icon: <AlertCircle size={24} strokeWidth={1.5} /> },
            { value: "nao", label: "Não, precisarei de ajuda para criar", icon: <PenTool size={24} strokeWidth={1.5} /> },
          ],
        },
      ],
    },

    // ─── SEÇÃO 6: PRAZO E CONTATO ─────────────────────────────────────────
    {
      id: "section_6",
      title: "Prazo e Contato",
      subtitle: "Quase lá! Só precisamos de alguns dados para entrar em contato.",
      icon: <Phone size={48} strokeWidth={1.5} />,
      questions: [
        {
          id: "q17",
          type: "text",
          question: "Nome do responsável pelo projeto:",
          placeholder: "Seu nome completo",
          required: true,
        },
        {
          id: "q18",
          type: "text",
          question: "E-mail para contato:",
          placeholder: "seu@email.com",
          required: true,
          inputType: "email",
        },
        {
          id: "q19",
          type: "text",
          question: "Telefone / WhatsApp:",
          placeholder: "(11) 9 9999-9999",
          required: true,
          inputType: "tel",
        },
        {
          id: "q20",
          type: "single_choice",
          question: "Qual a expectativa de prazo para o lançamento do site?",
          required: true,
          options: [
            { value: "urgente", label: "Urgente (menos de 30 dias)", icon: <Zap size={24} strokeWidth={1.5} /> },
            { value: "normal", label: "Normal (1 a 2 meses)", icon: <Calendar size={24} strokeWidth={1.5} /> },
            { value: "tranquilo", label: "Tranquilo (mais de 2 meses)", icon: <CheckCircle2 size={24} strokeWidth={1.5} /> },
            { value: "sem_prazo", label: "Sem prazo definido", icon: <AlertCircle size={24} strokeWidth={1.5} /> },
          ],
        },
        {
          id: "q21",
          type: "textarea",
          question: "Alguma informação adicional que queira compartilhar?",
          placeholder: "Conte-nos mais sobre seu projeto, dúvidas, ou qualquer detalhe que considere importante...",
          required: false,
        },
      ],
    },
  ],
};
