const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

// Types for API responses
export interface Competition {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  prize_pool: number;
  currency: string;
  start_date: string;
  deadline: string;
  status: 'upcoming' | 'active' | 'completed';
  evaluation_metric: string;
  creator_id: number;
  created_at: string;
}

export interface GlobalStats {
  total_jackpot: number;
  active_miners: number;
  live_challenges: number;
  total_users: number;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  submitted_at: string;
}

// API service class
export class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${url}`, error);
      throw error;
    }
  }

  // Global statistics
  async getGlobalStats(): Promise<GlobalStats> {
    return this.request<GlobalStats>('/stats/global');
  }

  // Competitions
  async getCompetitions(params?: {
    skip?: number;
    limit?: number;
    category?: string;
    status?: string;
  }): Promise<Competition[]> {
    const searchParams = new URLSearchParams();
    if (params?.skip) searchParams.append('skip', params.skip.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.category) searchParams.append('category', params.category);
    if (params?.status) searchParams.append('status', params.status);
    
    const query = searchParams.toString();
    return this.request<Competition[]>(`/competitions${query ? `?${query}` : ''}`);
  }

  async getFeaturedCompetitions(): Promise<Competition[]> {
    return this.request<Competition[]>('/competitions/featured');
  }

  async getCompetition(id: number): Promise<Competition> {
    return this.request<Competition>(`/competitions/${id}`);
  }

  async getLeaderboard(competitionId: number): Promise<LeaderboardEntry[]> {
    return this.request<LeaderboardEntry[]>(`/competitions/${competitionId}/leaderboard`);
  }

  // Authentication (for future use)
  async register(userData: {
    email: string;
    username: string;
    password: string;
    role?: 'miner' | 'creator';
  }) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials: { email: string; password: string }) {
    return this.request('/auth/login', {
      method: 'POST', 
      body: JSON.stringify(credentials),
    });
  }
}

// Export singleton instance
export const apiService = new ApiService(); 