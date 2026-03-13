'use client';

import React from 'react';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';

export interface NavbarProps {
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <LandingHeader>
      <LandingHeaderMenuItem
        href="#"
        label="Home"
      />

      <LandingHeaderMenuItem
        href="#"
        label="Serviços"
      />

      <LandingHeaderMenuItem
        href="#"
        label="Clientes"
      />
    </LandingHeader>
  );
};

export default Navbar;
