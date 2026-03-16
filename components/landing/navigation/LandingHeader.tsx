'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, OrbitIcon } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/shared/ui/sheet';
import { LandingFooterLink } from '@/components/landing/footer/LandingFooterLink';
import clsx from 'clsx';

import logo from '@/src/images/logo_mobfacil.svg';

/**
 * A component that renders the navigation bar for the landing page.
 * It includes a logo and a list of navigation items. On mobile, it collapses into a burger + side sheet.
 */
export const LandingHeader = ({
  logoComponent,
  children,
  withBackground = false,
  variant = 'primary',
  fixed = false,
  className,
  sheetClassName,
}: {
  logoComponent?: React.ReactNode;
  children: React.ReactNode;
  withBackground?: boolean;
  variant?: 'primary' | 'secondary';
  fixed?: boolean;
  className?: string;
  sheetClassName?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx(
        'flex items-center justify-between gap-6 p-4 w-full max-w-full container-narrow lg:rounded-lg',
        fixed
          ? 'fixed top-8 left-0 right-0 z-50 dark:bg-black/30 backdrop-blur-xl border-b border-border'
          : '',
        withBackground ? 'lg:m-4 justify-self-center' : '',
        withBackground && variant === 'primary'
          ? 'bg-black/10 dark:bg-primary-900/10 border border-primary-100/30 dark:border-primary-900/30'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10 border border-secondary-100/30 dark:border-secondary-900/30'
          : '',
        className,
      )}
    >
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          <div className="flex items-center gap-3 justify-between">
            {logoComponent || (
              <>
                <div className="hidden sm:flex h-8 w-32 items-center overflow-hidden">
                  <img
                    src={logo.src}
                    alt="MobFacil Logo"
                    className="h-full w-full"
                  />
                </div>
              </>
            )}
          </div>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">{children}</div>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="px-3">
              <MenuIcon className="h-6 w-6 mr-2" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className={sheetClassName}>
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="h-10 w-32 shrink-0">
                  <img
                    src={logo.src}
                    alt="MobFacil Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-white/80">MobFacil</span>
              </Link>
            </div>

            <nav className="flex flex-col gap-4 mt-2 text-lg">{children}</nav>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3 text-sm text-white/80">
              <LandingFooterLink href="/privacidade" className="text-white/80 hover:text-white">
                Privacidade
              </LandingFooterLink>
              <LandingFooterLink href="/termos" className="text-white/80 hover:text-white">
                Termos de Uso
              </LandingFooterLink>
              <LandingFooterLink href="/cookies" className="text-white/80 hover:text-white">
                Cookies
              </LandingFooterLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
