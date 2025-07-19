import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neighborhood-gray text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Community Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-neighborhood-blue rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif font-bold">First River Farms HOA</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A welcoming residential community in Alexandria, Virginia where neighbors become friends 
                and families create lasting memories together.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:firstriverfarmshoa@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/our-community" className="text-gray-300 hover:text-white transition-colors">
                    Our Community
                  </Link>
                </li>
                <li>
                  <Link to="/neighborhood-info" className="text-gray-300 hover:text-white transition-colors">
                    Neighborhood Info
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* HOA Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">HOA</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                    Resident Login
                  </Link>
                </li>
                <li>
                  <Link to="/apply" className="text-gray-300 hover:text-white transition-colors">
                    Apply for Access
                  </Link>
                </li>
                <li>
                  <Link to="/hoa/board-of-directors" className="text-gray-300 hover:text-white transition-colors">
                    Board of Directors
                  </Link>
                </li>
                <li>
                  <Link to="/hoa/meeting-minutes" className="text-gray-300 hover:text-white transition-colors">
                    Meeting Minutes
                  </Link>
                </li>
                <li>
                  <Link to="/hoa/documents" className="text-gray-300 hover:text-white transition-colors">
                    HOA Documents
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} First River Farms HOA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 