import React from 'react';
import { LucideIcon, Rocket, ShieldCheck, Smartphone } from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeaturesGridProps {
  features: Feature[];
}

const iconClasses = "w-8 h-8 text-primary-500 mb-4";

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Funcionalidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-card rounded-xl p-8 flex flex-col items-center shadow-lg border border-border">
              <feature.icon className={iconClasses} />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
