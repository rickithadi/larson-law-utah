import React from 'react';

const Section2 = () => {
  return (
    <section className="bg-gray-100 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Larson Law</h2>
            <a href="https://larsonlawutah.com/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <span>![Bryan Larson</span>
            </a>
          </div>
          <div className="flex justify-end">
            <img src="https://via.placeholder.com/400x400" alt="Bryan Larson" className="w-full md:w-auto max-w-xs rounded-lg shadow-lg" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;