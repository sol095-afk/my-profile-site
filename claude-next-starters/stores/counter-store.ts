import { create } from "zustand"

type CounterState = {
  count: number
  increment: () => void
  reset: () => void
}

// Zustand 전역 상태 예시입니다. 새 스토어도 같은 방식으로 `create`를 사용합니다.
export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}))
