import React from 'react';

const TeamPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-6 mb-4">
            Larson Law Attorneys
          </h1>
          <p className="text-lg text-brand-5 max-w-3xl mx-auto">
            Meet our experienced legal team dedicated to fighting for your rights and securing the compensation you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bryan A. Larson */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-4">
              <img 
                src="/images/team/bryan-larson.jpg" 
                alt="Bryan A. Larson - Managing Partner at Larson Law"
                className="w-full h-80 object-cover object-center"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-brand-6 mb-4">Bryan A. Larson</h2>
              <div className="text-brand-5 space-y-4">
                <p>
                  Bryan's highly successful practice focuses on insurance law and the representation of injured people. 
                  Bryan has successfully tried numerous jury trials on both the plaintiff and defense sides.
                </p>
                <p>
                  Bryan has been recognized by "Utah Business Magazine" as one of Utah's Legal Elite and Lawyers of 
                  Distinction in personal injury law. He is one of The American Society of Legal Advocates Top 100 
                  Litigation Lawyer.
                </p>
              </div>
            </div>
          </div>

          {/* Adam G. Larson */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-3 aspect-h-4">
              <img 
                src="/images/team/adam-larson.jpg" 
                alt="Adam G. Larson - Attorney at Larson Law"
                className="w-full h-80 object-cover object-center"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-brand-6 mb-4">Adam G. Larson</h2>
              <div className="text-brand-5 space-y-4">
                <p>
                  Adam Larson is a top-rated attorney practicing in Utah. He is a four-time selection to 
                  Super Lawyers Rising Stars from 2018 - 2021, among other awards and distinctions.
                </p>
                <p>
                  During his career, Adam has procured verdicts and settlements for his clients ranging 
                  from thousands to millions of dollars.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <div className="bg-brand-4 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-brand-6 mb-8 text-center">
            Larson Law Paralegals and Office Staff
          </h2>
          <p className="text-lg text-brand-5 text-center max-w-4xl mx-auto">
            Larson Law's experienced paralegals and staff are diligent in supporting the legal team and clients 
            through research, investigations, claims, confidentiality, professionalism, and teamwork. The team 
            is always up to date with laws and insurance that govern personal injury and injuries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;