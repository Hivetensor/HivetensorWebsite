import { useState, useEffect, useCallback } from 'react';
import { apiService } from '@/lib/api';

// Generic hook for API calls
export function useApiData<T>(
  apiCall: () => Promise<T>,
  dependencies: unknown[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiCall, ...dependencies]);

  return { data, loading, error };
}

// Specific hooks for different API endpoints
export function useGlobalStats() {
  const apiCall = useCallback(() => apiService.getGlobalStats(), []);
  return useApiData(apiCall);
}

export function useFeaturedCompetitions() {
  const apiCall = useCallback(() => apiService.getFeaturedCompetitions(), []);
  return useApiData(apiCall);
}

export function useCompetitions(params?: {
  skip?: number;
  limit?: number;
  category?: string;
  status?: string;
}) {
  const apiCall = useCallback(() => apiService.getCompetitions(params), [
    params?.skip, 
    params?.limit, 
    params?.category, 
    params?.status
  ]);
  
  return useApiData(
    apiCall,
    [params?.skip, params?.limit, params?.category, params?.status]
  );
}

export function useCompetition(id: number) {
  const apiCall = useCallback(() => apiService.getCompetition(id), [id]);
  return useApiData(apiCall, [id]);
}

export function useLeaderboard(competitionId: number) {
  const apiCall = useCallback(() => apiService.getLeaderboard(competitionId), [competitionId]);
  return useApiData(apiCall, [competitionId]);
} 