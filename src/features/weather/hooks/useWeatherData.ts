import { useQuery } from '@tanstack/react-query'
// import { weatherApi } from '@/lib/api/backendApi'
import { QUERY_KEYS, REFETCH_INTERVALS, STALE_TIME } from '@/constants/apiEndpoints'
import type { WeatherApiParams, WeatherData } from '../types/weather.types'

export function useWeatherData(params: WeatherApiParams, enabled: boolean = true) {
  // @TODO: 백엔드 API 연동 필요
  // 현재는 Mock 데이터 사용

  return useQuery({
    queryKey: [QUERY_KEYS.WEATHER, params],
    queryFn: async (): Promise<WeatherData> => {
      // return weatherApi.getWeather(params)

      // Mock 데이터 반환
      return {
        temperature: 22,
        humidity: 45,
        weatherCode: 'sunny',
        timestamp: new Date().toISOString(),
        precipitation: 0,
        windSpeed: 2.5,
      }
    },
    enabled: enabled && !!params.lat && !!params.lon,
    refetchInterval: REFETCH_INTERVALS.WEATHER,
    staleTime: STALE_TIME.WEATHER,
  })
}
