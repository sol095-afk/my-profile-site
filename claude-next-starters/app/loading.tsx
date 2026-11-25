import { Skeleton } from "@/components/ui/skeleton"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

// 라우트 전환 중 표시되는 기본 로딩 화면입니다.
export default function Loading() {
  return (
    <Section>
      <Container className="space-y-6">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-2/3" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-32 rounded-xl" />
          <Skeleton className="h-32 rounded-xl" />
          <Skeleton className="h-32 rounded-xl" />
        </div>
      </Container>
    </Section>
  )
}
