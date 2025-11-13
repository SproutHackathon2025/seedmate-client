import { Season } from '@/types'

// 계절 정의 및 월별 매핑
export const SEASON_BY_MONTH: Record<number, Season> = {
  1: 'winter',
  2: 'winter',
  3: 'spring',
  4: 'spring',
  5: 'spring',
  6: 'summer',
  7: 'summer',
  8: 'summer',
  9: 'autumn',
  10: 'autumn',
  11: 'autumn',
  12: 'winter',
}

export const SEASON_NAMES: Record<Season, string> = {
  spring: '봄',
  summer: '여름',
  autumn: '가을',
  winter: '겨울',
}

export const SEASON_EMOJI: Record<Season, string> = {
  spring: '🌸',
  summer: '☀️',
  autumn: '🍂',
  winter: '❄️',
}

// 계절 감지 함수
export function getCurrentSeason(date: Date = new Date()): Season {
  const month = date.getMonth() + 1 // 0-based를 1-based로 변환
  return SEASON_BY_MONTH[month]
}

// 계절별 배경 이미지 경로 (추후 실제 이미지로 교체)
export const SEASON_BACKGROUNDS: Record<Season, string> = {
  spring: '/images/backgrounds/spring.jpg',
  summer: '/images/backgrounds/summer.jpg',
  autumn: '/images/backgrounds/autumn.jpg',
  winter: '/images/backgrounds/winter.jpg',
}
