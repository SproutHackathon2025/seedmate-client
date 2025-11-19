'use client'

import { ReactNode } from 'react'
import { BackgroundLayer } from './BackgroundLayer'
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
      <main className="relative z-10 h-screen w-screen">{children}</main>
    </div>
  )
}
