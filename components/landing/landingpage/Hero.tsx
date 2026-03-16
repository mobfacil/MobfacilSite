import React from 'react';
import Image from 'next/image';
import techVector from '@/src/images/tech_vector.png';
import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryImageCtaSection, LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';

export interface HeroProps {
  headline: string;
  subtext: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subtext }) => {
  return (
    <section className="bg-background text-white py-12 h-[100dvh]">
      <div className="max-w-7xl mx-auto px-6 flex h-full items-center justify-center lg:justify-between">
        <LandingPrimaryTextCtaSection
          titleComponent={
            <h1 className="font-normal text-2xl md:text-3xl lg:text-6xl leading-tight md:max-w-2xl">
              Otimize suas{' '}
              <span className="font-semibold underline decoration-primary-500 decoration-4 decoration-wavy">
                vendas
              </span><br/>
              com confiança e segurança
            </h1>
          }
          description="Utilize dados públicos e inteligência analítica para avaliar risco de crédito com mais precisão e menos inadimplência."
          textPosition="center"
        >
          {/* <Button size="xl" asChild>
            <a href="#">Iniciar Teste Gratuito</a>
          </Button> */}
        </LandingPrimaryTextCtaSection>
      </div>
    </section>
  );
};

export default Hero;
