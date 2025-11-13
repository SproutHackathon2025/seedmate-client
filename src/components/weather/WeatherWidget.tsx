'use client'

import { Thermometer } from './Thermometer'
import { Hygrometer } from './Hygrometer'
import { Clock } from './Clock'

interface WeatherWidgetProps {
  temperature: number
  humidity: number
  className?: string
}

export function WeatherWidget({ temperature, humidity, className = '' }: WeatherWidgetProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      <Thermometer temperature={temperature} />
      <Hygrometer humidity={humidity} />
      <Clock />
    </div>
  )
}
