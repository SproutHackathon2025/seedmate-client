// 파스텔 색상 팔레트 상수

export const PASTEL_COLORS = {
  pink: '#FFD1DC',
  blue: '#AEC6CF',
  green: '#C1E1C1',
  yellow: '#FDFD96',
  peach: '#FFDAB9',
  lavender: '#E6E6FA',
  mint: '#B2E0D0',
  coral: '#FFB3BA',
  sky: '#B4D4FF',
} as const

export const SOFT_COLORS = {
  beige: '#F5F5DC',
  cream: '#FFF8DC',
} as const

// 날씨별 색상 매핑
export const WEATHER_COLORS = {
  sunny: {
    primary: PASTEL_COLORS.yellow,
    secondary: PASTEL_COLORS.peach,
  },
  cloudy: {
    primary: PASTEL_COLORS.blue,
    secondary: SOFT_COLORS.beige,
  },
  rainy: {
    primary: PASTEL_COLORS.blue,
    secondary: PASTEL_COLORS.sky,
  },
  snowy: {
    primary: '#FFFFFF',
    secondary: PASTEL_COLORS.sky,
  },
  foggy: {
    primary: SOFT_COLORS.beige,
    secondary: PASTEL_COLORS.lavender,
  },
  windy: {
    primary: PASTEL_COLORS.mint,
    secondary: PASTEL_COLORS.sky,
  },
  stormy: {
    primary: PASTEL_COLORS.blue,
    secondary: '#8B9DC3',
  },
} as const

// 온도별 그라데이션 색상
export const TEMPERATURE_GRADIENT = {
  cold: ['#AEC6CF', '#B4D4FF'], // 파스텔 블루 → 스카이
  cool: ['#B2E0D0', '#C1E1C1'], // 민트 → 그린
  warm: ['#FDFD96', '#FFDAB9'], // 옐로우 → 피치
  hot: ['#FFDAB9', '#FFB3BA'], // 피치 → 코랄
} as const
