import React from 'react';

export default function Section3() {
  return (
    <section className="bg-gray-100 py-20 sm:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-0">
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Bryan A. Larson</h4>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-gray-600 leading-relaxed">
              {/* Content goes here */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}