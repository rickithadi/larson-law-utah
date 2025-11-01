import React from 'react';

const EventsPage = () => {
  const events = [
    {
      title: "Personal Injury Law Seminar",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Larson Law Office",
      description: "Join us for a free seminar on personal injury law. Learn about your rights, the legal process, and how to protect yourself after an accident.",
      type: "Educational"
    },
    {
      title: "Community Safety Workshop",
      date: "April 20, 2025", 
      time: "10:00 AM - 12:00 PM",
      location: "South Jordan Community Center",
      description: "Free workshop focused on accident prevention and safety awareness in our community.",
      type: "Community"
    },
    {
      title: "Legal Aid Clinic",
      date: "May 10, 2025",
      time: "2:00 PM - 5:00 PM", 
      location: "Larson Law Office",
      description: "Free legal consultations for community members who need guidance on personal injury matters.",
      type: "Legal Aid"
    }
  ];

  const pastEvents = [
    {
      title: "Annual Charity Drive",
      date: "December 15, 2024",
      description: "Successfully raised $10,000 for local families affected by accidents and injuries."
    },
    {
      title: "Utah Bar Association Conference",
      date: "November 8, 2024",
      description: "Bryan Larson presented on recent developments in personal injury law."
    },
    {
      title: "Safe Driving Awareness Campaign",
      date: "October 22, 2024",
      description: "Partnered with local schools to promote safe driving habits among teenagers."
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-6 mb-4">
            Events & Community Involvement
          </h1>
          <p className="text-lg text-brand-5 max-w-3xl mx-auto">
            Stay informed about our upcoming events, educational seminars, and community involvement activities. 
            We're committed to giving back to the Utah community.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-6 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <span className="inline-block bg-brand-1 text-white text-xs px-2 py-1 rounded-full mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-brand-6 mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-brand-5">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-brand-5">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-brand-5">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  <p className="text-brand-5 mb-4">
                    {event.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-brand-1 hover:text-brand-3 font-medium transition-colors duration-300"
                  >
                    Register / Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-6 mb-8">Recent Activities</h2>
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-brand-4 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-brand-6 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-brand-5">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="inline-block bg-brand-2 text-white px-3 py-1 rounded-full text-sm">
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Involvement */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-brand-6 mb-6 text-center">
            Our Community Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-brand-6 mb-4">Legal Education</h3>
              <p className="text-brand-5">
                We regularly host free educational seminars to help community members understand their legal rights 
                and navigate the complexities of personal injury law.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-6 mb-4">Safety Advocacy</h3>
              <p className="text-brand-5">
                Through our safety workshops and awareness campaigns, we work to prevent accidents and promote 
                safer practices in our community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-6 mb-4">Charitable Giving</h3>
              <p className="text-brand-5">
                We support local families and organizations through our annual charity drives and community 
                partnership programs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-6 mb-4">Professional Development</h3>
              <p className="text-brand-5">
                Our attorneys actively participate in legal conferences and continuing education to stay current 
                with developments in personal injury law.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-2 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl mb-6">
            Want to be notified about upcoming events and legal education opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-1 hover:bg-brand-3 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Join Our Mailing List
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

export default EventsPage;