'use client'

import { MainLayout } from '@/components/layouts/MainLayout'
import { FarmerCharacter } from '@/components/character/FarmerCharacter'
import { CharacterSpeechBubble } from '@/components/character/CharacterSpeechBubble'
import { Thermometer } from '@/components/weather/Thermometer'
import { Hygrometer } from '@/components/weather/Hygrometer'
import { Clock } from '@/components/weather/Clock'
import { LocationSelector } from '@/components/location/LocationSelector'
import { LocationModal } from '@/components/location/LocationModal'
import { useLocationStore } from '@/features/location/hooks/useLocationStore'
import { useUIStore } from '@/store/ui-store'
import { useWeatherData } from '@/features/weather/hooks/useWeatherData'
import { useFarmingAdvice } from '@/features/advice/hooks/useFarmingAdvice'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { BottomNotice } from '@/components/common/BottomNotice'

export default function Home() {
  const { selectedRegion } = useLocationStore()
  const { selectedSeason } = useUIStore()

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    error: weatherError,
  } = useWeatherData(
    {
      lat: selectedRegion?.coordinates?.latitude || 37.5003,
      lon: selectedRegion?.coordinates?.longitude || 127.0363,
      adminCode: selectedRegion?.administrativeCode,
    },
    !!selectedRegion,
  )

  const { data: adviceData, isLoading: isAdviceLoading } = useFarmingAdvice(
    {
      region: selectedRegion
        ? `${selectedRegion.sido} ${selectedRegion.sigungu} ${selectedRegion.dongeupmyeon}`
        : '서울특별시 강남구 역삼동',
      weather: weatherData || {
        temperature: 22,
        humidity: 45,
        weatherCode: 'sunny',
        timestamp: new Date().toISOString(),
      },
      season: selectedSeason,
    },
    !!weatherData,
  )

  const temperature = weatherData?.temperature || 22
  const humidity = weatherData?.humidity || 45
  const weatherCode = weatherData?.weatherCode || 'sunny'
  const advice = adviceData?.advice || ''

  if (isWeatherLoading && !weatherData) {
    return <LoadingSpinner />
  }

  return (
    <MainLayout weatherCode={weatherCode}>
      <div className="relative min-h-screen px-4 py-6">
        <div className="absolute left-4 top-4 z-20 md:left-6 md:top-6">
          <LocationSelector />
        </div>

        <div className="absolute right-4 top-4 z-20 flex flex-col items-end gap-3 md:right-6 md:top-6">
          <div className="flex gap-2 md:gap-3">
            <Thermometer temperature={temperature} />
            <Hygrometer humidity={humidity} />
          </div>
          <Clock className="w-full max-w-xs" />
        </div>

        <div className="flex min-h-screen items-end justify-center pt-44 pb-[220px] md:items-center md:pt-28">
          <div className="flex w-full max-w-6xl flex-col items-center pl-24 pr-4 md:flex-row md:items-start md:justify-center">
            <FarmerCharacter season={selectedSeason} />
            <CharacterSpeechBubble
              advice={advice}
              isLoading={isAdviceLoading}
              className="w-full max-w-md md:max-w-xl md:-translate-y-10"
            />
          </div>
        </div>

        <div className="pointer-events-none fixed bottom-12 left-1/2 z-20 w-full max-w-4xl -translate-x-1/2 px-3 md:px-6 flex flex-col gap-y-4 items-center">
          <div className="pointer-events-auto rounded-[28px] border border-black/5 bg-[#ECE9E6]/95 px-6 py-5 shadow-lg md:px-8 md:py-6 w-full">
            <h3 className="text-base font-bold text-[#3B9D62] md:text-lg">오늘의 농사 한마디</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-800 md:text-base">“{advice}”</p>
          </div>

          <BottomNotice
            text={`본 서비스는 참고용입니다. 실제 농사 판단은 현장 상황과 전문가의 조언을 병행하세요.`}
          />
        </div>

        {weatherError && process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-20 left-4 right-4 z-30 rounded bg-red-100 px-4 py-3 text-red-700 shadow">
            <strong className="font-bold">날씨 데이터 로드 실패: </strong>
            <span className="block sm:inline">
              백엔드 API가 연결되지 않았습니다. 기본값을 사용합니다.
            </span>
          </div>
        )}
      </div>

      <LocationModal />
    </MainLayout>
  )
}
