import { WeatherCode } from '@/types'

export interface WeatherData {
  temperature: number // 기온 (°C)
  humidity: number // 습도 (%)
  weatherCode: WeatherCode // 날씨 상태 코드
  timestamp: string // ISO 8601 형식
  precipitation?: number // 강수량 (mm)
  windSpeed?: number // 풍속 (m/s)
  pm10?: number // 미세먼지 농도
  pm25?: number // 초미세먼지 농도
}

export interface WeatherAlert {
  type: string // 특보 종류 (예: 폭우, 폭설, 한파 등)
  message: string // 특보 내용
  severity: 'info' | 'warning' | 'danger' // 위험도
  issuedAt: string // 발표 시각
  expiresAt?: string // 해제 예정 시각
}

export interface WeatherApiParams {
  lat: number
  lon: number
  adminCode?: string
}

export interface WeatherApiResponse {
  temperature: number
  humidity: number
  weatherCode: string
  timestamp: string
  precipitation?: number
  windSpeed?: number
}
