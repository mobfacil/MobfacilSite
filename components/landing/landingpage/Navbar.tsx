'use client';

import React from 'react';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';

export interface NavbarProps {
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <LandingHeader fixed withBackground>
      <LandingHeaderMenuItem
        href="#hero"
        label="Home"
      />

      <LandingHeaderMenuItem
        href="#features"
        label="Serviços"
      />

      <LandingHeaderMenuItem
        href="#testimonials"
        label="Clientes"
      />
    </LandingHeader>
  );
};

export default Navbar;
