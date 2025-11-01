import React from 'react';

const Section5 = () => {
  const content = {
    id: 'section-4',
    headings: [
      {
        level: 'h4',
        text: 'Bryan A. Larson',
      },
    ],
    paragraphs: [
      'Bryan has been recognized by "Utah Business Magazine" as one of Utah\'s Legal Elite and Lawyers of Distinction in personal injury law. He is one of The American Society of Legal Advocates Top 100 Litigation Lawyer. He was also recognized by the American Trial Lawyers Association as one of the top 100 trial lawyers in Utah.',
    ],
    images: [],
    buttons: [
      {
        text: '![Adam Larson',
        href: 'https://larsonlawutah.com/',
      },
    ],
    html: '',
    availableImages: [],
  };

  return (
    <section
      id={content.id}
      className="bg-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <h4
              className="text-2xl font-semibold text-blue-700 sm:text-3xl"
              aria-label={content.headings[0].text}
            >
              {content.headings[0].text}
            </h4>
            <p className="mt-4 text-base text-gray-700 sm:mt-6 sm:text-lg">
              {content.paragraphs[0]}
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href={content.buttons[0].href}
              className="inline-flex items-center space-x-2 rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>{content.buttons[0].text}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;