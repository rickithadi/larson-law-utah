import React, { useState } from 'react';

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const resources = [
    {
      title: "McDonald's Scalding Coffee Case - The Real Facts",
      description: "The truth behind the infamous McDonald's hot coffee lawsuit, including all the facts that often get lost over time.",
      category: "Legal Articles",
      content: "Fact sheet about the real McDonald's scalding coffee case, including details about Stella Liebeck's injuries and the legal proceedings."
    },
    {
      title: "Will I Harm Someone by Filing a Personal Injury Case?",
      description: "Understanding how personal injury claims affect the at-fault party and why you shouldn't feel guilty about seeking compensation.",
      category: "Legal Articles",
      content: "A comprehensive explanation of how personal injury claims work and the real impact on the person who caused the accident."
    },
    {
      title: "Challenges to PIP Payments",
      description: "Learn about increasing challenges to Personal Injury Protection payments and how to combat unfair denials.",
      category: "Legal Articles",
      content: "Detailed analysis of how insurance companies use medical records reviewing companies to challenge PIP payments."
    },
    {
      title: "What to Do If Involved in a Crash",
      description: "Complete 15-step guide on what to do immediately after a car accident to protect yourself and your claim.",
      category: "Accident Response",
      content: "Detailed checklist including calling police, gathering evidence, seeking medical care, and contacting legal counsel."
    },
    {
      title: "Do I Really Need a Lawyer?",
      description: "Understanding why legal representation is crucial for personal injury cases and the risks of handling claims yourself.",
      category: "Legal Guides",
      content: "Explanation of the complex legal world and why experienced attorneys protect you from costly mistakes."
    },
    {
      title: "Larson Law Newsletter Subscription",
      description: "Subscribe to our monthly newsletter for legal insights and updates on personal injury law in Utah.",
      category: "Newsletters",
      content: "Our Larson Law Newsletter is for everyone, providing valuable legal information and case updates."
    },
    {
      title: "BackTalk Newsletter for Chiropractors",
      description: "Specialized newsletter focused on legal issues affecting chiropractors and their practices.",
      category: "Newsletters",
      content: "The BackTalk Newsletter is specifically geared toward chiropractors and healthcare providers."
    }
  ];

  const faqs = [
    {
      question: "What to do if involved in a crash?",
      answer: "1. Call the police and ask that they fill out an accident report. 2. Get names, addresses, and phone numbers for all witnesses. 3. Take photographs of all vehicles and property damage. 4. Write down statements made by the other driver(s). 5. Do not admit guilt. 6. Don't deny that you are injured. 7. Complain of pain if you legitimately feel hurt. 8. If an ambulance is offered, take it. 9. Get checked out in the ER. 10. Get the name and location of where your car will be towed. 11. Seek medical treatment before dealing with your car. 12. Call insurance to report accident, do not give a recorded statement until after you retain legal counsel. 13. Seek proper medical care from your Chiropractor as soon as possible. 14. Begin aggressive Chiropractic medical treatment. 15. Contact an attorney as soon after you see your chiropractor as possible."
    },
    {
      question: "Do I really need a lawyer?",
      answer: "Insurance companies and others will assure you that you can handle the matter yourself and that hiring an attorney will just result in lost income. The legal world is complex, with many traps for the unwary or inexperienced. An experienced attorney represents your interests and protects you from those traps. A person handling a claim himself and obtaining $1,000 may be disappointed to learn later that his claim was actually worth much more."
    },
    {
      question: "Does Larson Law handle other matters besides personal injury cases?",
      answer: "We primarily focus on personal injuries and related injuries described in our Practice Areas. If we can't help, we might be able to refer you to someone who can. Please give us a call."
    },
    {
      question: "How much does it cost to hire a personal injury attorney?",
      answer: "At Larson Law, we work on a contingency fee basis, which means you don't pay attorney fees unless we win your case. We offer free consultations to discuss your case."
    },
    {
      question: "How long do I have to file a personal injury claim in Utah?",
      answer: "In Utah, the statute of limitations for most personal injury claims is 4 years from the date of the accident. However, there are exceptions, so it's important to consult with an attorney as soon as possible."
    }
  ];

  const categories = ["All", "Legal Articles", "Legal Guides", "Accident Response", "Newsletters"];
  
  const filteredResources = activeCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

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
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border-2 transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-brand-1 text-white border-brand-1'
                  : 'border-brand-1 text-brand-1 hover:bg-brand-1 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredResources.map((resource, index) => (
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

        {/* Newsletter Subscription */}
        <div className="bg-brand-4 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-brand-6 mb-6 text-center">
            Subscribe to Our Newsletters
          </h2>
          <p className="text-lg text-brand-5 text-center mb-8">
            Our Larson Law Newsletter is for everyone, whereas the BackTalk Newsletter is more geared toward chiropractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-brand-5 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-1"
            />
            <button className="bg-brand-1 hover:bg-brand-3 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
              Sign Up
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-brand-4 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-brand-6 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-brand-6 mb-2">
                  {faq.question}
                </h3>
                <p className="text-brand-5 whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            ))}
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