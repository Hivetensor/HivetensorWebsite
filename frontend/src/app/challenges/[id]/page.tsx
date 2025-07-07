'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  Clock, Trophy, Users, Target, Calendar, DollarSign, 
  Download, Upload, Eye, Award,   CheckCircle, XCircle
} from 'lucide-react';
import { useCompetition, useLeaderboard } from '@/hooks/useApi';
import Link from 'next/link';

export default function ChallengeDetails() {
  const params = useParams();
  const challengeId = parseInt(params.id as string);
  
  const { data: competition, loading: competitionLoading, error } = useCompetition(challengeId);
  const { data: leaderboard, loading: leaderboardLoading } = useLeaderboard(challengeId);

  // Mock user state (will be replaced with real auth)
  const [user] = useState<{ id: number; role: string } | null>(null); // null = not logged in
  const [userInCompetition] = useState(false);

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Challenge Not Found</h1>
          <p className="text-gray-400 mb-6">The challenge you're looking for doesn't exist.</p>
          <Link href="/challenges" className="bg-solar-gold text-black px-6 py-3 font-semibold hover:bg-yellow-500 transition-colors">
            Back to Challenges
          </Link>
        </div>
      </main>
    );
  }

  if (competitionLoading || !competition) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-white/10 rounded w-2/3"></div>
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-64 bg-white/10 rounded"></div>
                <div className="h-32 bg-white/10 rounded"></div>
              </div>
              <div className="space-y-6">
                <div className="h-48 bg-white/10 rounded"></div>
                <div className="h-64 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'text-green-400 bg-green-400/10',
      intermediate: 'text-yellow-400 bg-yellow-400/10',
      advanced: 'text-red-400 bg-red-400/10',
      expert: 'text-purple-400 bg-purple-400/10',
    };
    return colors[difficulty as keyof typeof colors] || 'text-gray-400 bg-gray-400/10';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'text-green-400 bg-green-400/10',
      upcoming: 'text-blue-400 bg-blue-400/10',
      completed: 'text-gray-400 bg-gray-400/10',
    };
    return colors[status as keyof typeof colors] || 'text-gray-400 bg-gray-400/10';
  };

  const getDaysLeft = () => {
    const now = new Date();
    const deadline = new Date(competition.deadline);
    const timeDiff = deadline.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    if (daysLeft > 0) return `${daysLeft}d left`;
    if (daysLeft === 0) return 'Last day';
    return 'Expired';
  };

  const participantCount = leaderboard?.length || 0;
  const topScore = leaderboard?.[0]?.score || 0;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(competition.status)}`}>
                  {competition.status.toUpperCase()}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(competition.difficulty)}`}>
                  {competition.difficulty.toUpperCase()}
                </span>
                <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-xs font-semibold">
                  {competition.category.toUpperCase()}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-solar-gold mb-4">
                {competition.title}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                {competition.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border-2 border-gray-600 p-6 bg-black text-center">
                <DollarSign className="w-8 h-8 text-solar-gold mx-auto mb-2" />
                <p className="text-sm text-gray-400 mb-1">Prize Pool</p>
                <p className="text-2xl font-bold">${competition.prize_pool.toLocaleString()}</p>
              </div>
              
              <div className="border-2 border-gray-600 p-6 bg-black text-center">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 mb-1">Time Left</p>
                <p className="text-2xl font-bold">{getDaysLeft()}</p>
              </div>
              
              <div className="border-2 border-gray-600 p-6 bg-black text-center">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 mb-1">Participants</p>
                <p className="text-2xl font-bold">{participantCount}</p>
              </div>
              
              <div className="border-2 border-gray-600 p-6 bg-black text-center">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 mb-1">Best Score</p>
                <p className="text-2xl font-bold">{topScore ? topScore.toFixed(3) : 'N/A'}</p>
              </div>
            </div>

            {/* Competition Details */}
            <div className="border-2 border-gray-600 p-8 bg-black">
              <h2 className="text-2xl font-bold text-solar-gold mb-6">Competition Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Evaluation Metric</h3>
                  <p className="text-gray-300">{competition.evaluation_metric}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Category</h3>
                  <p className="text-gray-300 capitalize">{competition.category.replace('-', ' ')}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Start Date</h3>
                  <p className="text-gray-300">{new Date(competition.start_date).toLocaleDateString()}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Deadline</h3>
                  <p className="text-gray-300">{new Date(competition.deadline).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Dataset Section */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="font-semibold text-lg mb-4">Dataset & Resources</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold transition-colors">
                    <Download className="w-5 h-5" />
                    Download Dataset
                  </button>
                  <button className="flex items-center gap-2 border-2 border-gray-600 hover:border-solar-gold text-gray-300 hover:text-solar-gold px-6 py-3 rounded font-semibold transition-colors">
                    <Eye className="w-5 h-5" />
                    View Sample Data
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  Dataset will be available after joining the competition
                </p>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="border-2 border-gray-600 p-8 bg-black">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-solar-gold">Leaderboard</h2>
                <span className="text-sm text-gray-400">
                  Updated in real-time
                </span>
              </div>

              {leaderboardLoading ? (
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="animate-pulse border border-gray-700 p-4 rounded">
                      <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              ) : leaderboard && leaderboard.length > 0 ? (
                <div className="space-y-2">
                  {leaderboard.slice(0, 10).map((entry) => (
                    <div 
                      key={entry.rank} 
                      className={`flex items-center justify-between p-4 rounded border transition-colors ${
                        entry.rank === 1 
                          ? 'border-yellow-500 bg-yellow-500/5' 
                          : entry.rank <= 3 
                          ? 'border-gray-500 bg-gray-500/5' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                          entry.rank === 1 ? 'bg-yellow-500 text-black' :
                          entry.rank === 2 ? 'bg-gray-400 text-black' :
                          entry.rank === 3 ? 'bg-orange-600 text-white' :
                          'bg-gray-700 text-white'
                        }`}>
                          {entry.rank}
                        </div>
                        <div>
                          <p className="font-semibold">{entry.username}</p>
                          <p className="text-sm text-gray-400">
                            Submitted {new Date(entry.submitted_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{entry.score.toFixed(4)}</p>
                        <p className="text-sm text-gray-400">{competition.evaluation_metric}</p>
                      </div>
                    </div>
                  ))}
                  
                  {leaderboard.length > 10 && (
                    <div className="text-center pt-4">
                      <button className="text-solar-gold hover:text-yellow-400 font-semibold">
                        View Full Leaderboard ({leaderboard.length} participants)
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No submissions yet. Be the first to compete!</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Action Card */}
            <div className="border-2 border-gray-600 p-8 bg-black">
              <h3 className="text-xl font-bold text-solar-gold mb-6">Take Action</h3>
              
              {!user ? (
                // Not logged in
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    Join this competition to download the dataset and submit your solutions.
                  </p>
                  <Link 
                    href="/auth/login" 
                    className="block w-full bg-solar-gold text-black text-center py-4 font-bold rounded hover:bg-yellow-500 transition-colors"
                  >
                    Login to Join Competition
                  </Link>
                  <Link 
                    href="/auth/register" 
                    className="block w-full border-2 border-solar-gold text-solar-gold text-center py-4 font-bold rounded hover:bg-solar-gold hover:text-black transition-colors"
                  >
                    Create Account
                  </Link>
                </div>
              ) : !userInCompetition ? (
                // Logged in but not joined
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    Ready to compete? Join now to access the dataset and submit your solutions.
                  </p>
                  <button className="w-full bg-solar-gold text-black py-4 font-bold rounded hover:bg-yellow-500 transition-colors">
                    Join Competition
                  </button>
                </div>
              ) : (
                // Already joined
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-400 mb-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Joined Competition</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-4 font-bold rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Upload className="w-5 h-5" />
                    Submit Solution
                  </button>
                  
                  <button className="w-full border-2 border-gray-600 text-gray-300 py-3 font-semibold rounded hover:border-solar-gold hover:text-solar-gold transition-colors">
                    View My Submissions
                  </button>
                </div>
              )}
            </div>

            {/* Competition Info */}
            <div className="border-2 border-gray-600 p-8 bg-black">
              <h3 className="text-xl font-bold text-solar-gold mb-6">Competition Info</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">Timeline</span>
                  </div>
                  <div className="ml-7 space-y-1 text-sm text-gray-300">
                    <p>Started: {new Date(competition.start_date).toLocaleDateString()}</p>
                    <p>Ends: {new Date(competition.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Goal</span>
                  </div>
                  <p className="ml-7 text-sm text-gray-300">
                    Optimize {competition.evaluation_metric} on the test dataset
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">Rewards</span>
                  </div>
                  <p className="ml-7 text-sm text-gray-300">
                    Winner takes ${competition.prize_pool.toLocaleString()} {competition.currency}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="border-2 border-gray-600 p-8 bg-black">
              <h3 className="text-xl font-bold text-solar-gold mb-6">Quick Tips</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Start with exploratory data analysis to understand the dataset structure</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Try multiple approaches and ensemble methods for better results</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Monitor your local validation score to avoid overfitting</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Submit early and often to track your progress on the leaderboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 