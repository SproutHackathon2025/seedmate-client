'use client'

import { motion } from 'framer-motion'

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pastel-sky to-pastel-mint">
      <motion.div
        className="w-16 h-16 border-4 border-pastel-blue border-t-pastel-coral rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
