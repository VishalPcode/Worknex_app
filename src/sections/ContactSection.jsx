import React from 'react';
import Section from '../components/Section';

const ContactSection = () => (
  <Section id="contact" title="Contact Us">
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-4 max-w-md mx-auto mt-6"
    >
      <input
        type="text"
        placeholder="Name"
        required
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <textarea
        placeholder="Message"
        required
        className="border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition"
      >
        Send
      </button>
    </form>
  </Section>
);

export default ContactSection;
