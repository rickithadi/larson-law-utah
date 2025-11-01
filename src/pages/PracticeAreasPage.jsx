import React from 'react';

const PracticeAreasPage = () => {
  const practiceAreas = [
    {
      title: "Automobile Injuries",
      description: "Occasionally, a claim requires a demand for punitive damages. Insurance does not pay for punitive damages. Nevertheless, a claim for punitive damages can be an effective way to cause the insurance carrier to provide more complete and thorough justice for the victim.",
      href: "/automobile-injuries",
      image: "/images/practice-areas/car-accident.jpg"
    },
    {
      title: "Aviation Injuries", 
      description: "At Larson Law, we will thoroughly review FAA reports and analyze every claim made by pilots, aircraft control, aircraft manufacturers, plane mechanics, and corporate representatives to ensure justice is served and your rights are protected.",
      href: "/aviation-injuries",
      image: "/images/practice-areas/aviation-injuries.jpg"
    },
    {
      title: "Back and Spinal Cord Injuries",
      description: "We will consult and work with your medical specialists to determine the extent of your injuries and your prognosis for recovery. Through our extensive investigation and use of widely respected experts, we can obtain the maximum recovery available to you.",
      href: "/back-and-spinal-injuries",
      image: "/images/practice-areas/medical-malpractice.jpg"
    },
    {
      title: "Boat Injuries",
      description: "At Larson Law, we are experienced with boating injuries. If you are involved in a boating accident in Utah, we can help. We can obtain appropriate compensation for you from the negligent parties.",
      href: "/boat-injuries",
      image: "/images/practice-areas/slip-and-fall.jpg"
    },
    {
      title: "Brain Injuries",
      description: "Brain injuries can have devastating and long-lasting effects. Our experienced attorneys understand the complexities of traumatic brain injury cases and work tirelessly to secure the compensation you need for medical care and rehabilitation.",
      href: "/brain-injuries",
      image: "/images/practice-areas/brain-injuries.jpg"
    },
    {
      title: "Burn Injuries",
      description: "Severe burn injuries often require extensive medical treatment and rehabilitation. We help victims of burn injuries pursue compensation for medical expenses, pain and suffering, and lost wages.",
      href: "/burn-injuries",
      image: "/images/practice-areas/medical-malpractice.jpg"
    },
    {
      title: "Catastrophic Injuries",
      description: "Catastrophic injuries change lives forever. Our attorneys have experience handling complex cases involving severe, life-altering injuries that require ongoing medical care and support.",
      href: "/catastrophic-injuries",
      image: "/images/practice-areas/brain-injuries.jpg"
    },
    {
      title: "Construction Site Injuries",
      description: "Construction sites present numerous hazards. If you've been injured on a construction site, we can help you navigate workers' compensation claims and potential third-party liability cases.",
      href: "/construction-injuries",
      image: "/images/practice-areas/construction-injuries.jpg"
    },
    {
      title: "Medical Malpractice",
      description: "When medical professionals fail to provide the standard of care, patients can suffer serious harm. We help victims of medical negligence seek justice and compensation for their injuries.",
      href: "/medical-malpractice",
      image: "/images/practice-areas/medical-malpractice.jpg"
    },
    {
      title: "Wrongful Death",
      description: "The loss of a loved one due to someone else's negligence is devastating. We compassionately guide families through wrongful death claims to seek justice and financial security.",
      href: "/wrongful-death",
      image: "/images/practice-areas/wrongful-death.jpg"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-6 mb-4">
            Practice Areas
          </h1>
          <p className="text-lg text-brand-5 max-w-3xl mx-auto">
            Our experienced attorneys handle a wide range of personal injury cases throughout Utah. 
            We are dedicated to fighting for the rights of injured individuals and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {area.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-6 mb-3">
                  {area.title}
                </h3>
                <p className="text-brand-5 mb-4 line-clamp-4">
                  {area.description}
                </p>
                <a
                  href={area.href}
                  className="inline-flex items-center text-brand-1 hover:text-brand-3 font-medium transition-colors duration-300"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-brand-2 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Legal Help?
          </h2>
          <p className="text-xl mb-6">
            Contact us today for a free consultation about your personal injury case.
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
      </div>
    </div>
  );
};

export default PracticeAreasPage;