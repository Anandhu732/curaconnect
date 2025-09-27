import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));

          // Note: Password validation skipped in mock authentication
          // In production, password would be validated here
          console.log('Mock login for:', email, password ? 'with password' : 'without password');

          // Mock user data - in real app, this would come from API
          const userData: User = {
            id: '1',
            name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            email: email,
            phone: '+91 98765 43210'
          };

          // Set user and auth state
          set({ user: userData, isAuthenticated: true });

          // Store in localStorage and set cookie
          if (typeof window !== 'undefined') {
            localStorage.setItem('curaconnect_user', JSON.stringify(userData));
            localStorage.setItem('curaconnect_token', 'mock-jwt-token');

            // Set cookie for middleware
            document.cookie = 'auth-token=mock-jwt-token; path=/; max-age=86400; secure; samesite=strict';
          }

          return { success: true };
        } catch {
          return { success: false, error: 'Login failed' };
        }
      },

      logout: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('curaconnect_user');
          localStorage.removeItem('curaconnect_token');

          // Clear cookie
          document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
        set({ user: null, isAuthenticated: false });
      },

      checkAuth: () => {
        try {
          const storedUser = localStorage.getItem('curaconnect_user');
          if (storedUser) {
            const user = JSON.parse(storedUser);
            set({ user, isAuthenticated: true });
          }
        } catch (error) {
          console.error('Error checking auth:', error);
          set({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: 'curaconnect-auth',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      }),
    }
  )
);