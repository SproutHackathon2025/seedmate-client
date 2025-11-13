import { Season } from '@/types'
import { WeatherData } from '@/features/weather/types/weather.types'

export interface FarmingAdvice {
  advice: string // LLM이 생성한 농사 조언 텍스트
  timestamp: string // 생성 시각
  relatedActivities?: string[] // 추천 농사 활동 목록
  warnings?: string[] // 주의사항
}

export interface AdviceRequest {
  region: string // 지역명
  weather: WeatherData // 현재 날씨 정보
  season: Season // 현재 계절
  userCrops?: string[] // 사용자가 재배하는 작물 (선택)
}

export interface AdviceApiResponse {
  advice: string
  timestamp: string
  relatedActivities?: string[]
  warnings?: string[]
}
