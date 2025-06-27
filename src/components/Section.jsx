const Section = ({ id, title, children }) => (
  <section id={id} className="py-10 px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
    {children}
  </section>
);

export default Section;
