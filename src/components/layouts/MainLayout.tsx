'use client'

import { ReactNode } from 'react'
import { BackgroundLayer } from './BackgroundLayer'
import { BottomNotice } from '../common/BottomNotice'
import { useUIStore } from '@/store/ui-store'

interface MainLayoutProps {
  children: ReactNode
  weatherCode?: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'foggy' | 'windy' | 'stormy'
}

export function MainLayout({ children, weatherCode = 'sunny' }: MainLayoutProps) {
  const { selectedSeason } = useUIStore()

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 배경 레이어 */}
      <BackgroundLayer season={selectedSeason} weatherCode={weatherCode} />

      {/* 메인 콘텐츠 */}
      <main className="relative z-10 min-h-screen">{children}</main>

      {/* 하단 안내 문구 */}
      <BottomNotice
        text={`본 서비스는 참고용입니다. 실제 농사 판단은 현장 상황과 전문가의 조언을 병행하세요.`}
      />
    </div>
  )
}
