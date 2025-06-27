import React from 'react';
import Section from '../components/Section';

const AboutSection = () => (
  <div className="bg-gray-950 py-16">
    <Section id="about">
        <h2 className="text-3xl font-bold text-yellow-500 text-center">About Us</h2>
      <div className="text-gray-300 max-w-5xl mx-auto text-center space-y-6 text-lg px-4">
        <p>
          We are a customer-centric service company focused on creating modern,
          scalable, and accessible digital solutions.
        </p>
        <p>
          At <strong className="text-yellow-600">Worknex</strong>, our mission is to help businesses thrive in the digital age through
          innovative design, cutting-edge technology, and a relentless commitment to quality. Every client is unique —
          and we embrace that by crafting tailored solutions to meet specific goals.
        </p>
        <p>
          Our team consists of highly skilled professionals in web development, UI/UX design, and digital marketing.
          From small startups to large enterprises, we create digital experiences that deliver results.
        </p>
        <p>
          Transparency, collaboration, and continuous improvement are at the heart of what we do. Let’s build
          something extraordinary — together.
        </p>
      </div>
    </Section>
  </div>
);

export default AboutSection;
