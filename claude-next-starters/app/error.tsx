"use client"

import { useEffect } from "react"
import { AlertTriangleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { EmptyState } from "@/components/common/empty-state"
import { Section } from "@/components/layout/section"

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

// 렌더링 중 발생한 오류를 사용자에게 안내하고 재시도 버튼을 제공합니다.
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Section>
      <Container>
        <EmptyState
          icon={AlertTriangleIcon}
          title="문제가 발생했습니다"
          description="잠시 후 다시 시도해 주세요."
          action={<Button onClick={() => reset()}>다시 시도</Button>}
        />
      </Container>
    </Section>
  )
}
