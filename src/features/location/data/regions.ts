import { RegionData } from '../types/location.types'

// 시/도 데이터 (샘플)
export const SIDO_LIST: RegionData[] = [
  { code: '11', name: '서울특별시', coordinates: { lat: 37.5665, lon: 126.978 } },
  { code: '26', name: '부산광역시', coordinates: { lat: 35.1796, lon: 129.0756 } },
  { code: '27', name: '대구광역시', coordinates: { lat: 35.8714, lon: 128.6014 } },
  { code: '28', name: '인천광역시', coordinates: { lat: 37.4563, lon: 126.7052 } },
  { code: '29', name: '광주광역시', coordinates: { lat: 35.1595, lon: 126.8526 } },
  { code: '30', name: '대전광역시', coordinates: { lat: 36.3504, lon: 127.3845 } },
  { code: '31', name: '울산광역시', coordinates: { lat: 35.5384, lon: 129.3114 } },
  { code: '36', name: '세종특별자치시', coordinates: { lat: 36.48, lon: 127.289 } },
  { code: '41', name: '경기도', coordinates: { lat: 37.4138, lon: 127.5183 } },
  { code: '42', name: '강원특별자치도', coordinates: { lat: 37.8228, lon: 128.1555 } },
  { code: '43', name: '충청북도', coordinates: { lat: 36.6357, lon: 127.4917 } },
  { code: '44', name: '충청남도', coordinates: { lat: 36.5184, lon: 126.8 } },
  { code: '45', name: '전북특별자치도', coordinates: { lat: 35.7175, lon: 127.153 } },
  { code: '46', name: '전라남도', coordinates: { lat: 34.8679, lon: 126.991 } },
  { code: '47', name: '경상북도', coordinates: { lat: 36.4919, lon: 128.8889 } },
  { code: '48', name: '경상남도', coordinates: { lat: 35.4606, lon: 128.2132 } },
  { code: '50', name: '제주특별자치도', coordinates: { lat: 33.489, lon: 126.4983 } },
]

// 시/군/구 데이터 (서울 예시)
export const SIGUNGU_DATA: Record<string, RegionData[]> = {
  '11': [
    {
      code: '11110',
      name: '종로구',
      parentCode: '11',
      coordinates: { lat: 37.5735, lon: 126.979 },
    },
    { code: '11140', name: '중구', parentCode: '11', coordinates: { lat: 37.5641, lon: 126.9979 } },
    {
      code: '11170',
      name: '용산구',
      parentCode: '11',
      coordinates: { lat: 37.5326, lon: 126.9905 },
    },
    {
      code: '11200',
      name: '성동구',
      parentCode: '11',
      coordinates: { lat: 37.5634, lon: 127.0368 },
    },
    {
      code: '11215',
      name: '광진구',
      parentCode: '11',
      coordinates: { lat: 37.5384, lon: 127.0822 },
    },
    {
      code: '11230',
      name: '동대문구',
      parentCode: '11',
      coordinates: { lat: 37.5744, lon: 127.0396 },
    },
    {
      code: '11260',
      name: '중랑구',
      parentCode: '11',
      coordinates: { lat: 37.6063, lon: 127.0926 },
    },
    {
      code: '11290',
      name: '성북구',
      parentCode: '11',
      coordinates: { lat: 37.5894, lon: 127.0167 },
    },
    {
      code: '11305',
      name: '강북구',
      parentCode: '11',
      coordinates: { lat: 37.6396, lon: 127.0255 },
    },
    {
      code: '11320',
      name: '도봉구',
      parentCode: '11',
      coordinates: { lat: 37.6688, lon: 127.0471 },
    },
    {
      code: '11350',
      name: '노원구',
      parentCode: '11',
      coordinates: { lat: 37.6542, lon: 127.0568 },
    },
    {
      code: '11380',
      name: '은평구',
      parentCode: '11',
      coordinates: { lat: 37.6027, lon: 126.9291 },
    },
    {
      code: '11410',
      name: '서대문구',
      parentCode: '11',
      coordinates: { lat: 37.5791, lon: 126.9368 },
    },
    {
      code: '11440',
      name: '마포구',
      parentCode: '11',
      coordinates: { lat: 37.5663, lon: 126.9019 },
    },
    {
      code: '11470',
      name: '양천구',
      parentCode: '11',
      coordinates: { lat: 37.517, lon: 126.8664 },
    },
    {
      code: '11500',
      name: '강서구',
      parentCode: '11',
      coordinates: { lat: 37.5509, lon: 126.8495 },
    },
    {
      code: '11530',
      name: '구로구',
      parentCode: '11',
      coordinates: { lat: 37.4954, lon: 126.8874 },
    },
    {
      code: '11545',
      name: '금천구',
      parentCode: '11',
      coordinates: { lat: 37.4568, lon: 126.8955 },
    },
    {
      code: '11560',
      name: '영등포구',
      parentCode: '11',
      coordinates: { lat: 37.5264, lon: 126.8962 },
    },
    {
      code: '11590',
      name: '동작구',
      parentCode: '11',
      coordinates: { lat: 37.5124, lon: 126.9393 },
    },
    {
      code: '11620',
      name: '관악구',
      parentCode: '11',
      coordinates: { lat: 37.4784, lon: 126.9516 },
    },
    {
      code: '11650',
      name: '서초구',
      parentCode: '11',
      coordinates: { lat: 37.4837, lon: 127.0324 },
    },
    {
      code: '11680',
      name: '강남구',
      parentCode: '11',
      coordinates: { lat: 37.5172, lon: 127.0473 },
    },
    {
      code: '11710',
      name: '송파구',
      parentCode: '11',
      coordinates: { lat: 37.5145, lon: 127.1059 },
    },
    {
      code: '11740',
      name: '강동구',
      parentCode: '11',
      coordinates: { lat: 37.5301, lon: 127.1238 },
    },
  ],
  // 다른 시/도의 시/군/구 데이터는 필요시 추가
}

// 읍/면/동 데이터 (강남구 예시)
export const DONGEUPMYEON_DATA: Record<string, RegionData[]> = {
  '11680': [
    {
      code: '1168010100',
      name: '역삼동',
      parentCode: '11680',
      coordinates: { lat: 37.5003, lon: 127.0363 },
    },
    {
      code: '1168010200',
      name: '개포동',
      parentCode: '11680',
      coordinates: { lat: 37.4852, lon: 127.0495 },
    },
    {
      code: '1168010300',
      name: '청담동',
      parentCode: '11680',
      coordinates: { lat: 37.5199, lon: 127.0474 },
    },
    {
      code: '1168010400',
      name: '삼성동',
      parentCode: '11680',
      coordinates: { lat: 37.514, lon: 127.0631 },
    },
    {
      code: '1168010500',
      name: '대치동',
      parentCode: '11680',
      coordinates: { lat: 37.4947, lon: 127.062 },
    },
    {
      code: '1168010600',
      name: '신사동',
      parentCode: '11680',
      coordinates: { lat: 37.524, lon: 127.0204 },
    },
    {
      code: '1168010700',
      name: '논현동',
      parentCode: '11680',
      coordinates: { lat: 37.5104, lon: 127.0223 },
    },
    {
      code: '1168010800',
      name: '압구정동',
      parentCode: '11680',
      coordinates: { lat: 37.527, lon: 127.0281 },
    },
    {
      code: '1168010900',
      name: '세곡동',
      parentCode: '11680',
      coordinates: { lat: 37.4675, lon: 127.1029 },
    },
    {
      code: '1168011000',
      name: '자곡동',
      parentCode: '11680',
      coordinates: { lat: 37.4719, lon: 127.0877 },
    },
    {
      code: '1168011100',
      name: '율현동',
      parentCode: '11680',
      coordinates: { lat: 37.4794, lon: 127.0911 },
    },
    {
      code: '1168011200',
      name: '일원동',
      parentCode: '11680',
      coordinates: { lat: 37.4878, lon: 127.0821 },
    },
    {
      code: '1168011300',
      name: '수서동',
      parentCode: '11680',
      coordinates: { lat: 37.4865, lon: 127.1001 },
    },
    {
      code: '1168011400',
      name: '도곡동',
      parentCode: '11680',
      coordinates: { lat: 37.4907, lon: 127.0517 },
    },
  ],
  // 다른 구의 동 데이터는 필요시 추가
}

// 지역 검색 함수
export function searchRegions(query: string): RegionData[] {
  if (!query || query.length < 2) return []

  const results: RegionData[] = []

  // 시/도 검색
  SIDO_LIST.forEach((sido) => {
    if (sido.name.includes(query)) {
      results.push(sido)
    }
  })

  // 시/군/구 검색
  Object.values(SIGUNGU_DATA).forEach((sigunguList) => {
    sigunguList.forEach((sigungu) => {
      if (sigungu.name.includes(query)) {
        results.push(sigungu)
      }
    })
  })

  // 읍/면/동 검색
  Object.values(DONGEUPMYEON_DATA).forEach((dongList) => {
    dongList.forEach((dong) => {
      if (dong.name.includes(query)) {
        results.push(dong)
      }
    })
  })

  return results.slice(0, 20) // 최대 20개 결과
}
