import React from 'react';

const Hero = () => {
  const content = {
    heading: 'Injury Lawyers',
    subheading: '[](https://larsonlawutah.com/#)',
    cta: [],
    backgroundImage: '',
    fullText: '# Injury Lawyers [](https://larsonlawutah.com/#)'
  };

  return (
    <section className="bg-brand-4 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-3 mb-4">
              {content.heading}
            </h1>
            <p className="text-lg md:text-xl text-brand-5 mb-8">
              {content.subheading}
            </p>
            <div className="flex space-x-4">
              {content.cta.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="inline-flex items-center px-4 py-2 border border-[#2563eb] text-[#2563eb] font-medium rounded-md hover:bg-[#2563eb] hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            {content.backgroundImage && (
              <img
                src={content.backgroundImage}
                alt="Hero Background"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;