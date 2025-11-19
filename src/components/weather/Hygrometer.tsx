'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { widgetEnterAnimation } from '@/lib/animations/weatherAnimations'

interface HygrometerProps {
  humidity: number
  className?: string
}

export function Hygrometer({ humidity, className = '' }: HygrometerProps) {
  const clampedHumidity = Math.max(0, Math.min(100, humidity))

  return (
    <motion.div
      {...widgetEnterAnimation}
      className={`flex items-center rounded-2xl bg-[#F5F4F2] p-3 shadow-lg ${className}`}
    >
      <div className="relative h-12 w-12">
        <Image src="/images/assets/hygrometer.png" alt="습도계" fill className="object-contain" />
      </div>
      <motion.span
        key={clampedHumidity}
        className="text-md font-semibold text-gray-900 md:text-xl"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Math.round(clampedHumidity)}%
      </motion.span>
    </motion.div>
  )
}
