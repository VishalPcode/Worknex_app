import React from 'react';
import Section from '../components/Section';
import AccordionItem from '../components/AccordionItem';

const faqs = [
  {
    question: 'What services does Worknex offer?',
    answer: 'We offer Web Development, UI/UX Design, and Digital Marketing services.'
  },
  {
    question: 'How can I contact Worknex?',
    answer: 'You can use the contact form on our website to reach us directly.'
  },
  {
    question: 'Is this a paid service?',
    answer: 'Yes, we provide tailored solutions depending on your business needs.'
  },
];

const AccordionSection = () => (
  <div className="bg-green-400 text-white py-12 rounded-br-[100px]">
    <Section id="faq" title="Frequently Asked Questions">
      <div className="max-w-5xl mx-auto mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  </div>
);

export default AccordionSection;
