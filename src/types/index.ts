// 공통 타입 정의

export type Season = 'spring' | 'summer' | 'autumn' | 'winter'

export type WeatherCode = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'foggy' | 'windy' | 'stormy'

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface Region {
  sido: string // 시/도
  sigungu: string // 시/군/구
  dongeupmyeon: string // 동/읍/면
  administrativeCode: string // 행정동 코드
  coordinates?: Coordinates
}

export interface ApiError {
  message: string
  code?: string
  status?: number
}
