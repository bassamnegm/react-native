import { create } from 'zustand'

interface countStore {
    count: number,
    inc: () => void,
    dec: () => void
}
export const useCounterStore = create<countStore>((set, get) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 }))
}))