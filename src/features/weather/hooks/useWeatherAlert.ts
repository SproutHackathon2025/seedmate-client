import { useQuery } from '@tanstack/react-query'
// import { weatherApi } from '@/lib/api/backendApi'
import { QUERY_KEYS, REFETCH_INTERVALS, STALE_TIME } from '@/constants/apiEndpoints'
import type { WeatherAlert } from '../types/weather.types'

export function useWeatherAlert(adminCode: string, enabled: boolean = true) {
  // @TODO: 백엔드 API 연동 필요
  // 현재는 Mock 데이터 사용

  return useQuery({
    queryKey: [QUERY_KEYS.WEATHER_ALERTS, adminCode],
    queryFn: async (): Promise<WeatherAlert[]> => {
      // return weatherApi.getAlerts(adminCode)

      // Mock 데이터 반환 (특보 없음)
      return []
    },
    enabled: enabled && !!adminCode,
    refetchInterval: REFETCH_INTERVALS.WEATHER_ALERTS,
    staleTime: STALE_TIME.WEATHER_ALERTS,
  })
}
