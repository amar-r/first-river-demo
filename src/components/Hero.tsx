import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-neighborhood-blue to-blue-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')"
        }}
      ></div>
      
      <div className="relative section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Welcome to First River Farms
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            A beautiful residential community in Alexandria, Virginia where neighbors become friends and families thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/our-community"
              className="bg-white text-neighborhood-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Our Community
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-neighborhood-blue transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 