'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  Trophy, Settings, LogOut, 
  TrendingUp, Medal, Clock, DollarSign 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { apiService, UserDashboardStats, UserActiveCompetition, UserActivity } from '@/lib/api';

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const [dashboardStats, setDashboardStats] = useState<UserDashboardStats | null>(null);
  const [activeCompetitions, setActiveCompetitions] = useState<UserActiveCompetition[]>([]);
  const [recentActivity, setRecentActivity] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user && !authLoading) {
      fetchDashboardData();
    }
  }, [user, authLoading]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [stats, competitions, activity] = await Promise.all([
        apiService.getUserDashboardStats(),
        apiService.getUserActiveCompetitions(),
        apiService.getUserRecentActivity()
      ]);
      
      setDashboardStats(stats);
      setActiveCompetitions(competitions);
      setRecentActivity(activity);
    } catch (err) {
      console.error('Failed to fetch dashboard data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-solar-gold mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading dashboard...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400">Access Denied</h1>
          <p className="text-gray-300 mt-2">Please log in to view your dashboard.</p>
          <Link href="/auth/login" className="inline-block mt-4 bg-solar-gold text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500">
            Login
          </Link>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400">Error</h1>
          <p className="text-gray-300 mt-2">{error}</p>
          <button 
            onClick={fetchDashboardData}
            className="inline-block mt-4 bg-solar-gold text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

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
                {user.role === 'miner' ? 'Ready to compete?' : user.role === 'creator' ? 'Manage your competitions' : 'Admin Dashboard'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.role === 'miner' 
                  ? 'bg-blue-600 text-white' 
                  : user.role === 'creator'
                  ? 'bg-purple-600 text-white'
                  : 'bg-red-600 text-white'
              }`}>
                {user.role.toUpperCase()}
              </span>
              <Link href="/profile" className="text-gray-400 hover:text-solar-gold">
                <Settings className="w-6 h-6" />
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
                <p className="text-2xl font-bold">{dashboardStats?.active_competitions || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-gray-600 p-6 bg-black">
            <div className="flex items-center gap-3">
              <Medal className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Best Rank</p>
                <p className="text-2xl font-bold">
                  {dashboardStats?.best_rank ? `#${dashboardStats.best_rank}` : 'N/A'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-gray-600 p-6 bg-black">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Total Submissions</p>
                <p className="text-2xl font-bold">{dashboardStats?.total_submissions || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-gray-600 p-6 bg-black">
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-solar-gold" />
              <div>
                <p className="text-sm text-gray-400">Estimated Earnings</p>
                <p className="text-2xl font-bold">${dashboardStats?.estimated_earnings?.toLocaleString() || '0'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="border-2 border-gray-600 p-8 bg-black">
            <h2 className="text-2xl font-bold text-solar-gold mb-6">Quick Actions</h2>
            <div className="space-y-4">
              {user.role === 'creator' ? (
                <>
                  <Link 
                    href="/create" 
                    className="block w-full bg-solar-gold text-black py-4 text-center font-bold rounded hover:bg-yellow-500 transition-colors"
                  >
                    Create New Competition
                  </Link>
                  <Link 
                    href="/challenges" 
                    className="block w-full border-2 border-gray-600 text-gray-300 py-4 text-center font-bold rounded hover:border-solar-gold hover:text-solar-gold transition-colors"
                  >
                    View All Competitions
                  </Link>
                </>
              ) : (
                <>
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
                </>
              )}
              <Link 
                href="/leaderboard" 
                className="block w-full border-2 border-gray-600 text-gray-300 py-4 text-center font-bold rounded hover:border-solar-gold hover:text-solar-gold transition-colors"
              >
                Check Leaderboards
              </Link>
            </div>
          </div>

          <div className="border-2 border-gray-600 p-8 bg-black">
            <h2 className="text-2xl font-bold text-solar-gold mb-6">
              {user.role === 'creator' ? 'My Competitions' : 'My Active Competitions'}
            </h2>
            <div className="space-y-4">
              {activeCompetitions.length > 0 ? (
                <>
                  {activeCompetitions.slice(0, 2).map((comp) => (
                    <div key={comp.id} className="border border-gray-700 p-4 rounded">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{comp.title}</h3>
                        <span className={`font-bold ${
                          comp.current_rank <= 3 ? 'text-yellow-400' : 'text-gray-400'
                        }`}>
                          #{comp.current_rank}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">
                        Current Score: {comp.current_score.toFixed(4)}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>{comp.days_left} days left</span>
                      </div>
                    </div>
                  ))}
                  
                  {activeCompetitions.length > 2 && (
                    <Link 
                      href="/dashboard/competitions" 
                      className="block text-center text-solar-gold hover:text-yellow-400 font-semibold"
                    >
                      View All My Competitions ({activeCompetitions.length})
                    </Link>
                  )}
                </>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p>No active competitions yet.</p>
                  <Link 
                    href="/challenges" 
                    className="text-solar-gold hover:text-yellow-400 font-semibold"
                  >
                    Browse Competitions
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border-2 border-gray-600 p-8 bg-black">
          <h2 className="text-2xl font-bold text-solar-gold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.length > 0 ? (
              recentActivity.slice(0, 5).map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-900 rounded">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'submission' ? 'bg-green-400' : 'bg-blue-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-white">{activity.description}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(activity.timestamp).toLocaleDateString()} • 
                      {activity.score && ` Score: ${activity.score.toFixed(4)}`}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">
                <p>No recent activity.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 