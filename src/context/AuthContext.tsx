import React, { useState, useEffect, useContext, createContext } from 'react';
import { AuthUser, AuthContextType } from '../types/auth';
import { clearStorage, getStoredUser, storeUser } from '../utils/authStorage';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Check the AuthState on the Initial Load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = await getStoredUser();
        setUser(storedUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      /*
        (authenticateUser) This function needs to be completed.
      */
      const userData = await authenticateUser(email, password);
      setUser(userData);
      await storeUser(userData);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    await clearStorage();
    setUser(null);
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
