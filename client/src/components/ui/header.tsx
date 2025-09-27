'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';
import { Menu, X, Heart, ChevronDown, Calendar, User, LogOut } from 'lucide-react';

export function Header() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    router.push('/');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Find Doctors', href: '/book' },
    { name: 'Hospitals', href: '/hospitals' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white fill-current" />
            </div>
            CuraConnect
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-medium">{user?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-200 py-2 z-10">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Calendar className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => router.push('/book')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                >
                  Book Appointment
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {user?.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="font-medium">{user?.name}</span>
                    </div>
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 text-blue-600 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Calendar className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 text-blue-600 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-red-600 font-medium text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      router.push('/book');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-medium transform hover:scale-105 transition-all duration-200"
                  >
                    Book Appointment
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}