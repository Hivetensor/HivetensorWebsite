'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User, LogOut, Settings, Trophy, Upload, 
  ChevronDown, Menu, X 
} from 'lucide-react';

export default function Navigation() {
  const { user, logout, isAuthenticated } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'miner': return 'text-blue-400';
      case 'creator': return 'text-purple-400';
      case 'admin': return 'text-solar-gold';
      default: return 'text-gray-400';
    }
  };

  return (
    <nav className="border-b border-white/20 bg-black/95 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center font-bold text-xl text-solar-gold hover:text-solar-amber transition-colors">
            <span className="hex"></span>
            HIVETENSOR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-white/80 hover:text-solar-gold transition-colors">
              How It Works
            </Link>
            <Link href="/automl-zero" className="text-white/80 hover:text-solar-gold transition-colors">
              AutoML Zero
            </Link>
            <Link href="/docs" className="text-white/80 hover:text-solar-gold transition-colors">
              Docs
            </Link>
            <Link href="/challenges" className="text-white/80 hover:text-solar-gold transition-colors">
              Challenges
            </Link>
            <Link href="/leaderboard" className="text-white/80 hover:text-solar-gold transition-colors">
              Leaderboard
            </Link>
            {user?.role === 'creator' && (
              <Link href="/create" className="text-white/80 hover:text-solar-gold transition-colors">
                Create Challenge
              </Link>
            )}
            <Link href="/faq" className="text-white/80 hover:text-solar-gold transition-colors">
              FAQ
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-2 border border-gray-600 rounded hover:border-solar-gold transition-colors"
                >
                  <div className="w-8 h-8 bg-solar-gold/20 border border-solar-gold/30 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-solar-gold" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-white">{user.username}</div>
                    <div className={`text-xs ${getRoleColor(user.role)}`}>{user.role}</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* User Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-600 rounded-lg shadow-xl">
                    <div className="p-4 border-b border-gray-700">
                      <div className="text-sm font-medium text-white">{user.username}</div>
                      <div className="text-xs text-gray-400">{user.email}</div>
                    </div>
                    
                    <div className="py-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-solar-gold transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Trophy className="w-4 h-4" />
                        Dashboard
                      </Link>
                      
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-solar-gold transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Settings className="w-4 h-4" />
                        Profile Settings
                      </Link>

                      {user.role === 'creator' && (
                        <Link
                          href="/create"
                          className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-solar-gold transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <Upload className="w-4 h-4" />
                          Create Challenge
                        </Link>
                      )}
                    </div>

                    <div className="border-t border-gray-700 py-2">
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-red-400 transition-colors w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link 
                  href="/auth/login" 
                  className="text-white/80 hover:text-solar-gold transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/auth/register" 
                  className="bg-solar-gold text-black px-4 py-2 font-semibold rounded hover:bg-yellow-500 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden text-white/80 hover:text-solar-gold transition-colors"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                href="/#how-it-works" 
                className="text-white/80 hover:text-solar-gold transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/automl-zero" 
                className="text-white/80 hover:text-solar-gold transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                AutoML Zero
              </Link>
              <Link 
                href="/docs" 
                className="text-white/80 hover:text-solar-gold transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Docs
              </Link>
              <Link 
                href="/challenges" 
                className="text-white/80 hover:text-solar-gold transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Challenges
              </Link>
              <Link 
                href="/leaderboard" 
                className="text-white/80 hover:text-solar-gold transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Leaderboard
              </Link>
              {user?.role === 'creator' && (
                <Link 
                  href="/create" 
                  className="text-white/80 hover:text-solar-gold transition-colors"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Create Challenge
                </Link>
              )}
              <Link 
                href="/faq" 
                className="text-white/80 hover:text-solar-gold transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                FAQ
              </Link>

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-white/20">
                {isAuthenticated && user ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-solar-gold/20 border border-solar-gold/30 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-solar-gold" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{user.username}</div>
                        <div className={`text-xs ${getRoleColor(user.role)}`}>{user.role}</div>
                      </div>
                    </div>
                    
                    <Link 
                      href="/dashboard" 
                      className="block text-white/80 hover:text-solar-gold transition-colors"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Dashboard
                    </Link>
                    
                    <Link 
                      href="/profile" 
                      className="block text-white/80 hover:text-solar-gold transition-colors"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Profile
                    </Link>
                    
                    <button
                      onClick={() => {
                        logout();
                        setShowMobileMenu(false);
                      }}
                      className="block text-white/80 hover:text-red-400 transition-colors text-left"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link 
                      href="/auth/login" 
                      className="block text-white/80 hover:text-solar-gold transition-colors"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      href="/auth/register" 
                      className="block bg-solar-gold text-black px-4 py-2 font-semibold rounded hover:bg-yellow-500 transition-colors text-center"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close menus */}
      {(showUserMenu || showMobileMenu) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowUserMenu(false);
            setShowMobileMenu(false);
          }}
        />
      )}
    </nav>
  );
} 