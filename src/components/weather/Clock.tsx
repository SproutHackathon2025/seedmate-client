'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { widgetEnterAnimation } from '@/lib/animations/weatherAnimations'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

interface ClockProps {
  className?: string
}

export function Clock({ className = '' }: ClockProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      {...widgetEnterAnimation}
      className={`flex items-center gap-6 rounded-2xl bg-[#F5F4F2] px-5 py-4 shadow-lg ${className}`}
    >
      <div className="relative h-16 w-16 md:h-20 md:w-20">
        <Image src="/images/assets/clock.png" alt="시계" fill className="object-contain" />
      </div>
      <div className="text-md font-semibold text-gray-900 md:text-xl">
        <div>{format(currentTime, 'yyyy년')}</div>
        <div>{format(currentTime, 'MM월 dd일')}</div>
        <div>{format(currentTime, 'HH:mm')}</div>
      </div>
    </motion.div>
  )
}
