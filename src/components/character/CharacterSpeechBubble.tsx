'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { speechBubbleAnimation } from '@/lib/animations/characterAnimations'
import { useState, useEffect } from 'react'

interface CharacterSpeechBubbleProps {
  advice: string
  isLoading?: boolean
  className?: string
}

export function CharacterSpeechBubble({
  advice,
  isLoading = false,
  className = '',
}: CharacterSpeechBubbleProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (advice && !isLoading) {
      setIsTyping(true)
      setDisplayedText('')

      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < advice.length) {
          const nextCharacter = advice[currentIndex]
          setDisplayedText((prev) => prev + nextCharacter)
          currentIndex++
        } else {
          setIsTyping(false)
          clearInterval(typingInterval)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    }
  }, [advice, isLoading])

  return (
    <AnimatePresence mode="wait">
      {(advice || isLoading) && (
        <motion.div
          {...speechBubbleAnimation}
          className={`relative rounded-[28px] border border-black/5 bg-white px-8 py-6 shadow-xl left-[-400px] top-[200px] ${className}`}
        >
          <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 border border-black/5 bg-white shadow-sm" />

          <div className="relative z-10">
            {isLoading ? (
              <LoadingDots />
            ) : (
              <p className="text-base leading-relaxed text-gray-800 md:text-lg">
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1 inline-block"
                  >
                    |
                  </motion.span>
                )}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function LoadingDots() {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600">조언을 생성하는 중</span>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-2 w-2 rounded-full bg-pastel-blue"
          animate={{
            y: [0, -8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}
