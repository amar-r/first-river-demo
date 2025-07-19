import { boardMembers } from '../../data/hoaData';

const BoardOfDirectors = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neighborhood-blue mb-4">
            Board of Directors
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the dedicated volunteers who serve on the First River Farms HOA Board of Directors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-neighborhood-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-2">
                  {member.name}
                </h3>
                
                <p className="text-neighborhood-gray font-semibold mb-4">
                  {member.position}
                </p>

                {member.email && (
                  <div className="space-y-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-sm text-neighborhood-blue hover:text-blue-800 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neighborhood-light rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-serif font-bold text-neighborhood-blue mb-4">
            Board Responsibilities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-neighborhood-blue mb-2">Community Management</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Oversee community maintenance and improvements</li>
                <li>• Manage HOA budget and finances</li>
                <li>• Enforce community rules and regulations</li>
                <li>• Address resident concerns and inquiries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-neighborhood-blue mb-2">Communication</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Regular board meetings (4th Monday monthly)</li>
                <li>• Annual meeting (2nd Tuesday in May)</li>
                <li>• Community newsletters and updates</li>
                <li>• Emergency communications when needed</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Have a question or concern? Contact the board at{' '}
            <a 
              href="mailto:firstriverfarmshoa@gmail.com" 
              className="text-neighborhood-blue hover:text-blue-800 font-medium"
            >
              firstriverfarmshoa@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Board members are volunteers elected by the community. Elections are held annually.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors; 