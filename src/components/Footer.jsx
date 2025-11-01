import React from 'react';

const Footer = () => {
  const footerData = {
    text: 'Larson Law Utah - Experienced Personal Injury Attorneys',
    links: [
      {
        text: 'Phone: (801) 601-8323',
        href: 'tel:+18016018323',
        internal: false,
      },
      {
        text: 'American Institutes 10 Best',
        href: 'https://www.aiopia.org/american-institutes-10-best',
        internal: false,
      },
      {
        text: 'Business Rate Best of 2025',
        href: 'https://businessrate.co/detail_b?b_id=9488962&count=8',
        internal: false,
      },
      {
        text: 'Best of the Best Attorneys',
        href: 'https://bestofthebestattorneys.org/',
        internal: false,
      },
      {
        text: 'National Trial Lawyers Top 40',
        href: 'https://thenationaltriallawyers.org/top-40-about',
        internal: false,
      },
    ],
    address: '922 W Baxter Dr. STE 200, South Jordan, UT. 84095',
    hours: 'Mon-Thu: 8:30am-5:00pm | Fri: 8:30am-3:00pm',
    socialLinks: [
      { platform: 'Facebook', href: 'https://www.facebook.com/LarsonLawUtah/' },
      { platform: 'Instagram', href: 'https://www.instagram.com/larsonlawutah/' },
      { platform: 'TikTok', href: 'https://www.tiktok.com/@larson.law.utah' },
      { platform: 'Twitter', href: 'https://www.x.com/larsonlawutah/' }
    ]
  };

  return (
    <footer className="bg-brand-6 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p>{footerData.address}</p>
              <a
                href={footerData.links[0].href}
                className="block text-brand-4 hover:text-white transition-colors duration-300"
              >
                {footerData.links[0].text}
              </a>
              <p className="text-sm text-gray-300">{footerData.hours}</p>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Awards & Recognition</h3>
            <div className="space-y-2">
              {footerData.links.slice(1).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-brand-4 hover:text-white transition-colors duration-300"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-4 hover:text-white transition-colors duration-300"
                >
                  {social.platform}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              For a free personal injury consultation
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            Copyright © 2025 Larson Law Utah - All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            🤖 Generated with Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;