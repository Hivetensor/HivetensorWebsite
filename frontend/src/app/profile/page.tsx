'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  User, Mail, Calendar, Shield, Wallet, Settings, 
  Edit, Save, X, Trophy, Target, Upload, 
  LogOut, ArrowLeft 
} from 'lucide-react';

export default function ProfilePage() {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    wallet_address: user?.wallet_address || '',
  });

  // Handle redirect in useEffect to avoid SSR issues
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, loading, router]);

  // Show loading state while auth is being determined
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-solar-gold"></div>
      </div>
    );
  }

  // Don't render content if not authenticated (redirect will happen)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-solar-gold"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-solar-gold"></div>
      </div>
    );
  }

  const handleSave = async () => {
    // TODO: Implement profile update API call
    console.log('Updating profile:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      username: user.username,
      email: user.email,
      wallet_address: user.wallet_address || '',
    });
    setIsEditing(false);
  };

  const getRoleInfo = (role: string) => {
    switch (role) {
      case 'miner':
        return {
          icon: Target,
          color: 'text-blue-400',
          bg: 'bg-blue-400/10',
          border: 'border-blue-400/30',
          label: 'Miner',
          description: 'Competes in challenges and solves problems'
        };
      case 'creator':
        return {
          icon: Upload,
          color: 'text-purple-400',
          bg: 'bg-purple-400/10',
          border: 'border-purple-400/30',
          label: 'Creator',
          description: 'Creates and sponsors competitions'
        };
      case 'admin':
        return {
          icon: Shield,
          color: 'text-solar-gold',
          bg: 'bg-solar-gold/10',
          border: 'border-solar-gold/30',
          label: 'Admin',
          description: 'Platform administrator'
        };
      default:
        return {
          icon: User,
          color: 'text-gray-400',
          bg: 'bg-gray-400/10',
          border: 'border-gray-400/30',
          label: 'User',
          description: 'Platform user'
        };
    }
  };

  const roleInfo = getRoleInfo(user.role);
  const RoleIcon = roleInfo.icon;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/20 bg-black/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center font-bold text-xl text-solar-gold hover:text-solar-amber transition-colors">
            <span className="hex"></span>
            HIVETENSOR
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-white/80 hover:text-solar-gold transition-colors">
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="text-white/80 hover:text-red-400 transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-solar-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>

        {/* Profile Header */}
        <div className="bg-white/5 border border-white/20 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-solar-gold/20 border border-solar-gold/30 rounded-lg flex items-center justify-center">
                <User className="w-10 h-10 text-solar-gold" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{user.username}</h1>
                <p className="text-gray-400">{user.email}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mt-2 ${roleInfo.bg} ${roleInfo.border} border`}>
                  <RoleIcon className={`w-4 h-4 ${roleInfo.color}`} />
                  <span className={`text-sm font-semibold ${roleInfo.color}`}>
                    {roleInfo.label}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 hover:border-solar-gold hover:text-solar-gold transition-colors"
            >
              {isEditing ? (
                <>
                  <X className="w-4 h-4" />
                  Cancel
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </>
              )}
            </button>
          </div>

          <p className="text-gray-300">{roleInfo.description}</p>
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Account Details */}
          <div className="bg-white/5 border border-white/20 p-6">
            <h2 className="text-xl font-bold text-solar-gold mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Account Details
            </h2>

            <div className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Username
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded focus:border-solar-gold focus:outline-none text-white"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-700 rounded">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-white">{user.username}</span>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-700 rounded">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-white">{user.email}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
              </div>

              {/* Wallet Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Wallet Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.wallet_address}
                    onChange={(e) => setFormData(prev => ({ ...prev, wallet_address: e.target.value }))}
                    placeholder="Enter your wallet address"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded focus:border-solar-gold focus:outline-none text-white"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-700 rounded">
                    <Wallet className="w-5 h-5 text-gray-400" />
                    <span className="text-white font-mono text-sm">
                      {user.wallet_address || 'No wallet connected'}
                    </span>
                  </div>
                )}
              </div>

              {/* Save/Cancel buttons */}
              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-solar-gold text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded hover:border-gray-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Account Stats */}
          <div className="bg-white/5 border border-white/20 p-6">
            <h2 className="text-xl font-bold text-solar-gold mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Account Stats
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Member Since</span>
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {new Date(user.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Account Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  user.is_active 
                    ? 'bg-green-600 text-white' 
                    : 'bg-red-600 text-white'
                }`}>
                  {user.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">User ID</span>
                <span className="text-white font-mono">#{user.id}</span>
              </div>

              {/* TODO: Add real stats when API is ready */}
              <div className="border-t border-gray-700 pt-4 mt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-solar-gold">0</div>
                    <div className="text-sm text-gray-400">Competitions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-solar-gold">$0</div>
                    <div className="text-sm text-gray-400">Earnings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/challenges" 
            className="bg-white/5 border border-white/20 p-6 hover:border-solar-gold/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-blue-400" />
              <h3 className="font-semibold text-white">Browse Challenges</h3>
            </div>
            <p className="text-gray-400 text-sm">Find competitions to participate in</p>
          </Link>

          {user.role === 'creator' && (
            <Link 
              href="/create" 
              className="bg-white/5 border border-white/20 p-6 hover:border-solar-gold/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <Upload className="w-6 h-6 text-purple-400" />
                <h3 className="font-semibold text-white">Create Challenge</h3>
              </div>
              <p className="text-gray-400 text-sm">Launch your own competition</p>
            </Link>
          )}

          <Link 
            href="/dashboard" 
            className="bg-white/5 border border-white/20 p-6 hover:border-solar-gold/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-6 h-6 text-solar-gold" />
              <h3 className="font-semibold text-white">Dashboard</h3>
            </div>
            <p className="text-gray-400 text-sm">View your activity and progress</p>
          </Link>
        </div>
      </div>
    </div>
  );
} 