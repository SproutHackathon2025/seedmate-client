'use client'

import { Season } from '@/types'
import Image from 'next/image'

interface FarmerCharacterProps {
  season: Season
  className?: string
}

export function FarmerCharacter({ season, className = '' }: FarmerCharacterProps) {
  const getCharacterImage = () => {
    return `/images/chracters/farmer-${season}.png`
  }

  return (
    <div className={`relative flex justify-center ${className}`}>
      <div className="relative h-[700px] w-[700px]">
        <Image
          src={getCharacterImage()}
          alt={`${season} 농부 캐릭터`}
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}
