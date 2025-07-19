const About = () => {
  return (
    <section className="section-padding bg-neighborhood-light">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neighborhood-blue mb-6">
              About Our Community
            </h2>
            <div className="space-y-4 text-neighborhood-gray leading-relaxed">
              <p>
                First River Farms is a well-established residential community located in the heart of Alexandria, Virginia. 
                Our neighborhood offers the perfect blend of suburban tranquility and urban convenience, making it an 
                ideal place for families, professionals, and retirees alike.
              </p>
              <p>
                With tree-lined streets, well-maintained homes, and a strong sense of community, First River Farms 
                provides residents with a peaceful retreat while keeping them connected to all the amenities and 
                opportunities that the greater Washington, D.C. area has to offer.
              </p>
              <p>
                Our Homeowners Association works diligently to maintain the community's standards, preserve property 
                values, and foster a welcoming environment where neighbors can build lasting friendships and create 
                wonderful memories together.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-neighborhood-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neighborhood-blue mb-2">Prime Location</h3>
                <p className="text-sm text-neighborhood-gray">Convenient access to DC, shopping, and transportation</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-neighborhood-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 006.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neighborhood-blue mb-2">Family Friendly</h3>
                <p className="text-sm text-neighborhood-gray">Safe streets and excellent schools nearby</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-neighborhood-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neighborhood-blue mb-2">Established Community</h3>
                <p className="text-sm text-neighborhood-gray">Over 40 years of neighborhood pride and tradition</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-neighborhood-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neighborhood-blue mb-2">Active HOA</h3>
                <p className="text-sm text-neighborhood-gray">Dedicated board maintaining community standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 