# 🌱 씨앗메이트 (SeedMate)

농사 정보 웹 서비스

## 📋 프로젝트 개요

씨앗메이트는 실시간 날씨 정보와 AI 기반 농사 조언을 제공하는 감성 중심의 웹 서비스입니다.
사용자에게 정보를 전달하는 것을 넘어, 농사를 짓는 경험과 감성을 시각적으로 표현합니다.

### 주요 기능

- 🌤️ **실시간 날씨 정보**: 기상청 OpenAPI 기반 실시간 기온, 습도, 날씨 상태
- 🤖 **AI 농사 조언**: LLM이 생성하는 맞춤형 농사 조언
- 🗺️ **지역 기반 서비스**: 법정동/행정동 단위 지역 선택
- 📱 **반응형 디자인**: 모바일과 데스크톱 모두 지원

## 🛠️ 기술 스택

### Frontend

- **Next.js 15.5.5** (App Router)
- **React 19.1.0**
- **TypeScript**
- **TailwindCSS v4** (파스텔 커스텀 색상)

### 상태 관리

- **Zustand** (클라이언트 상태)
- **React Query** (서버 상태)

### 애니메이션

- **Framer Motion** (UI 애니메이션)
- **React Spring** (물리 기반 애니메이션)

### UI 컴포넌트

- **Radix UI** (접근성 높은 기본 컴포넌트)
- **date-fns** (날짜 처리)
- **react-icons** (아이콘)

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
│
├── components/            # 컴포넌트
│   ├── layouts/          # 레이아웃 컴포넌트
│   ├── character/        # 농부 캐릭터 관련
│   ├── weather/          # 날씨 위젯
│   ├── location/         # 지역 선택
│   └── common/           # 공통 컴포넌트
│
├── features/             # 기능별 모듈
│   ├── weather/         # 날씨 관련
│   ├── advice/          # 농사 조언 관련
│   └── location/        # 지역 관련
│
├── lib/                 # 유틸리티 라이브러리
│   ├── api/            # API 클라이언트
│   ├── animations/     # 애니메이션 설정
│   └── react-query/    # React Query 설정
│
├── store/              # Zustand 스토어
├── constants/          # 상수
└── types/              # 타입 정의
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 20 이상
- pnpm (권장)

### 설치

```bash
# 의존성 설치
pnpm install

# 환경 변수 설정
cp .env.local.example .env.local

# 개발 서버 실행
pnpm dev
```

개발 서버가 http://localhost:3000 에서 실행됩니다.

### 환경 변수

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
NODE_ENV=development
```

### 이미지 가이드

캐릭터, 배경 이미지는 `public/images/` 디렉토리에 배치합니다.
자세한 내용은 `public/images/README.md`를 참조하세요.

## 📦 빌드 및 배포

```bash
# 프로덕션 빌드
pnpm build:prod

# 로컬 환경 빌드
pnpm build:local

# 프로덕션 서버 실행
pnpm start
```

## 🔧 개발 스크립트

```bash
pnpm dev          # 개발 서버 실행
pnpm build:prod   # 프로덕션 빌드
pnpm start        # 빌드된 앱 실행
pnpm lint         # ESLint + Prettier 검사
pnpm format       # Prettier 포맷팅
```

## 📝 개발 로드맵

### Phase 1: 기본 구조

- ✅ 프로젝트 설정 및 폴더 구조
- ✅ 타입 정의 및 상태 관리
- ✅ API 클라이언트 구현

### Phase 2: UI 컴포넌트

- ✅ 메인 레이아웃 및 배경
- ✅ 농부 캐릭터 및 말풍선
- ✅ 날씨 위젯 (온도계, 습도계, 시계)
- ✅ 지역 선택 모달

### Phase 3: 애니메이션

- ✅ Framer Motion 통합
- ✅ React Spring 통합
- ✅ Parallax 효과

### Phase 4: 반응형 디자인

- ✅ 모바일 레이아웃
- ✅ 태블릿 레이아웃
- ✅ 데스크톱 레이아웃

### Phase 5: 추가 기능 (계획)

- ⬜ 실제 이미지 에셋 교체
- ⬜ 백엔드 API 연동 완료
- ⬜ SEO 최적화
- ⬜ 성능 최적화
- ⬜ PWA 지원
