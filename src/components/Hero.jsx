import React from 'react';

const Hero = () => {
  const content = {
    heading: 'Experienced Personal Injury Lawyers in Utah',
    subheading: 'We are dedicated to ensuring that you and your loved ones can rest easily knowing that we are here to help. Our experienced attorneys fight for the compensation you deserve.',
    cta: [
      { label: 'Schedule a Free Consultation', link: '/contact' },
      { label: 'Call (801) 601-8323', link: 'tel:8016018323' }
    ],
    backgroundImage: '/images/larson-law-logo.png'
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
            <div className="flex flex-col sm:flex-row gap-4">
              {content.cta.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={`inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-colors duration-300 ${
                    index === 0 
                      ? 'bg-brand-1 text-white hover:bg-brand-3' 
                      : 'border-2 border-brand-1 text-brand-1 hover:bg-brand-1 hover:text-white'
                  }`}
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