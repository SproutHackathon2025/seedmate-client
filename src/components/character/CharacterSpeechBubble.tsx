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
          className={`relative left-[-340px] top-[200px] w-[92vw] max-w-[380px] rounded-2xl bg-white px-9 py-8 text-[#17334a] shadow-[0_20px_40px_rgba(23,51,74,0.15)] sm:w-auto sm:min-w-[400px] sm:px-8 sm:py-6 border-2 border-black ${className}`}
        >
          <div className="relative z-10">
            {isLoading ? (
              <LoadingDots />
            ) : (
              <p className="text-base leading-relaxed text-[#17334a] md:text-lg">
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

          {/* Tail */}
          <div className="absolute bottom-[15px] left-[-32px] hidden sm:block">
            <div
              className="h-0 w-0 border-x-transparent border-black absolute -bottom-px left-0"
              style={{ borderBottomWidth: 17, borderLeftWidth: 32 }}
            />
            <div
              className="h-0 w-0 border-x-transparent border-white absolute bottom-0 left-[2px]"
              style={{ borderBottomWidth: 15, borderLeftWidth: 30 }}
            />
            <div
              className="h-0 w-0 border-x-transparent border-black"
              style={{ borderBottomWidth: 17, borderLeftWidth: 32 }}
            />
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
