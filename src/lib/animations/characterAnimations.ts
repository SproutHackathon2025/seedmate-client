// 캐릭터 애니메이션 설정

// Idle 애니메이션 (부드러운 상하 움직임)
export const idleAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
}

// 손 흔들기 애니메이션
export const waveAnimation = {
  rotate: [0, 15, 0, -15, 0],
  transition: {
    duration: 2,
    ease: 'easeInOut' as const,
  },
}

// 등장 애니메이션
export const enterAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut' as const,
  },
}

// 말풍선 등장 애니메이션
export const speechBubbleAnimation = {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: -20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    y: -20,
  },
  transition: {
    duration: 0.4,
    ease: 'easeOut' as const,
  },
}

// 캐릭터 호버 효과
export const hoverAnimation = {
  scale: 1.05,
  transition: {
    duration: 0.3,
  },
}
