import { Region } from '@/types'

export interface LocationState {
  selectedRegion: Region | null
  administrativeCode: string
  setLocation: (region: Region) => void
  clearLocation: () => void
}

export interface RegionData {
  code: string
  name: string
  parentCode?: string
  coordinates?: {
    lat: number
    lon: number
  }
}

export interface RegionHierarchy {
  sido: RegionData[]
  sigungu: Record<string, RegionData[]>
  dongeupmyeon: Record<string, RegionData[]>
}
