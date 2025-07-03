'use client';

import { useState } from 'react';
import { Target, Eye, FileText, Gamepad2, TrendingUp, BarChart3, Palette, Clock, Users } from 'lucide-react';
import { useCompetitions, useGlobalStats } from '@/hooks/useApi';
import Link from 'next/link';

export default function Challenges() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('active');

  // Fetch data from API
  const { data: competitions, loading: competitionsLoading } = useCompetitions({
    category: selectedCategory === 'all' ? undefined : selectedCategory,
    status: selectedStatus === 'all' ? undefined : selectedStatus
  });
  const { data: globalStats } = useGlobalStats();

  const categories = [
    { id: 'all', name: 'All Categories', icon: Target },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye },
    { id: 'nlp', name: 'Natural Language', icon: FileText },
    { id: 'reinforcement-learning', name: 'Reinforcement Learning', icon: Gamepad2 },
    { id: 'time-series', name: 'Time Series', icon: TrendingUp },
    { id: 'tabular', name: 'Tabular Data', icon: BarChart3 },
    { id: 'generative', name: 'Generative AI', icon: Palette },
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner', color: 'text-green-400' },
    { id: 'intermediate', name: 'Intermediate', color: 'text-yellow-400' },
    { id: 'advanced', name: 'Advanced', color: 'text-red-400' },
    { id: 'expert', name: 'Expert', color: 'text-purple-400' },
  ];

  const statuses = [
    { id: 'active', name: 'Active' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'completed', name: 'Completed' },
  ];

  // Filter competitions based on selected filters
  const filteredChallenges = competitions?.filter(competition => {
    return (selectedDifficulty === 'all' || competition.difficulty === selectedDifficulty);
  }) || [];

  const getDifficultyColor = (difficulty: string) => {
    const diff = difficulties.find(d => d.id === difficulty);
    return diff?.color || 'text-gray-400';
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      active: 'bg-green-600 text-white',
      upcoming: 'bg-blue-600 text-white',
      completed: 'bg-gray-600 text-white',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-600 text-white';
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-solar-gold bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-solar-gold mb-4">
              CHALLENGES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compete in AI challenges, solve real-world problems, and earn cryptocurrency rewards. 
              From computer vision to reinforcement learning - find your perfect challenge.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-solar-gold mb-4">Filter by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-3 border-2 transition-all duration-300 text-sm font-medium ${
                    selectedCategory === category.id
                      ? 'border-solar-gold bg-solar-gold text-black'
                      : 'border-gray-600 text-gray-300 hover:border-solar-gold hover:text-solar-gold'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-solar-gold mb-4">Difficulty Level</h3>
              <div className="flex flex-wrap gap-3">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={`px-4 py-2 border-2 transition-all duration-300 ${
                      selectedDifficulty === difficulty.id
                        ? 'border-solar-gold bg-solar-gold text-black'
                        : 'border-gray-600 text-gray-300 hover:border-solar-gold hover:text-solar-gold'
                    }`}
                  >
                    {difficulty.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-solar-gold mb-4">Status</h3>
              <div className="flex gap-3">
                {statuses.map((status) => (
                  <button
                    key={status.id}
                    onClick={() => setSelectedStatus(status.id)}
                    className={`px-4 py-2 border-2 transition-all duration-300 ${
                      selectedStatus === status.id
                        ? 'border-solar-gold bg-solar-gold text-black'
                        : 'border-gray-600 text-gray-300 hover:border-solar-gold hover:text-solar-gold'
                    }`}
                  >
                    {status.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Active Challenges</h3>
            <p className="text-3xl font-bold">
              {globalStats?.live_challenges || 0}
            </p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Total Prize Pool</h3>
            <p className="text-3xl font-bold">
              ${globalStats?.total_jackpot?.toLocaleString() || '0'}
            </p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">
              {globalStats?.total_users?.toLocaleString() || '0'}
            </p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Active Miners</h3>
            <p className="text-3xl font-bold">{globalStats?.active_miners || '0'}</p>
          </div>
        </div>

        {/* Challenges Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-solar-gold mb-6">
            {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)} Challenges 
            ({filteredChallenges.length})
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {competitionsLoading ? (
              // Loading state
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border-2 border-gray-600 bg-black p-6 animate-pulse">
                  <div className="h-6 bg-white/10 rounded mb-4"></div>
                  <div className="h-4 bg-white/10 rounded mb-6"></div>
                  <div className="space-y-3 mb-6">
                    <div className="h-4 bg-white/10 rounded"></div>
                    <div className="h-4 bg-white/10 rounded"></div>
                    <div className="h-4 bg-white/10 rounded"></div>
                  </div>
                  <div className="h-10 bg-white/10 rounded mb-3"></div>
                  <div className="h-10 bg-white/10 rounded"></div>
                </div>
              ))
            ) : (
              filteredChallenges.map((challenge) => {
                const CategoryIcon = categories.find(c => c.id === challenge.category)?.icon || Target;
                const daysLeft = Math.ceil((new Date(challenge.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
                const timeLeft = daysLeft > 0 ? `${daysLeft}d left` : 'Expired';
                
                return (
               <div key={challenge.id} className="border-2 border-gray-600 bg-black hover:border-solar-gold transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                          <CategoryIcon className="w-6 h-6 text-solar-gold" />
                      <span className={`px-2 py-1 text-xs font-bold rounded ${getStatusBadge(challenge.status)}`}>
                        {challenge.status.toUpperCase()}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty.toUpperCase()}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{challenge.title}</h4>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {challenge.description.length > 120 
                          ? `${challenge.description.substring(0, 120)}...` 
                          : challenge.description
                        }
                      </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prize Pool:</span>
                          <span className="text-solar-gold font-mono font-bold">
                            ${challenge.prize_pool.toLocaleString()}
                          </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time Left:</span>
                          <span className="text-white flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {timeLeft}
                          </span>
                    </div>
                      <div className="flex justify-between">
                          <span className="text-gray-400">Metric:</span>
                          <span className="text-white">{challenge.evaluation_metric}</span>
                      </div>
                    <div className="flex justify-between">
                          <span className="text-gray-400">Category:</span>
                          <span className="text-white capitalize">{challenge.category.replace('-', ' ')}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                        <Link 
                          href={`/challenges/${challenge.id}`} 
                          className="w-full bg-solar-gold text-black py-3 font-bold border-2 border-solar-gold hover:bg-black hover:text-solar-gold transition-all duration-300 text-center block"
                        >
                      {challenge.status === 'active' ? 'JOIN CHALLENGE' : challenge.status === 'upcoming' ? 'NOTIFY ME' : 'VIEW RESULTS'}
                        </Link>
                        <Link 
                          href={`/challenges/${challenge.id}`}
                          className="w-full border-2 border-gray-600 text-gray-300 py-3 font-bold hover:border-solar-gold hover:text-solar-gold transition-all duration-300 text-center block"
                        >
                      VIEW DETAILS
                        </Link>
                  </div>
                </div>
              </div>
                );
              })
            )}
          </div>
        </div>

        {/* Create Challenge CTA */}
        <div className="mt-16 text-center">
          <div className="border-2 border-solar-gold p-8 bg-black">
            <h3 className="text-2xl font-bold text-solar-gold mb-4">Have a Challenge Idea?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Create your own AI challenge and sponsor the prize pool. 
              Help advance AI research while engaging with the community.
            </p>
            <button className="bg-solar-gold text-black px-8 py-3 font-bold border-2 border-solar-gold hover:bg-black hover:text-solar-gold transition-all duration-300">
              CREATE CHALLENGE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 