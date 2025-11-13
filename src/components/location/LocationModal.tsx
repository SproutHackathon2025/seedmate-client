'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { useLocationStore } from '@/features/location/hooks/useLocationStore'
import { useUIStore } from '@/store/ui-store'
import {
  SIDO_LIST,
  SIGUNGU_DATA,
  DONGEUPMYEON_DATA,
  searchRegions,
} from '@/features/location/data/regions'
import { RegionData } from '@/features/location/types/location.types'
import { Region } from '@/types'

export function LocationModal() {
  const { isLocationModalOpen, setModalOpen } = useUIStore()
  const { setLocation } = useLocationStore()

  const [step, setStep] = useState<'sido' | 'sigungu' | 'dong'>('sido')
  const [selectedSido, setSelectedSido] = useState<RegionData | null>(null)
  const [selectedSigungu, setSelectedSigungu] = useState<RegionData | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<RegionData[]>([])

  const handleSidoSelect = (sido: RegionData) => {
    setSelectedSido(sido)
    setStep('sigungu')
  }

  const handleSigunguSelect = (sigungu: RegionData) => {
    setSelectedSigungu(sigungu)
    setStep('dong')
  }

  const handleDongSelect = (dong: RegionData) => {
    if (selectedSido && selectedSigungu) {
      const region: Region = {
        sido: selectedSido.name,
        sigungu: selectedSigungu.name,
        dongeupmyeon: dong.name,
        administrativeCode: dong.code,
        coordinates: dong.coordinates
          ? {
              latitude: dong.coordinates.lat,
              longitude: dong.coordinates.lon,
            }
          : undefined,
      }
      setLocation(region)
      handleClose()
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length >= 2) {
      const results = searchRegions(query)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  const handleClose = () => {
    setModalOpen(false)
    // 상태 초기화
    setTimeout(() => {
      setStep('sido')
      setSelectedSido(null)
      setSelectedSigungu(null)
      setSearchQuery('')
      setSearchResults([])
    }, 300)
  }

  return (
    <Dialog.Root open={isLocationModalOpen} onOpenChange={setModalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md max-h-[80vh] overflow-hidden bg-white rounded-2xl shadow-2xl"
          >
            {/* 헤더 */}
            <div className="bg-gradient-to-r from-pastel-blue to-pastel-green p-6">
              <Dialog.Title className="text-2xl font-bold text-white">지역 선택</Dialog.Title>
              <Dialog.Description className="text-white/80 text-sm mt-1">
                농사 정보를 받을 지역을 선택해주세요
              </Dialog.Description>
            </div>

            {/* 검색창 */}
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="지역명 검색 (예: 강남구, 역삼동)"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-blue"
              />
            </div>

            {/* 내용 */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {searchQuery && searchResults.length > 0 ? (
                // 검색 결과
                <div className="space-y-2">
                  {searchResults.map((result) => (
                    <button
                      key={result.code}
                      onClick={() => {
                        // 검색 결과에서 직접 선택 시 처리
                        // 간단하게 처리하기 위해 검색 결과를 선택하면 바로 적용
                        console.log('Selected from search:', result)
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-pastel-blue/20 transition-colors"
                    >
                      <p className="font-semibold text-gray-800">{result.name}</p>
                      <p className="text-sm text-gray-500">코드: {result.code}</p>
                    </button>
                  ))}
                </div>
              ) : searchQuery ? (
                <p className="text-center text-gray-500 py-8">검색 결과가 없습니다</p>
              ) : (
                // 단계별 선택
                <AnimatePresence mode="wait">
                  {step === 'sido' && (
                    <motion.div
                      key="sido"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-2"
                    >
                      <h3 className="font-semibold text-gray-700 mb-3">시/도 선택</h3>
                      {SIDO_LIST.map((sido) => (
                        <button
                          key={sido.code}
                          onClick={() => handleSidoSelect(sido)}
                          className="w-full text-left px-4 py-3 rounded-lg hover:bg-pastel-blue/20 transition-colors"
                        >
                          {sido.name}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {step === 'sigungu' && selectedSido && (
                    <motion.div
                      key="sigungu"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-2"
                    >
                      <button
                        onClick={() => setStep('sido')}
                        className="text-pastel-blue hover:text-pastel-coral mb-3"
                      >
                        ← 뒤로
                      </button>
                      <h3 className="font-semibold text-gray-700 mb-3">
                        {selectedSido.name} - 시/군/구 선택
                      </h3>
                      {(SIGUNGU_DATA[selectedSido.code] || []).map((sigungu) => (
                        <button
                          key={sigungu.code}
                          onClick={() => handleSigunguSelect(sigungu)}
                          className="w-full text-left px-4 py-3 rounded-lg hover:bg-pastel-blue/20 transition-colors"
                        >
                          {sigungu.name}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {step === 'dong' && selectedSigungu && (
                    <motion.div
                      key="dong"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-2"
                    >
                      <button
                        onClick={() => setStep('sigungu')}
                        className="text-pastel-blue hover:text-pastel-coral mb-3"
                      >
                        ← 뒤로
                      </button>
                      <h3 className="font-semibold text-gray-700 mb-3">
                        {selectedSigungu.name} - 읍/면/동 선택
                      </h3>
                      {(DONGEUPMYEON_DATA[selectedSigungu.code] || []).map((dong) => (
                        <button
                          key={dong.code}
                          onClick={() => handleDongSelect(dong)}
                          className="w-full text-left px-4 py-3 rounded-lg hover:bg-pastel-green/20 transition-colors"
                        >
                          {dong.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>

            {/* 닫기 버튼 */}
            <div className="p-4 border-t">
              <button
                onClick={handleClose}
                className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                닫기
              </button>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
