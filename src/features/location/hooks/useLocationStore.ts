import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Region } from '@/types'
import { LocationState } from '../types/location.types'

const DEFAULT_REGION: Region = {
  sido: '서울특별시',
  sigungu: '강남구',
  dongeupmyeon: '역삼동',
  administrativeCode: '1168010100',
  coordinates: {
    latitude: 37.5003,
    longitude: 127.0363,
  },
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      selectedRegion: DEFAULT_REGION,
      administrativeCode: DEFAULT_REGION.administrativeCode,
      setLocation: (region: Region) =>
        set({
          selectedRegion: region,
          administrativeCode: region.administrativeCode,
        }),
      clearLocation: () =>
        set({
          selectedRegion: null,
          administrativeCode: '',
        }),
    }),
    {
      name: 'seedmate-location-storage',
    },
  ),
)
