// 배경 레이어 Parallax 효과
export const parallaxLayers = {
  sky: {
    animate: { x: [-5, 5, -5] },
    transition: { duration: 30, repeat: Infinity, ease: 'linear' as const },
  },
  mountain: {
    animate: { x: [-3, 3, -3] },
    transition: { duration: 20, repeat: Infinity, ease: 'linear' as const },
  },
  field: {
    animate: { x: [-2, 2, -2] },
    transition: { duration: 15, repeat: Infinity, ease: 'linear' as const },
  },
}

// 날씨별 배경 전환 애니메이션
export const weatherTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.5, ease: 'easeInOut' as const },
}

// 위젯 등장 애니메이션
export const widgetEnterAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

// 값 변경 애니메이션 (온도계, 습도계)
export const valueChangeAnimation = {
  transition: {
    duration: 1,
    ease: 'easeInOut' as const,
  },
}

// 펄스 효과 (알림 등에 사용)
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
}

// 페이드 인/아웃
export const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
}
