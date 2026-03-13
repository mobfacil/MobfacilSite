import React from 'react';
import { LandingTestimonialGrid } from '../testimonial/LandingTestimonialGrid';
import { title } from 'process';

import senffLogo from '@/src/images/senff_logo.png';
import festcardLogo from '@/src/images/festcard_logo.svg';
import paymobiLogo from '@/src/images/paymobi_logo.svg';
import difabricaLogo from '@/src/images/difabrica_logo.jpg';



const Testimonials: React.FC = () => {
  const testimonialItems = [
      { imageSrc: senffLogo },
      { imageSrc: festcardLogo },
      { imageSrc: paymobiLogo },
      { imageSrc: difabricaLogo },
];

return (
  <LandingTestimonialGrid
    title="Clientes Satisfeitos"
    description=""
    testimonialItems={testimonialItems}
  />
)
};

export default Testimonials
