// API 엔드포인트 상수

// 백엔드 API 베이스 URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'

// 날씨 API 엔드포인트
export const WEATHER_ENDPOINTS = {
  GET_WEATHER: '/api/weather',
  GET_ALERTS: '/api/weather/alerts',
  GET_FORECAST: '/api/weather/forecast',
} as const

// 조언 API 엔드포인트
export const ADVICE_ENDPOINTS = {
  GENERATE: '/api/advice/generate',
} as const

// 지역 API 엔드포인트
export const LOCATION_ENDPOINTS = {
  GET_REGIONS: '/api/location/regions',
  SEARCH_REGIONS: '/api/location/search',
} as const

// React Query 키
export const QUERY_KEYS = {
  WEATHER: 'weather',
  WEATHER_ALERTS: 'weatherAlerts',
  WEATHER_FORECAST: 'weatherForecast',
  FARMING_ADVICE: 'farmingAdvice',
  REGIONS: 'regions',
} as const

// Refetch 간격 (밀리초)
export const REFETCH_INTERVALS = {
  WEATHER: 60 * 1000, // 1분
  WEATHER_ALERTS: 5 * 60 * 1000, // 5분
  FARMING_ADVICE: 10 * 60 * 1000, // 10분
} as const

// Stale 시간 (밀리초)
export const STALE_TIME = {
  WEATHER: 30 * 1000, // 30초
  WEATHER_ALERTS: 3 * 60 * 1000, // 3분
  FARMING_ADVICE: 10 * 60 * 1000, // 10분
  REGIONS: Infinity, // 지역 데이터는 변경되지 않음
} as const
