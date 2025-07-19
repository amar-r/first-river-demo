import { Helmet } from 'react-helmet-async';

const History = () => {
  return (
    <>
      <Helmet>
        <title>History - First River Farms HOA</title>
        <meta name="description" content="Learn about the rich history of First River Farms community in Alexandria, Virginia." />
      </Helmet>
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neighborhood-blue mb-4">
              Our History
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the rich heritage and development of First River Farms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold text-neighborhood-blue mb-6">
                A Legacy of Community
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  First River Farms was established in the 1970s as a planned residential community 
                  in Alexandria, Virginia. The development was designed to preserve the natural beauty 
                  of the area while providing modern amenities for residents.
                </p>
                <p>
                  The community takes its name from its proximity to the Potomac River, which has 
                  played a significant role in the region's history and continues to provide 
                  beautiful views and recreational opportunities for residents.
                </p>
                <p>
                  Over the decades, First River Farms has grown into a vibrant, close-knit community 
                  where families have put down roots and created lasting friendships. The HOA was 
                  established to maintain the community's standards and preserve its unique character.
                </p>
              </div>
            </div>

            <div className="bg-neighborhood-light rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold text-neighborhood-blue mb-4">
                Community Milestones
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-neighborhood-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">70s</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neighborhood-blue">Community Founded</h4>
                    <p className="text-sm text-gray-600">Initial development and establishment of the HOA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-neighborhood-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">80s</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neighborhood-blue">Amenities Added</h4>
                    <p className="text-sm text-gray-600">Pool, tennis courts, and walking trails completed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-neighborhood-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">90s</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neighborhood-blue">Community Growth</h4>
                    <p className="text-sm text-gray-600">Expansion and establishment of community traditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-neighborhood-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">00s</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neighborhood-blue">Modern Updates</h4>
                    <p className="text-sm text-gray-600">Infrastructure improvements and technology integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-neighborhood-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">Now</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neighborhood-blue">Thriving Community</h4>
                    <p className="text-sm text-gray-600">A diverse, active community with strong traditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-neighborhood-blue text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Preserving Our Heritage
            </h3>
            <p className="text-lg mb-6 opacity-90">
              The HOA works diligently to maintain the community's original vision while 
              adapting to modern needs and ensuring First River Farms remains a desirable 
              place to live for generations to come.
            </p>
            <p className="text-sm opacity-80">
              Have historical photos or stories to share? Contact us to contribute to our community archive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default History; 