import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import FeaturesGrid, { Feature } from './FeaturesGrid';
import Testimonials, { Testimonial } from './Testimonials';
import Pricing, { PricingPlan } from './Pricing';
import Footer, { FooterColumn } from './Footer';
import { Rocket, ShieldCheck, Smartphone } from 'lucide-react';

const navbarLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Planos', href: '#pricing' },
];

const features: Feature[] = [
  {
    id: 1,
    title: 'Lançamento Rápido',
    description: 'Implemente soluções em minutos com nossa plataforma intuitiva.',
    icon: Rocket,
  },
  {
    id: 2,
    title: 'Segurança Garantida',
    description: 'Seus dados protegidos com criptografia de ponta a ponta.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Mobile First',
    description: 'Experiência otimizada para dispositivos móveis.',
    icon: Smartphone,
  },
];

const testimonials: Testimonial[] = [
  {
    avatar: 'https://i.pravatar.cc/150?img=1',
    name: 'João Silva',
    quote: 'A MobFacil revolucionou a forma como gerencio meu negócio! Recomendo a todos.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=2',
    name: 'Maria Oliveira',
    quote: 'Simples, rápido e seguro. A melhor solução do mercado.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'Carlos Souza',
    quote: 'O suporte é incrível e a plataforma é muito fácil de usar.',
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    price: 'R$0',
    features: ['1 Projeto', 'Suporte Básico', 'Acesso Web'],
    cta: 'Começar Grátis',
  },
  {
    name: 'Pro',
    price: 'R$49/mês',
    features: ['Projetos Ilimitados', 'Suporte Prioritário', 'Acesso Mobile'],
    cta: 'Assinar Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob Consulta',
    features: ['Soluções Personalizadas', 'Gerente Dedicado', 'Integrações Avançadas'],
    cta: 'Fale com Vendas',
  },
];

const footerColumns: FooterColumn[] = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#' },
      { label: 'Preços', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Contato', href: '#' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Ajuda', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
];

const LandingPageMock: React.FC = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar links={navbarLinks} />
      <main className="flex-1">
        <div id="hero">
          <Hero headline="Transforme sua gestão com MobFacil" subtext="A plataforma definitiva para facilitar o dia a dia do seu negócio. Simples, rápida e segura." />
        </div>
        <div id="features">
          <FeaturesGrid features={features} />
        </div>
        <div id="testimonials">
          <Testimonials testimonials={testimonials} />
        </div>
        <div id="pricing">
          <Pricing plans={pricingPlans} />
        </div>
      </main>
      <Footer columns={footerColumns} />
    </div>
  );
};

export default LandingPageMock;
