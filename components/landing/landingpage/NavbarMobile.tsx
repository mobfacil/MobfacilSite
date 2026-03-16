'use client';

import React from 'react';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';

export interface NavbarProps {
  links: { label: string; href: string }[];
}

const NavbarMobile: React.FC<NavbarProps> = ({ links }) => {
  return (
    <div className=''>
      <LandingHeader
        fixed
        className="bg-transparent dark:bg-transparent !border-none !border-0 !shadow-none !backdrop-blur-0"
        sheetClassName="bg-neutral-900 text-white border-l border-white/10"
      >
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
    </div>
  );
};

export default NavbarMobile;
