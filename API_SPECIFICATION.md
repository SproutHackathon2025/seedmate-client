# 백엔드 API 명세서

이 문서는 프론트엔드 애플리케이션과의 연동을 위한 백엔드 API의 상세 명세를 정의합니다.

---

## **1. 날씨 API (WEATHER_ENDPOINTS)**

### **1.1. 현재 날씨 정보 가져오기**

- **엔드포인트**: `/api/weather`
- **HTTP 메서드**: `GET`
- **설명**: 위도와 경도에 기반하여 현재 날씨 정보를 조회합니다.
- **요청 파라미터 (Query Parameters)**:
  - `lat` (필수): 위도 (number)
  - `lon` (필수): 경도 (number)
- **응답 데이터**: `WeatherData` 타입

  ```typescript
  // src/features/weather/types/weather.types.ts
  export type WeatherData = {
    temperature: number // 온도
    humidity: number // 습도
    weatherCode: WeatherCode // 날씨 코드
    timestamp: string // 데이터 측정 시간 (ISO 8601 형식)
    precipitation: number // 강수량 (mm)
    windSpeed: number // 풍속 (m/s)
  }

  /**
   * ### WeatherCode 상세
   * `weatherCode`는 `src/types/index.ts`에 다음과 같이 정의된 문자열 리터럴 타입입니다.
   * `type WeatherCode = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'foggy' | 'windy' | 'stormy'`
   */
  ```

- **관련 프론트엔드 타입 파일**: `src/features/weather/types/weather.types.ts`, `src/types/index.ts`

### **1.2. 기상 특보 가져오기**

- **엔드포인트**: `/api/weather/alerts`
- **HTTP 메서드**: `GET`
- **설명**: 특정 행정 코드에 해당하는 지역의 기상 특보 정보를 조회합니다.
- **요청 파라미터 (Query Parameters)**:
  - `adminCode` (필수): 행정 코드 (string)
- **응답 데이터**: `WeatherAlert[]` 타입

  ```typescript
  // src/features/weather/types/weather.types.ts
  export type WeatherAlert = {
    id: string // 특보 ID
    type: string // 특보 종류
    region: string // 특보 발효 지역
    startTime: string // 특보 발효 시작 시간 (ISO 8601 형식)
    endTime: string // 특보 해제 예상 시간 (ISO 8601 형식, 없을 수 있음)
    description: string // 특보 상세 내용
  }

  /**
   * ### WeatherAlert.type 상세
   * `type`은 특정 열거형(enum)으로 정의되어 있지 않은 일반 문자열입니다.
   * 프론트엔드는 백엔드에서 제공하는 모든 문자열 값을 그대로 표시하도록 가정하고 작성되었습니다.
   * 예: '호우주의보', '한파경보', '폭염특보' 등
   *
   * ### adminCode 상세
   * `adminCode`는 대한민국의 행정동 법정동 코드를 나타내는 문자열입니다.
   * 프론트엔드에서는 지역 정보 데이터로부터 이 값을 얻으며, 기본값으로 '1168010100'(서울특별시 강남구 삼성1동)이 사용됩니다.
   * 백엔드는 이 코드를 받아 해당하는 지역의 기상 특보를 반환해야 합니다.
   */
  ```

- **관련 프론트엔드 타입 파일**: `src/features/weather/types/weather.types.ts`

### **1.3. 예보 정보 가져오기 (향후 확장)**

- **엔드포인트**: `/api/weather/forecast`
- **HTTP 메서드**: `GET`
- **설명**: 특정 지역의 날씨 예보 정보를 조회합니다. (현재 프론트엔드에서 사용되지 않으며, `backendApi.ts`에 정의만 되어 있음)
- **요청 파라미터 (Query Parameters)**:
  - `lat` (필수): 위도 (number)
  - `lon` (필수): 경도 (number)
- **응답 데이터**: `any` (현재 프론트엔드에서 사용되지 않으므로, 백엔드 구현 시 정의 필요)
- **관련 프론트엔드 타입 파일**: `src/features/weather/types/weather.types.ts` (향후 예보 관련 타입 추가 필요)

---

## **2. 조언 API (ADVICE_ENDPOINTS)**

### **2.1. 농사 조언 생성**

- **엔드포인트**: `/api/advice/generate`
- **HTTP 메서드**: `POST`
- **설명**: 사용자의 현재 날씨, 작물 정보, 지역 정보 등을 기반으로 LLM(Large Language Model)을 활용하여 맞춤형 농사 조언을 생성합니다.
- **요청 바디 (Request Body)**: `AdviceRequest` 타입

  ```typescript
  // src/features/advice/types/advice.types.ts
  import { Season } from '@/types'
  import { WeatherData } from '@/features/weather/types/weather.types'

  export type AdviceRequest = {
    region: string // 지역명 (예: '충청북도 충주시')
    weather: WeatherData // 현재 날씨 정보 객체
    season: Season // 현재 계절 ('spring' | 'summer' | 'autumn' | 'winter')
    userCrops?: string[] // 사용자가 재배하는 작물 목록 (선택 사항)
  }

  /**
   * ### AdviceRequest 상세
   * 위 타입은 `src/features/advice/types/advice.types.ts`에 정의된 실제 코드베이스의 타입입니다.
   * 이전 명세에 있던 `soilType` 필드는 현재 프론트엔드 구현에 포함되어 있지 않으며, 향후 확장될 수 있습니다.
   */
  ```

- **응답 데이터**: `AdviceApiResponse` 타입
  ```typescript
  // src/features/advice/types/advice.types.ts
  export type AdviceApiResponse = {
    advice: string // 생성된 농사 조언 텍스트
    timestamp: string // 조언 생성 시간 (ISO 8601 형식)
    relatedActivities?: string[] // 조언과 관련된 추천 활동 목록 (선택 사항)
  }
  ```
- **관련 프론트엔드 타입 파일**: `src/features/advice/types/advice.types.ts`

---

## **3. 지역 API (LOCATION_ENDPOINTS)**

### **3.1. 모든 지역 정보 가져오기**

- **엔드포인트**: `/api/location/regions`
- **HTTP 메서드**: `GET`
- **설명**: 데이터베이스에 저장된 모든 지역 정보를 조회합니다. (현재 프론트엔드에서 직접적으로 사용되지 않음)
- **요청 파라미터**: 없음
- **응답 데이터**: `Region[]` 타입
  ```typescript
  // src/features/location/types/location.types.ts 또는 src/types/index.ts
  export type Region = {
    sido: string // 시/도
    sigungu: string // 시/군/구
    dongeupmyeon: string // 동/읍/면
    administrativeCode: string // 행정 코드
    coordinates: {
      latitude: number
      longitude: number
    }
  }
  ```
- **관련 프론트엔드 타입 파일**: `src/features/location/types/location.types.ts` 또는 `src/types/index.ts`

### **3.2. 지역 검색**

- **엔드포인트**: `/api/location/search`
- **HTTP 메서드**: `GET`
- **설명**: 키워드를 기반으로 지역 정보를 검색합니다. (현재 프론트엔드에서 직접적으로 사용되지 않음)
- **요청 파라미터 (Query Parameters)**:
  - `keyword` (필수): 검색할 지역 키워드 (string)
- **응답 데이터**: `Region[]` 타입 (위 3.1과 동일)
- **관련 프론트엔드 타입 파일**: `src/features/location/types/location.types.ts` 또는 `src/types/index.ts`
