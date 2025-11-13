'use client'

import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Season, WeatherCode } from '@/types'
import { weatherTransition } from '@/lib/animations/weatherAnimations'
import { WEATHER_COLORS } from '@/constants/colors'

interface BackgroundLayerProps {
  season: Season
  weatherCode: WeatherCode
}

export function BackgroundLayer({ season, weatherCode }: BackgroundLayerProps) {
  const weatherColor = WEATHER_COLORS[weatherCode]

  // 계절별 배경 이미지 경로
  const getBackgroundImage = () => {
    return `/images/backgrounds/${season}.jpg`
  }

  // 계절 + 날씨 조합에 따른 배경 그라데이션 (오버레이용)
  const getBackgroundGradient = () => {
    const baseColor = weatherColor.primary
    const secondaryColor = weatherColor.secondary

    return `linear-gradient(to bottom, ${baseColor}80, ${secondaryColor}80)`
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${season}-${weatherCode}`}
          {...weatherTransition}
          className="absolute inset-0"
        >
          {/* 배경 이미지 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getBackgroundImage()})`,
            }}
          />

          {/* 날씨별 색상 오버레이 */}
          <div
            className="absolute inset-0"
            style={{
              background: getBackgroundGradient(),
            }}
          />
          {/* Sky Layer - 가장 뒤쪽 레이어 */}
          {/* 이미지가 추가되면 활성화 
          <motion.div
            {...parallaxLayers.sky}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/images/layers/sky.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          */}

          {/* Mountain Layer - 중간 레이어 */}
          {/* 이미지가 추가되면 활성화
          <motion.div
            {...parallaxLayers.mountain}
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(/images/layers/mountain.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          />
          */}

          {/* Field Layer - 앞쪽 레이어 */}
          {/* 이미지가 추가되면 활성화
          <motion.div
            {...parallaxLayers.field}
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'url(/images/layers/field.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          />
          */}

          {/* 계절별 파티클 효과 (눈, 꽃잎 등) */}
          {season === 'spring' && <SpringParticles />}
          {season === 'winter' && weatherCode === 'snowy' && <SnowParticles />}
          {weatherCode === 'rainy' && <RainParticles />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// 봄 꽃잎 효과
function SpringParticles() {
  const particles = useMemo(
    () =>
      [...Array(10)].map((_, i) => ({
        id: i,
        initialX:
          typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
        endY: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
        endX:
          typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
        duration: 10 + Math.random() * 5,
        delay: Math.random() * 5,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-pastel-pink rounded-full opacity-60"
          initial={{ x: particle.initialX, y: -20 }}
          animate={{
            y: particle.endY,
            x: particle.endX,
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// 눈 효과
function SnowParticles() {
  const particles = useMemo(
    () =>
      [...Array(50)].map((_, i) => ({
        id: i,
        initialX:
          typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
        endY: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
        endX:
          typeof window !== 'undefined'
            ? Math.random() * window.innerWidth + (Math.random() - 0.5) * 100
            : Math.random() * 1000,
        duration: 5 + Math.random() * 3,
        delay: Math.random() * 5,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80"
          initial={{ x: particle.initialX, y: -20 }}
          animate={{ y: particle.endY, x: particle.endX }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// 비 효과
function RainParticles() {
  const particles = useMemo(
    () =>
      [...Array(100)].map((_, i) => ({
        id: i,
        initialX:
          typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
        endY: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
        duration: 1 + Math.random() * 0.5,
        delay: Math.random() * 2,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-0.5 h-8 bg-pastel-blue opacity-40"
          initial={{ x: particle.initialX, y: -20 }}
          animate={{ y: particle.endY }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
