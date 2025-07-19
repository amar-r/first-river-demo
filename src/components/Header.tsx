import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'History', href: '/history' },
    { name: 'Our Community', href: '/our-community' },
    { name: 'Neighborhood Info', href: '/neighborhood-info' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const hoaNavigation = [
    { name: 'Board of Directors', href: '/hoa/board-of-directors' },
    { name: 'Meeting Minutes', href: '/hoa/meeting-minutes' },
    { name: 'HOA Documents', href: '/hoa/documents' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-neighborhood-blue rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-neighborhood-blue">First River Farms</h1>
              <p className="text-xs text-neighborhood-gray">HOA Community</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-neighborhood-blue'
                    : 'text-neighborhood-gray hover:text-neighborhood-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {isAuthenticated && (
              <div className="relative group">
                <button className="text-sm font-medium text-neighborhood-gray hover:text-neighborhood-blue transition-colors">
                  HOA
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {hoaNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-neighborhood-gray hover:bg-gray-50 hover:text-neighborhood-blue"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-sm font-medium text-neighborhood-gray hover:text-neighborhood-blue transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-neighborhood-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Resident Login
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neighborhood-gray hover:text-neighborhood-blue hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-neighborhood-blue text-white'
                      : 'text-neighborhood-gray hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {isAuthenticated && (
                <>
                  <div className="px-4 py-2 text-xs font-semibold text-neighborhood-gray uppercase tracking-wide">
                    HOA
                  </div>
                  {hoaNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-8 py-2 text-sm text-neighborhood-gray hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              )}
              
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-neighborhood-gray hover:bg-gray-100"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-4 mt-4 bg-neighborhood-blue text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-800 transition-colors"
                >
                  Resident Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 