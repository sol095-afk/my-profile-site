import Link from "next/link"
import { SearchXIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { EmptyState } from "@/components/common/empty-state"
import { Section } from "@/components/layout/section"

export default function NotFound() {
  return (
    <Section>
      <Container>
        <EmptyState
          icon={SearchXIcon}
          title="페이지를 찾을 수 없습니다"
          description="주소가 잘못되었거나 페이지가 이동되었을 수 있습니다."
          action={
            <Button nativeButton={false} render={<Link href="/" />}>
              홈으로 돌아가기
            </Button>
          }
        />
      </Container>
    </Section>
  )
}
