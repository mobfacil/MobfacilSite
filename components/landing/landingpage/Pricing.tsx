import React from 'react';

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface PricingProps {
  plans: PricingPlan[];
}

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Planos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`bg-card rounded-xl p-8 flex flex-col items-center shadow-lg border-2 ${plan.highlight ? 'border-primary-500' : 'border-border'}`}
            >
              <h3 className="text-xl font-semibold text-white mb-2 text-center">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary-500 mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-gray-300 text-center">{f}</li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg transition-colors">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
