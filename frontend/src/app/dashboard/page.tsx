'use client';

import Link from 'next/link';
import { 
  Trophy, Settings, LogOut, 
  TrendingUp, Medal, Clock, DollarSign 
} from 'lucide-react';

export default function Dashboard() {
  // Mock user data (will be replaced with real auth)
  const user = {
    username: 'demo_user',
    email: 'test@example.com',
    role: 'miner',
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-solar-gold">
                Welcome back, {user.username}!
              </h1>
              <p className="text-gray-300 mt-2">
                {user.role === 'miner' ? 'Ready to compete?' : 'Manage your competitions'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.role === 'miner' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-purple-600 text-white'
              }`}>
                {user.role.toUpperCase()}
              </span>
              <Link href="/dashboard/settings" className="text-gray-400 hover:text-solar-gold">
                <Settings className="w-6 h-6" />
              </Link>
              <Link href="/auth/logout" className="text-gray-400 hover:text-red-400">
                <LogOut className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="border-2 border-gray-600 p-6 bg-black">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-400">Active Competitions</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-gray-600 p-6 bg-black">
            <div className="flex items-center gap-3">
              <Medal className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Best Rank</p>
                <p className="text-2xl font-bold">#2</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-gray-600 p-6 bg-black">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Total Submissions</p>
                <p className="text-2xl font-bold">47</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-gray-600 p-6 bg-black">
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-solar-gold" />
              <div>
                <p className="text-sm text-gray-400">Earnings</p>
                <p className="text-2xl font-bold">$1,250</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="border-2 border-gray-600 p-8 bg-black">
            <h2 className="text-2xl font-bold text-solar-gold mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Link 
                href="/challenges" 
                className="block w-full bg-solar-gold text-black py-4 text-center font-bold rounded hover:bg-yellow-500 transition-colors"
              >
                Browse New Challenges
              </Link>
              <Link 
                href="/dashboard/submissions" 
                className="block w-full border-2 border-gray-600 text-gray-300 py-4 text-center font-bold rounded hover:border-solar-gold hover:text-solar-gold transition-colors"
              >
                View My Submissions
              </Link>
              <Link 
                href="/leaderboard" 
                className="block w-full border-2 border-gray-600 text-gray-300 py-4 text-center font-bold rounded hover:border-solar-gold hover:text-solar-gold transition-colors"
              >
                Check Leaderboards
              </Link>
            </div>
          </div>

          <div className="border-2 border-gray-600 p-8 bg-black">
            <h2 className="text-2xl font-bold text-solar-gold mb-6">My Active Competitions</h2>
            <div className="space-y-4">
              <div className="border border-gray-700 p-4 rounded">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">E-commerce Conversion Prediction</h3>
                  <span className="text-yellow-400 font-bold">#2</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">Current Score: 0.8745</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>3 days left</span>
                </div>
              </div>
              
              <div className="border border-gray-700 p-4 rounded">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Stock Price Prediction</h3>
                  <span className="text-gray-400 font-bold">#7</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">Current Score: 2.341</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>5 days left</span>
                </div>
              </div>
              
              <Link 
                href="/dashboard/competitions" 
                className="block text-center text-solar-gold hover:text-yellow-400 font-semibold"
              >
                View All My Competitions
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border-2 border-gray-600 p-8 bg-black">
          <h2 className="text-2xl font-bold text-solar-gold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white">Submitted solution to E-commerce Conversion Prediction</p>
                <p className="text-sm text-gray-400">2 hours ago • Score: 0.8745</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white">Joined Stock Price Prediction competition</p>
                <p className="text-sm text-gray-400">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white">Achieved #2 rank in E-commerce Conversion Prediction</p>
                <p className="text-sm text-gray-400">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 