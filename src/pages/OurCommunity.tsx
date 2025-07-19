import { Helmet } from 'react-helmet-async';
import { communityEvents } from '../data/hoaData';

const OurCommunity = () => {
  return (
    <>
      <Helmet>
        <title>Our Community - First River Farms HOA</title>
        <meta name="description" content="Discover the amenities, lifestyle, and community spirit of First River Farms in Alexandria, Virginia." />
      </Helmet>
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neighborhood-blue mb-4">
              Our Community
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience the unique lifestyle and amenities that make First River Farms a special place to call home
            </p>
          </div>

          {/* Amenities Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-neighborhood-blue mb-8 text-center">
              Community Amenities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neighborhood-light rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-neighborhood-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-2">Pool & Recreation</h3>
                <p className="text-gray-600">
                  Enjoy our community pool and recreational facilities for family fun and relaxation
                </p>
              </div>

              <div className="bg-neighborhood-light rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-neighborhood-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-2">Walking Trails</h3>
                <p className="text-gray-600">
                  Scenic walking trails throughout the community for exercise and nature enjoyment
                </p>
              </div>

              <div className="bg-neighborhood-light rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-neighborhood-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-2">Tennis Courts</h3>
                <p className="text-gray-600">
                  Well-maintained tennis courts for residents to enjoy the sport year-round
                </p>
              </div>

              <div className="bg-neighborhood-light rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-neighborhood-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-2">Community Events</h3>
                <p className="text-gray-600">
                  Regular social events and activities to foster community spirit and friendships
                </p>
              </div>

              <div className="bg-neighborhood-light rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-neighborhood-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-2">River Access</h3>
                <p className="text-gray-600">
                  Beautiful views and access to the Potomac River for boating and outdoor activities
                </p>
              </div>

              <div className="bg-neighborhood-light rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-neighborhood-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-2">Security</h3>
                <p className="text-gray-600">
                  Neighborhood watch program and community safety initiatives for peace of mind
                </p>
              </div>
            </div>
          </div>

          {/* Community Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-neighborhood-blue mb-8 text-center">
              Upcoming Community Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityEvents.map((event, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-serif font-bold text-neighborhood-blue mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3 text-sm">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Values */}
          <div className="bg-neighborhood-blue text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-6">
              Our Community Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Neighborliness</h3>
                <p className="text-sm opacity-90">
                  Fostering a welcoming environment where neighbors become friends
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Stewardship</h3>
                <p className="text-sm opacity-90">
                  Caring for our community and preserving its natural beauty
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Inclusivity</h3>
                <p className="text-sm opacity-90">
                  Embracing diversity and creating an inclusive community for all
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCommunity; 