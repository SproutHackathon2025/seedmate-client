# 이미지 디렉토리 구조

이 디렉토리에는 씨앗메이트 서비스에서 사용하는 이미지 파일들을 저장합니다.

## 디렉토리 구조

```
public/images/
├── characters/          # 농부 캐릭터 이미지
│   ├── farmer-spring.png
│   ├── farmer-summer.png
│   ├── farmer-autumn.png
│   └── farmer-winter.png
│
├── backgrounds/         # 계절별 배경 이미지
│   ├── spring.jpg
│   ├── summer.jpg
│   ├── autumn.jpg
│   └── winter.jpg
│
├── layers/             # Parallax 효과용 레이어 이미지
│   ├── sky.png
│   ├── mountain.png
│   └── field.png
│
└── icons/              # 날씨 아이콘 등
    ├── sunny.png
    ├── cloudy.png
    ├── rainy.png
    └── snowy.png
```

## 이미지 가이드라인

### 캐릭터 이미지

- 크기: 512x512px (PNG, 투명 배경)
- 계절별로 4개의 이미지 필요
- 파스텔 톤 색상 사용

### 배경 이미지

- 크기: 1920x1080px 이상 (JPG)
- 파스텔 톤의 자연스러운 농촌 풍경
- 계절감이 드러나는 색감

### 레이어 이미지

- 크기: 1920x1080px (PNG, 투명 배경)
- 하늘, 산, 밭을 각각 분리된 레이어로 제작
- Parallax 효과를 위해 여백 고려

## 임시 대체 방법

현재는 이미지가 없으므로:

1. 캐릭터는 이모지(👨‍🌾)로 표시
2. 배경은 CSS 그라데이션 사용
3. 실제 이미지 추가 시 컴포넌트 수정 필요

## AI로 이미지 생성하기

**추천 프롬프트 (Midjourney, DALL-E 등):**

캐릭터:

- "cute farmer character, pastel colors, simple illustration, transparent background, spring/summer/autumn/winter theme"

배경:

- "pastoral landscape, Korean countryside, rice fields, mountains, pastel colors, soft lighting, spring/summer/autumn/winter season"
