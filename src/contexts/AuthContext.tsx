import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { mockUsers, pendingApplications } from '../data/hoaData';

interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  address?: string;
  isApproved: boolean;
  role: 'resident' | 'admin';
}

interface Application {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  pendingApplications: Application[];
  approveApplication: (id: number) => void;
  rejectApplication: (id: number) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<Application[]>(
    pendingApplications.map(app => ({
      ...app,
      status: app.status as 'pending' | 'approved' | 'rejected'
    }))
  );

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('hoa_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would be an API call
    const foundUser = mockUsers.find(u => u.username === username);
    
    if (foundUser && password === 'Doing HOA stuff.') {
      const userWithCorrectRole: User = {
        ...foundUser,
        role: foundUser.role as 'resident' | 'admin'
      };
      setUser(userWithCorrectRole);
      localStorage.setItem('hoa_user', JSON.stringify(userWithCorrectRole));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hoa_user');
  };

  const approveApplication = (id: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status: 'approved' } : app
      )
    );
  };

  const rejectApplication = (id: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status: 'rejected' } : app
      )
    );
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    pendingApplications: applications.filter(app => app.status === 'pending'),
    approveApplication,
    rejectApplication
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 