"use client"

import { Button } from "@/components/ui/button"
import { useCounterStore } from "@/stores/counter-store"

// Zustand 스토어를 구독하는 예시입니다. 여러 컴포넌트가 같은 값을 공유할 수 있습니다.
export function CounterDemo() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const reset = useCounterStore((state) => state.reset)

  return (
    <div className="flex items-center gap-3">
      <span className="min-w-12 text-2xl font-semibold tabular-nums">{count}</span>
      <Button onClick={increment}>+1</Button>
      <Button variant="outline" onClick={reset}>
        초기화
      </Button>
    </div>
  )
}
