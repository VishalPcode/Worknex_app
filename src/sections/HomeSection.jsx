import React from 'react';
import Section from '../components/Section';

const stats = [
  { label: 'Founders Experience', value: '5+ Years' },
  { label: 'Projects Delivered', value: '150+ Projects' },
  { label: 'Team Professionals', value: '10+ Team' },
  { label: 'Happy Customers', value: '99%' },
  { label: 'Company Experience', value: '2+ Years' },
  { label: 'Countries Served', value: '5+ Countries' },
  { label: 'Top Rated on Upwork', value: 'Top Rated' },
  { label: 'Top 10 on Clutch', value: 'Top 10' },
];

const HomeSection = () => (
  <div className="bg-black text-white py-3">
    <Section id="home">
        <h1 className="text-4xl font-bold py-4">Welcome to <span className='text-blue-400'>Worknex</span> </h1>
      {/* Intro Text */}
      <div className="text-center max-w-3xl mx-auto text-lg mt-2 space-y-4">
        <p>
          Your trusted partner in digital success. At Worknex, we bridge the gap between
          cutting-edge technology and business goals, delivering customized solutions that
          drive impact.
        </p>
        <p>
          Whether you're a startup or a scaling enterprise, we help turn ideas into impactful digital experiences.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-950 p-4 rounded-lg border border-transparent hover:border-blue-500 transition-all duration-300 text-center"
            >
              <p className="text-2xl font-bold text-blue-400  mb-1">{item.value}</p>
              <p className="text-sm font-medium text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

export default HomeSection;
