'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocationStore } from '@/features/location/hooks/useLocationStore'
import { useUIStore } from '@/store/ui-store'
import { widgetEnterAnimation } from '@/lib/animations/weatherAnimations'

interface LocationSelectorProps {
  className?: string
}

export function LocationSelector({ className = '' }: LocationSelectorProps) {
  const { selectedRegion } = useLocationStore()
  const { setModalOpen } = useUIStore()

  const mainLocation = selectedRegion
    ? `${selectedRegion.sido}, ${selectedRegion.sigungu}`
    : '지역을 선택해주세요'

  const subLocation = '맑음, 바람 약간'

  return (
    <motion.button
      {...widgetEnterAnimation}
      onClick={() => setModalOpen(true)}
      className={`bg-[#F5F4F2] backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl ${className} min-w-[280px] cursor-pointer`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-left flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{mainLocation}</h3>
          <p className="text-sm text-gray-600">{subLocation}</p>
        </div>
        <div className="shrink-0 w-10 h-10 flex items-center justify-center">
          <Image
            src="/images/assets/edit-location.svg"
            alt="위치 변경"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </motion.button>
  )
}
