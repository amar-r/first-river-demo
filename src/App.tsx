import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Public Components
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/public/Gallery';
import Contact from './components/public/Contact';

// Auth Components
import Login from './components/auth/Login';
import ApplyForAccess from './components/auth/ApplyForAccess';

// HOA Components (Protected)
import BoardOfDirectors from './components/hoa/BoardOfDirectors';
import MeetingMinutes from './components/hoa/MeetingMinutes';
import HoaDocuments from './components/hoa/HoaDocuments';

// Public Pages
import Home from './pages/Home';
import History from './pages/History';
import OurCommunity from './pages/OurCommunity';
import NeighborhoodInfo from './pages/NeighborhoodInfo';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-neighborhood-light">
            <Header />
            
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/our-community" element={<OurCommunity />} />
              <Route path="/neighborhood-info" element={<NeighborhoodInfo />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/apply" element={<ApplyForAccess />} />
              
              {/* Protected HOA Routes */}
              <Route 
                path="/hoa/board-of-directors" 
                element={
                  <ProtectedRoute>
                    <BoardOfDirectors />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/hoa/meeting-minutes" 
                element={
                  <ProtectedRoute>
                    <MeetingMinutes />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/hoa/documents" 
                element={
                  <ProtectedRoute>
                    <HoaDocuments />
                  </ProtectedRoute>
                } 
              />
            </Routes>
            
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
