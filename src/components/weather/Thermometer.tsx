'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { widgetEnterAnimation } from '@/lib/animations/weatherAnimations'

interface ThermometerProps {
  temperature: number
  className?: string
}

export function Thermometer({ temperature, className = '' }: ThermometerProps) {
  return (
    <motion.div
      {...widgetEnterAnimation}
      className={`flex items-center rounded-2xl bg-[#F5F4F2] p-3 shadow-lg ${className}`}
    >
      <div className="relative h-12 w-12">
        <Image src="/images/assets/thermometer.png" alt="온도계" fill className="object-contain" />
      </div>
      <motion.span
        key={temperature}
        className="text-lg font-semibold text-gray-900 md:text-xl"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Math.round(temperature)}°C
      </motion.span>
    </motion.div>
  )
}
