import React from 'react';

const ResourcesPage = () => {
  const resources = [
    {
      title: "Understanding Personal Injury Claims",
      description: "Learn about the personal injury claim process, what to expect, and how to protect your rights after an accident.",
      category: "Legal Guides"
    },
    {
      title: "What to Do After a Car Accident",
      description: "Step-by-step guide on what to do immediately after a car accident to protect yourself and your claim.",
      category: "Accident Response"
    },
    {
      title: "Insurance Bad Faith Claims",
      description: "Understanding when insurance companies act in bad faith and what you can do about it.",
      category: "Insurance"
    },
    {
      title: "Calculating Damages in Personal Injury Cases",
      description: "Learn about the different types of damages available in personal injury cases and how they are calculated.",
      category: "Legal Guides"
    },
    {
      title: "Medical Treatment After an Injury",
      description: "Important information about seeking medical treatment and documenting your injuries for your case.",
      category: "Medical"
    },
    {
      title: "Statute of Limitations in Utah",
      description: "Understanding the time limits for filing personal injury claims in Utah.",
      category: "Legal Guides"
    }
  ];

  const categories = ["All", "Legal Guides", "Accident Response", "Insurance", "Medical"];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-6 mb-4">
            Legal Resources
          </h1>
          <p className="text-lg text-brand-5 max-w-3xl mx-auto">
            Access helpful information and resources about personal injury law, your rights, 
            and what to expect during the legal process.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border-2 border-brand-1 text-brand-1 hover:bg-brand-1 hover:text-white transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <span className="inline-block bg-brand-1 text-white text-xs px-2 py-1 rounded-full mb-3">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold text-brand-6 mb-3">
                  {resource.title}
                </h3>
                <p className="text-brand-5 mb-4">
                  {resource.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-brand-1 hover:text-brand-3 font-medium transition-colors duration-300"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-brand-4 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-brand-6 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-brand-6 mb-2">
                How much does it cost to hire a personal injury attorney?
              </h3>
              <p className="text-brand-5">
                At Larson Law, we work on a contingency fee basis, which means you don't pay attorney fees 
                unless we win your case. We offer free consultations to discuss your case.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-6 mb-2">
                How long do I have to file a personal injury claim in Utah?
              </h3>
              <p className="text-brand-5">
                In Utah, the statute of limitations for most personal injury claims is 4 years from the date 
                of the accident. However, there are exceptions, so it's important to consult with an attorney 
                as soon as possible.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-6 mb-2">
                What should I do immediately after an accident?
              </h3>
              <p className="text-brand-5">
                Seek medical attention immediately, even if you don't think you're seriously injured. 
                Document the scene, gather contact information from witnesses, and contact our office 
                as soon as possible to protect your rights.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-brand-6 mb-4">
            Have Questions About Your Case?
          </h2>
          <p className="text-lg text-brand-5 mb-8">
            Contact us today for a free consultation with our experienced personal injury attorneys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-1 hover:bg-brand-3 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:8016018323"
              className="bg-transparent border-2 border-brand-1 hover:bg-brand-1 hover:text-white text-brand-1 px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Call (801) 601-8323
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;