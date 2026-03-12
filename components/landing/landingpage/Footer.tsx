import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  columns: FooterColumn[];
}

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
];

const Footer: React.FC<FooterProps> = ({ columns }) => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="text-lg font-semibold text-white mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((s, i) => (
          <a key={i} href={s.href} className="text-gray-300 hover:text-primary-400 transition-colors">
            <s.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} MobFacil. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
