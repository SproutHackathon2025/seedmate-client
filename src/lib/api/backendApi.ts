import axios from 'axios'
import { API_BASE_URL, WEATHER_ENDPOINTS, ADVICE_ENDPOINTS } from '@/constants/apiEndpoints'
import type {
  WeatherData,
  WeatherAlert,
  WeatherApiParams,
  WeatherApiResponse,
} from '@/features/weather/types/weather.types'
import type { AdviceRequest, AdviceApiResponse } from '@/features/advice/types/advice.types'
import { WeatherCode } from '@/types'

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 인증 토큰이 필요한 경우 추가
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 에러 처리
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  },
)

// 날씨 API
export const weatherApi = {
  // 현재 날씨 정보 가져오기
  getWeather: async (params: WeatherApiParams): Promise<WeatherData> => {
    const response = await apiClient.get<WeatherApiResponse>(WEATHER_ENDPOINTS.GET_WEATHER, {
      params,
    })
    return {
      ...response.data,
      weatherCode: response.data.weatherCode as WeatherCode, // 타입 변환
    }
  },

  // 기상 특보 가져오기
  getAlerts: async (adminCode: string): Promise<WeatherAlert[]> => {
    const response = await apiClient.get<{ alerts: WeatherAlert[] }>(WEATHER_ENDPOINTS.GET_ALERTS, {
      params: { adminCode },
    })
    return response.data.alerts
  },

  // 예보 정보 가져오기 (향후 확장)
  getForecast: async (params: WeatherApiParams) => {
    const response = await apiClient.get(WEATHER_ENDPOINTS.GET_FORECAST, { params })
    return response.data
  },
}

// 조언 API
export const adviceApi = {
  // LLM 농사 조언 생성
  generateAdvice: async (data: AdviceRequest): Promise<AdviceApiResponse> => {
    const response = await apiClient.post<AdviceApiResponse>(ADVICE_ENDPOINTS.GENERATE, data)
    return response.data
  },

  // 조언 히스토리 가져오기 (향후 확장)
  getHistory: async () => {
    const response = await apiClient.get(ADVICE_ENDPOINTS.GET_HISTORY)
    return response.data
  },
}

export default apiClient
