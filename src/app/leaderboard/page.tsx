'use client';

import { useState } from 'react';

export default function Leaderboard() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeframe, setTimeframe] = useState('all-time');

  const categories = [
    { id: 'all', name: 'All Challenges', icon: '🏆' },
    { id: 'computer-vision', name: 'Computer Vision', icon: '👁️' },
    { id: 'nlp', name: 'Natural Language', icon: '📝' },
    { id: 'reinforcement', name: 'Reinforcement Learning', icon: '🎮' },
    { id: 'time-series', name: 'Time Series', icon: '📈' },
    { id: 'tabular', name: 'Tabular Data', icon: '📊' },
  ];

  const timeframes = [
    { id: 'all-time', name: 'All Time' },
    { id: 'this-month', name: 'This Month' },
    { id: 'this-week', name: 'This Week' },
  ];

  const leaderboardData = [
    { rank: 1, miner: 'QuantumNinja', score: 0.9847, earnings: 15.4, challenges: 23, category: 'computer-vision', trend: '+0.12' },
    { rank: 2, miner: 'DeepMinerX', score: 0.9823, earnings: 14.2, challenges: 18, category: 'nlp', trend: '+0.08' },
    { rank: 3, miner: 'AIWhisperer', score: 0.9801, earnings: 13.8, challenges: 31, category: 'reinforcement', trend: '+0.15' },
    { rank: 4, miner: 'DataAlchemist', score: 0.9792, earnings: 13.1, challenges: 16, category: 'time-series', trend: '+0.04' },
    { rank: 5, miner: 'NeuralHacker', score: 0.9778, earnings: 12.9, challenges: 29, category: 'computer-vision', trend: '+0.07' },
    { rank: 6, miner: 'TensorGuru', score: 0.9765, earnings: 12.3, challenges: 21, category: 'tabular', trend: '+0.11' },
    { rank: 7, miner: 'CodeSamurai', score: 0.9751, earnings: 11.8, challenges: 14, category: 'nlp', trend: '+0.09' },
    { rank: 8, miner: 'MLWarrior', score: 0.9743, earnings: 11.5, challenges: 25, category: 'reinforcement', trend: '+0.06' },
    { rank: 9, miner: 'DataNinja', score: 0.9729, earnings: 11.1, challenges: 19, category: 'computer-vision', trend: '+0.13' },
    { rank: 10, miner: 'AlgoMaster', score: 0.9716, earnings: 10.8, challenges: 22, category: 'time-series', trend: '+0.05' },
  ];

  const performanceData = [
    { month: 'Jan', avgScore: 0.8923, participants: 1240 },
    { month: 'Feb', avgScore: 0.9034, participants: 1456 },
    { month: 'Mar', avgScore: 0.9156, participants: 1678 },
    { month: 'Apr', avgScore: 0.9298, participants: 1892 },
    { month: 'May', avgScore: 0.9421, participants: 2103 },
    { month: 'Jun', avgScore: 0.9567, participants: 2345 },
  ];

  const filteredData = selectedCategory === 'all' 
    ? leaderboardData 
    : leaderboardData.filter(miner => miner.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-solar-gold bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-solar-gold mb-4">
              LEADERBOARD
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track the top performing miners across all challenges. 
              Compete, earn, and climb the ranks in the decentralized AI revolution.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-solar-gold mb-4">Filter by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-solar-gold mb-4">Timeframe</h3>
            <div className="flex space-x-3">
              {timeframes.map((tf) => (
                <button
                  key={tf.id}
                  onClick={() => setTimeframe(tf.id)}
                  className={`px-4 py-2 border-2 transition-all duration-300 ${
                    timeframe === tf.id
                      ? 'border-solar-gold bg-solar-gold text-black'
                      : 'border-gray-600 text-gray-300 hover:border-solar-gold hover:text-solar-gold'
                  }`}
                >
                  {tf.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Total Miners</h3>
            <p className="text-3xl font-bold">2,345</p>
            <p className="text-sm text-gray-400">+234 this month</p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Active Challenges</h3>
            <p className="text-3xl font-bold">47</p>
            <p className="text-sm text-gray-400">12 ending soon</p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Total Rewards</h3>
            <p className="text-3xl font-bold">₿ 458.2</p>
            <p className="text-sm text-gray-400">₿ 23.4 this week</p>
          </div>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <h3 className="text-solar-gold font-semibold mb-2">Avg Score</h3>
            <p className="text-3xl font-bold">0.9567</p>
            <p className="text-sm text-green-400">+2.3% this month</p>
          </div>
        </div>

        {/* Performance Graph */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-solar-gold mb-6">Platform Performance Trends</h3>
          <div className="border-2 border-gray-600 p-6 bg-black">
            <div className="grid grid-cols-6 gap-4 h-64">
              {performanceData.map((data, index) => (
                <div key={data.month} className="flex flex-col justify-end items-center space-y-2">
                  <div className="text-xs text-gray-400">{data.participants}</div>
                  <div 
                    className="w-full bg-solar-gold relative"
                    style={{ height: `${(data.avgScore - 0.85) * 1000}px` }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white">
                      {data.avgScore.toFixed(3)}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-300">{data.month}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-sm text-gray-400">
              <span>Monthly Average Score & Participant Count</span>
              <span>Higher is better</span>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div>
          <h3 className="text-2xl font-semibold text-solar-gold mb-6">
            Top Miners {selectedCategory !== 'all' && `- ${categories.find(c => c.id === selectedCategory)?.name}`}
          </h3>
          <div className="border-2 border-gray-600 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 border-b border-gray-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-solar-gold uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-solar-gold uppercase tracking-wider">Miner</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-solar-gold uppercase tracking-wider">Score</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-solar-gold uppercase tracking-wider">Earnings (₿)</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-solar-gold uppercase tracking-wider">Challenges</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-solar-gold uppercase tracking-wider">Trend</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-solar-gold uppercase tracking-wider">Category</th>
                  </tr>
                </thead>
                <tbody className="bg-black divide-y divide-gray-600">
                  {filteredData.map((miner) => (
                    <tr key={miner.rank} className="hover:bg-gray-900 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                            miner.rank <= 3 ? 'bg-solar-gold text-black' : 'bg-gray-700 text-white'
                          }`}>
                            {miner.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-white font-medium">{miner.miner}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-solar-gold font-mono text-lg">{miner.score.toFixed(4)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-green-400 font-mono">₿ {miner.earnings}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-300">{miner.challenges}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-green-400 font-mono">{miner.trend}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-400 capitalize">
                          {categories.find(c => c.id === miner.category)?.icon} {miner.category.replace('-', ' ')}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="border-2 border-solar-gold p-8 bg-black">
            <h3 className="text-2xl font-bold text-solar-gold mb-4">Ready to Climb the Ranks?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of miners competing in AI challenges. Start earning crypto rewards today.
            </p>
            <div className="space-x-4">
              <button className="bg-solar-gold text-black px-8 py-3 font-bold border-2 border-solar-gold hover:bg-black hover:text-solar-gold transition-all duration-300">
                START MINING
              </button>
              <button className="border-2 border-solar-gold text-solar-gold px-8 py-3 font-bold hover:bg-solar-gold hover:text-black transition-all duration-300">
                VIEW CHALLENGES
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 