import { Helmet } from 'react-helmet-async';
import { neighborhoodWatch } from '../data/hoaData';

const NeighborhoodInfo = () => {
  return (
    <>
      <Helmet>
        <title>Neighborhood Information - First River Farms HOA</title>
        <meta name="description" content="Stay informed about neighborhood watch programs, community updates, and local information for First River Farms residents." />
      </Helmet>
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neighborhood-blue mb-4">
          Neighborhood Information
        </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Stay connected and informed about your neighborhood
            </p>
          </div>

          {/* Neighborhood Watch */}
          <div className="mb-16">
            <div className="bg-neighborhood-light rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-neighborhood-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-bold text-neighborhood-blue mb-4">
                  FRF Neighborhood Watch Program
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  {neighborhoodWatch.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-4">
                    Program Coordinator
                  </h3>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">{neighborhoodWatch.coordinator}</p>
                    <a 
                      href={`mailto:${neighborhoodWatch.coordinatorEmail}`}
                      className="text-neighborhood-blue hover:text-blue-800"
                    >
                      {neighborhoodWatch.coordinatorEmail}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-4">
                    Meeting Schedule
                  </h3>
                  <p className="text-gray-700">
                    {neighborhoodWatch.meetingSchedule}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-4">
                  Safety Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {neighborhoodWatch.guidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-neighborhood-blue rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Local Information */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-neighborhood-blue mb-8 text-center">
              Local Information
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neighborhood-light rounded-lg p-6">
                <h3 className="text-lg font-serif font-bold text-neighborhood-blue mb-4">
                  Schools
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Elementary:</strong> Mt. Vernon Elementary</p>
                  <p><strong>Middle:</strong> Mt. Vernon Middle</p>
                  <p><strong>High:</strong> Mt. Vernon High</p>
                </div>
              </div>

              <div className="bg-neighborhood-light rounded-lg p-6">
                <h3 className="text-lg font-serif font-bold text-neighborhood-blue mb-4">
                  Emergency Services
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Police:</strong> 911 (Emergency)</p>
                  <p><strong>Fire:</strong> 911 (Emergency)</p>
                  <p><strong>Medical:</strong> 911 (Emergency)</p>
                  <p><strong>Non-Emergency:</strong> (703) 555-0111</p>
                </div>
              </div>

              <div className="bg-neighborhood-light rounded-lg p-6">
                <h3 className="text-lg font-serif font-bold text-neighborhood-blue mb-4">
                  Utilities
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Electric:</strong> Dominion Energy</p>
                  <p><strong>Water:</strong> City of Alexandria</p>
                  <p><strong>Gas:</strong> Washington Gas</p>
                  <p><strong>Trash:</strong> City of Alexandria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="bg-neighborhood-blue text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our email list to receive community updates, event notifications, and important announcements.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-white text-neighborhood-blue px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <p className="text-sm opacity-80 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-neighborhood-blue mb-6 text-center">
              Quick Links
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                href="/gallery"
                className="bg-neighborhood-light rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-neighborhood-blue">Photo Gallery</h3>
                <p className="text-sm text-gray-600">View community photos</p>
              </a>
              <a 
                href="/contact"
                className="bg-neighborhood-light rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-neighborhood-blue">Contact Us</h3>
                <p className="text-sm text-gray-600">Get in touch</p>
              </a>
              <a 
                href="/login"
                className="bg-neighborhood-light rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-neighborhood-blue">Resident Login</h3>
                <p className="text-sm text-gray-600">Access HOA content</p>
              </a>
              <a 
                href="/apply"
                className="bg-neighborhood-light rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-neighborhood-blue">Apply for Access</h3>
                <p className="text-sm text-gray-600">Request login credentials</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NeighborhoodInfo; 