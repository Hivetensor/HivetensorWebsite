'use client';

import { useState } from 'react';
import { Target, Eye, FileText, Gamepad2, TrendingUp, BarChart3, Palette } from 'lucide-react';

export default function Challenges() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('active');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Target },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye },
    { id: 'nlp', name: 'Natural Language', icon: FileText },
    { id: 'reinforcement', name: 'Reinforcement Learning', icon: Gamepad2 },
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

  const challengesData = [
    {
      id: 1,
      title: 'Medical Image Segmentation',
      description: 'Segment tumors in medical CT scans using deep learning. Help advance medical AI diagnostics.',
      category: 'computer-vision',
      difficulty: 'advanced',
      status: 'active',
      prizePool: 25.5,
      participants: 342,
      timeLeft: '12 days',
      accuracy: 0.94,
      submissions: 1248,
      sponsor: 'MedAI Labs',
      dataset: 'CT Scan Dataset (15GB)',
      metric: 'Dice Coefficient',
    },
    {
      id: 2,
      title: 'Sentiment Analysis at Scale',
      description: 'Analyze sentiment in millions of social media posts. Real-world social media data processing.',
      category: 'nlp',
      difficulty: 'intermediate',
      status: 'active',
      prizePool: 18.2,
      participants: 567,
      timeLeft: '8 days',
      accuracy: 0.87,
      submissions: 892,
      sponsor: 'SocialTech Inc',
      dataset: 'Twitter Posts (8GB)',
      metric: 'F1 Score',
    },
    {
      id: 3,
      title: 'Autonomous Drone Navigation',
      description: 'Train RL agents to navigate complex 3D environments. Cutting-edge robotics AI challenge.',
      category: 'reinforcement',
      difficulty: 'expert',
      status: 'active',
      prizePool: 42.8,
      participants: 156,
      timeLeft: '19 days',
      accuracy: 0.76,
      submissions: 234,
      sponsor: 'DroneCore Robotics',
      dataset: 'Simulation Environment',
      metric: 'Success Rate',
    },
    {
      id: 4,
      title: 'Stock Price Prediction',
      description: 'Predict stock movements using historical market data and news sentiment.',
      category: 'time-series',
      difficulty: 'intermediate',
      status: 'active',
      prizePool: 31.7,
      participants: 789,
      timeLeft: '5 days',
      accuracy: 0.68,
      submissions: 1567,
      sponsor: 'QuantFin Corp',
      dataset: 'Market Data (12GB)',
      metric: 'Sharpe Ratio',
    },
    {
      id: 5,
      title: 'Customer Churn Prediction',
      description: 'Predict customer churn for telecom companies using tabular data analysis.',
      category: 'tabular',
      difficulty: 'beginner',
      status: 'active',
      prizePool: 12.3,
      participants: 1023,
      timeLeft: '15 days',
      accuracy: 0.82,
      submissions: 2341,
      sponsor: 'TelecomAI',
      dataset: 'Customer Data (2GB)',
      metric: 'AUC Score',
    },
    {
      id: 6,
      title: 'AI Art Generation',
      description: 'Generate artistic images from text prompts. Push the boundaries of creative AI.',
      category: 'generative',
      difficulty: 'advanced',
      status: 'upcoming',
      prizePool: 35.0,
      participants: 0,
      timeLeft: 'Starts in 3 days',
      accuracy: null,
      submissions: 0,
      sponsor: 'CreativeAI Studio',
      dataset: 'Art Dataset (20GB)',
      metric: 'FID Score',
    },
  ];

  const filteredChallenges = challengesData.filter(challenge => {
    return (selectedCategory === 'all' || challenge.category === selectedCategory) &&
           (selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty) &&
           (selectedStatus === 'all' || challenge.status === selectedStatus);
  });

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
              {challengesData.filter(c => c.status === 'active').length}
            </p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Total Prize Pool</h3>
            <p className="text-3xl font-bold">₿ {challengesData.reduce((sum, c) => sum + c.prizePool, 0).toFixed(1)}</p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Total Participants</h3>
            <p className="text-3xl font-bold">
              {challengesData.reduce((sum, c) => sum + c.participants, 0).toLocaleString()}
            </p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Submissions Today</h3>
            <p className="text-3xl font-bold">156</p>
          </div>
        </div>

        {/* Challenges Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-solar-gold mb-6">
            {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)} Challenges 
            ({filteredChallenges.length})
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                         {filteredChallenges.map((challenge) => (
               <div key={challenge.id} className="border-2 border-gray-600 bg-black hover:border-solar-gold transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      {(() => {
                        const CategoryIcon = categories.find(c => c.id === challenge.category)?.icon;
                        return CategoryIcon ? <CategoryIcon className="w-6 h-6 text-solar-gold" /> : null;
                      })()}
                      <span className={`px-2 py-1 text-xs font-bold rounded ${getStatusBadge(challenge.status)}`}>
                        {challenge.status.toUpperCase()}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty.toUpperCase()}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{challenge.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{challenge.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prize Pool:</span>
                      <span className="text-solar-gold font-mono font-bold">₿ {challenge.prizePool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Participants:</span>
                      <span className="text-white">{challenge.participants.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time Left:</span>
                      <span className="text-white">{challenge.timeLeft}</span>
                    </div>
                    {challenge.accuracy && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Best Score:</span>
                        <span className="text-green-400 font-mono">{challenge.accuracy.toFixed(3)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-400">Submissions:</span>
                      <span className="text-white">{challenge.submissions.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4 mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sponsor:</span>
                      <span className="text-white">{challenge.sponsor}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Dataset:</span>
                      <span className="text-white">{challenge.dataset}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Metric:</span>
                      <span className="text-white">{challenge.metric}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-solar-gold text-black py-3 font-bold border-2 border-solar-gold hover:bg-black hover:text-solar-gold transition-all duration-300">
                      {challenge.status === 'active' ? 'JOIN CHALLENGE' : challenge.status === 'upcoming' ? 'NOTIFY ME' : 'VIEW RESULTS'}
                    </button>
                    <button className="w-full border-2 border-gray-600 text-gray-300 py-3 font-bold hover:border-solar-gold hover:text-solar-gold transition-all duration-300">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))}
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