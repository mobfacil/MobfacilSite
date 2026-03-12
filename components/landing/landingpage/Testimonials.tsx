import React from 'react';

export interface Testimonial {
  avatar: string;
  name: string;
  quote: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-8 flex flex-col items-center shadow-lg border border-border">
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 border-4 border-primary-500" />
              <p className="text-gray-300 italic mb-4 text-center">“{t.quote}”</p>
              <span className="font-semibold text-white">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
