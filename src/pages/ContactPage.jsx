import React from 'react';

const ContactPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-6 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-brand-5 max-w-3xl mx-auto">
            Ready to discuss your case? Contact Larson Law today for a free personal injury consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-brand-6 mb-6">
              For a free personal injury consultation
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-5 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-1 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-5 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-1 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-5 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-1 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-5 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-1 focus:border-transparent"
                ></textarea>
              </div>
              <div>
                <label htmlFor="files" className="block text-sm font-medium text-brand-5 mb-1">
                  Attach Files
                </label>
                <input
                  type="file"
                  id="files"
                  name="files"
                  multiple
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-1 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-1 hover:bg-brand-3 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            <p className="text-sm text-brand-5 mt-4">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="https://policies.google.com/privacy" className="text-brand-1 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms" className="text-brand-1 hover:underline">
                Terms of Service
              </a>{' '}
              apply.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-brand-4 rounded-lg p-8">
              <h3 className="text-xl font-bold text-brand-6 mb-4">
                Call today for a free personal injury consultation
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-brand-6 text-lg">Larson Law</h4>
                  <p className="text-brand-5">
                    922 W Baxter Dr. STE 200<br />
                    South Jordan, UT 84095
                  </p>
                </div>
                <div>
                  <p className="text-brand-5">
                    Call or text:{' '}
                    <a href="tel:8016018323" className="text-brand-1 hover:underline font-medium">
                      (801) 601-8323
                    </a>
                  </p>
                  <p className="text-brand-5">
                    Fax:{' '}
                    <a href="tel:8019901744" className="text-brand-1 hover:underline">
                      (801) 990-1744
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-brand-6 mb-4">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-brand-5">Mon</span>
                  <span className="text-brand-5">08:30 am – 05:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-5">Tue</span>
                  <span className="text-brand-5">08:30 am – 05:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-5">Wed</span>
                  <span className="text-brand-5">08:30 am – 05:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-5">Thu</span>
                  <span className="text-brand-5">08:30 am – 05:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-5">Fri</span>
                  <span className="text-brand-5">08:30 am – 03:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-5">Sat</span>
                  <span className="text-brand-5">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-5">Sun</span>
                  <span className="text-brand-5">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-brand-2 rounded-lg p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <a
                href="tel:8016018323"
                className="text-2xl font-bold hover:text-gray-200 transition-colors duration-300"
              >
                (801) 601-8323
              </a>
              <p className="mt-2">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;