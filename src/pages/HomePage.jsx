import React from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      {/* Attorney Spotlight Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-6 mb-4">
              Experienced Legal Representation
            </h2>
            <p className="text-lg text-brand-5 max-w-3xl mx-auto">
              Our experienced attorneys have successfully represented thousands of clients throughout Utah, 
              securing millions in compensation for personal injury victims.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/team/bryan-larson.jpg" 
                alt="Bryan A. Larson - Managing Partner"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-6 mb-4">Bryan A. Larson</h3>
              <p className="text-brand-5 mb-4">
                Bryan has been recognized by Utah Business Magazine as one of Utah's Legal Elite and 
                Lawyers of Distinction in personal injury law. He is one of The American Society of 
                Legal Advocates Top 100 Litigation Lawyers.
              </p>
              <p className="text-brand-5 mb-6">
                With extensive experience in insurance law and personal injury representation, Bryan has 
                successfully tried numerous jury trials and secured substantial recoveries for clients.
              </p>
              <a
                href="/team"
                className="inline-flex items-center text-brand-1 hover:text-brand-3 font-medium transition-colors duration-300"
              >
                Meet Our Team
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-16 bg-brand-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-6 mb-4">
              Practice Areas
            </h2>
            <p className="text-lg text-brand-5 max-w-3xl mx-auto">
              We handle a wide range of personal injury cases throughout Utah
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/images/practice-areas/car-accident.jpg" 
                alt="Automobile Injuries"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-brand-6 mb-2">Automobile Injuries</h3>
              <p className="text-brand-5">Expert representation for car accident victims</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/images/practice-areas/medical-malpractice.jpg" 
                alt="Medical Malpractice"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-brand-6 mb-2">Medical Malpractice</h3>
              <p className="text-brand-5">Holding medical professionals accountable</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/images/practice-areas/wrongful-death.jpg" 
                alt="Wrongful Death"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-brand-6 mb-2">Wrongful Death</h3>
              <p className="text-brand-5">Compassionate guidance for families</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/practice-areas"
              className="bg-brand-1 hover:bg-brand-3 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              View All Practice Areas
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-2 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get the Legal Help You Deserve
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't face your legal challenges alone. Our experienced attorneys are here to fight for your rights.
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
              className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-2 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Call (801) 601-8323
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;