import React from 'react';

export interface HeroProps {
  headline: string;
  subtext: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subtext }) => {
  return (
    <section className="bg-background text-white py-24 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center max-w-3xl mb-6 leading-tight">
        {headline}
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-xl mb-10">{subtext}</p>
      <div className="w-full max-w-2xl h-64 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 opacity-80 flex items-center justify-center">
        <span className="text-2xl text-white/60">[Dashboard/Imagem Mockada]</span>
      </div>
    </section>
  );
};

export default Hero;
