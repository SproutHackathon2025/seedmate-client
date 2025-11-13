import { create } from 'zustand'
import { Season } from '@/types'
import { getCurrentSeason } from '@/constants/seasons'

interface UIState {
  isLocationModalOpen: boolean
  selectedSeason: Season
  currentTime: Date
  setModalOpen: (open: boolean) => void
  setSeason: (season: Season) => void
  updateCurrentTime: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isLocationModalOpen: false,
  selectedSeason: getCurrentSeason(),
  currentTime: new Date(),
  setModalOpen: (open: boolean) => set({ isLocationModalOpen: open }),
  setSeason: (season: Season) => set({ selectedSeason: season }),
  updateCurrentTime: () => set({ currentTime: new Date() }),
}))
