import { create } from 'zustand'

export const useStore = create((set) => ({
  trigger: false,
  setTrigger: (value) => set({ trigger: value }),
}))