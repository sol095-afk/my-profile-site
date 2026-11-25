"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

// Sonner 토스트 호출 예시입니다.
export function ToastDemo() {
  return (
    <Button variant="outline" onClick={() => toast("토스트 메시지", { description: "Sonner로 표시됩니다." })}>
      토스트 띄우기
    </Button>
  )
}
