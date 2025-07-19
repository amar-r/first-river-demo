import type { ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neighborhood-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-neighborhood-blue mb-4">
              Access Required
            </h2>
            <p className="text-gray-600 mb-6">
              You need to be logged in to access this content. Please sign in with your resident credentials.
            </p>
            <div className="space-y-3">
              <a
                href="/login"
                className="block w-full bg-neighborhood-blue text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
              >
                Sign In
              </a>
              <a
                href="/apply"
                className="block w-full bg-transparent border border-neighborhood-blue text-neighborhood-blue px-6 py-2 rounded-lg hover:bg-neighborhood-blue hover:text-white transition-colors"
              >
                Apply for Access
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen bg-neighborhood-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-neighborhood-blue mb-4">
              Admin Access Required
            </h2>
            <p className="text-gray-600 mb-6">
              This area requires administrator privileges. Please contact the HOA board if you need access.
            </p>
            <a
              href="/dashboard"
              className="inline-block bg-neighborhood-blue text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
            >
              Back to Dashboard
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute; 