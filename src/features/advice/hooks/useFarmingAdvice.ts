import { useQuery } from '@tanstack/react-query'
// import { adviceApi } from '@/lib/api/backendApi'
import { QUERY_KEYS, STALE_TIME } from '@/constants/apiEndpoints'
import type { AdviceRequest, AdviceApiResponse } from '../types/advice.types'

export function useFarmingAdvice(request: AdviceRequest, enabled: boolean = true) {
  // @TODO: 백엔드 LLM API 연동 필요
  // 현재는 Mock 데이터 사용

  return useQuery({
    queryKey: [QUERY_KEYS.FARMING_ADVICE, request],
    queryFn: async (): Promise<AdviceApiResponse> => {
      // return adviceApi.generateAdvice(request)

      // Mock 데이터 반환
      const adviceTemplates = [
        '오늘은 날이 좋으니 옥외 작업을 추천합니다. 병충해도 잘 보이고 대내해 방지도 가능합니다.',
        '충주허면 사과나 사과허면 충주 출처 사과 축제는 매년 10월~11월쯤에 열려요.',
        '기온이 적당해서 농작물 관리하기 좋은 날씨입니다. 물주기와 잡초 제거를 하세요.',
        '습도가 높으니 병해 예방에 신경 쓰세요. 통풍을 잘 시켜주는 것이 좋습니다.',
      ]

      return {
        advice: adviceTemplates[Math.floor(Math.random() * adviceTemplates.length)],
        timestamp: new Date().toISOString(),
        relatedActivities: ['물주기', '잡초 제거', '병충해 점검'],
      }
    },
    enabled: enabled && !!request.region && !!request.weather,
    staleTime: STALE_TIME.FARMING_ADVICE,
  })
}
