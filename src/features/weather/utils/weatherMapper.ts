import { WeatherCode } from '@/types'

// 기상청 날씨 코드를 내부 WeatherCode로 변환
export function mapWeatherCode(code: string): WeatherCode {
  const codeMap: Record<string, WeatherCode> = {
    '1': 'sunny', // 맑음
    '2': 'cloudy', // 구름 조금
    '3': 'cloudy', // 구름 많음
    '4': 'rainy', // 흐림
    '5': 'rainy', // 비
    '6': 'rainy', // 비/눈
    '7': 'snowy', // 눈
    '8': 'stormy', // 소나기
    '9': 'rainy', // 빗방울
    '10': 'rainy', // 빗방울/눈날림
    '11': 'snowy', // 눈날림
    '12': 'foggy', // 안개
  }

  return codeMap[code] || 'cloudy'
}

// 온도에 따른 체감 설명
export function getTemperatureFeeling(temp: number): string {
  if (temp < 0) return '매우 추워요'
  if (temp < 10) return '추워요'
  if (temp < 18) return '선선해요'
  if (temp < 23) return '쾌적해요'
  if (temp < 28) return '따뜻해요'
  if (temp < 33) return '더워요'
  return '매우 더워요'
}

// 습도에 따른 설명
export function getHumidityFeeling(humidity: number): string {
  if (humidity < 30) return '건조해요'
  if (humidity < 50) return '쾌적해요'
  if (humidity < 70) return '적당해요'
  if (humidity < 80) return '습해요'
  return '매우 습해요'
}

// 날씨 코드에 따른 한글 설명
export function getWeatherDescription(code: WeatherCode): string {
  const descriptions: Record<WeatherCode, string> = {
    sunny: '맑음',
    cloudy: '흐림',
    rainy: '비',
    snowy: '눈',
    foggy: '안개',
    windy: '바람',
    stormy: '폭풍',
  }
  return descriptions[code] || '알 수 없음'
}

// 날씨 코드에 따른 이모지
export function getWeatherEmoji(code: WeatherCode): string {
  const emojis: Record<WeatherCode, string> = {
    sunny: '☀️',
    cloudy: '☁️',
    rainy: '🌧️',
    snowy: '❄️',
    foggy: '🌫️',
    windy: '💨',
    stormy: '⛈️',
  }
  return emojis[code] || '☁️'
}
