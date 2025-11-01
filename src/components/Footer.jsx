import React from 'react';

const Footer = () => {
  const footerData = {
    text: '',
    links: [
      {
        text: 'Phone: (801) 601-8323',
        href: 'tel:+18016018323',
        internal: false,
      },
      {
        text: '',
        href: 'https://www.aiopia.org/american-institutes-10-best',
        internal: false,
      },
      {
        text: '',
        href: 'https://businessrate.co/detail_b?b_id=9488962&count=8',
        internal: false,
      },
      {
        text: '',
        href: 'https://bestofthebestattorneys.org/',
        internal: false,
      },
      {
        text: '',
        href: 'https://thenationaltriallawyers.org/top-40-about',
        internal: false,
      },
    ],
    html: '',
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <a
              href={footerData.links[0].href}
              className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
            >
              {footerData.links[0].text}
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href={footerData.links[1].href}
              className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
            >
              {footerData.links[1].text}
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href={footerData.links[2].href}
              className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
            >
              {footerData.links[2].text}
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href={footerData.links[3].href}
              className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
            >
              {footerData.links[3].text}
            </a>
            <a
              href={footerData.links[4].href}
              className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
            >
              {footerData.links[4].text}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;