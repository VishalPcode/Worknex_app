import React, { useState, useEffect } from "react";

const CarouselSplit = () => {
  const items = [
    {
      title: "Our Journey Begins",
      description: "We started with a vision to empower businesses with technology.",
    },
    {
      title: "Innovative Solutions",
      description: "Our team crafts tailored digital experiences for our clients.",
    },
    {
      title: "Client Success Stories",
      description: "We've helped hundreds of businesses grow and thrive.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <section
      className="w-full h-screen flex items-center justify-start px-6 md:px-16"
      style={{
        backgroundImage: "url('/tech.jpg')", // ✅ using public image
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full md:w-1/2 bg-gray-900 bg-opacity-60 p-6 md:p-12 rounded-md">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 transition-all duration-500">
          {items[current].title}
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-6 transition-all duration-500">
          {items[current].description}
        </p>

        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-yellow-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSplit;
