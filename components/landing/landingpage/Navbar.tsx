"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '../../shared/ui/button';

export interface NavbarProps {
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-xl text-primary-500">MobFacil</span>
        <ul className="flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-white hover:text-primary-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="ml-8 px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg transition-colors">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
