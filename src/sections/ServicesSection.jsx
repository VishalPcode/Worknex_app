import React from 'react';
import Section from '../components/Section';

const services = [
  'Web Development',
  'UI/UX Design',
  'Digital Marketing',
  'SEO Optimization',
  'Content Creation',
  'Mobile App Development',
  'Brand Strategy',
  'Cloud Integration'
];

const ServicesSection = () => (
  <div className="bg-black text-white py-12">
    <Section id="services">
        <h2 className="text-3xl font-bold text-white text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-6">
        {services.map((service) => (
          <div
            key={service}
            className="bg-gray-950 p-6 rounded-lg border border-transparent hover:border-blue-500 transition-all duration-300 text-center"
          >
            <h3 className="text-lg font-semibold text-blue-400">{service}</h3>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

export default ServicesSection;
