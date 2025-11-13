'use client'

import { motion } from 'framer-motion'
import { fadeAnimation } from '@/lib/animations/weatherAnimations'

interface BottomNoticeProps {
  text: string
}

export function BottomNotice({ text }: BottomNoticeProps) {
  return (
    <motion.div
      {...fadeAnimation}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-black/40 backdrop-blur-sm py-3 px-6 text-center z-30 max-w-3xl"
    >
      <p className="text-xs md:text-sm text-white/90">{text}</p>
    </motion.div>
  )
}
