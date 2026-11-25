import { Copyright } from "@/components/common/copyright"
import { Container } from "@/components/layout/container"

// 하단 푸터. 저작권 연도는 Copyright 컴포넌트에서 렌더 시점 값을 사용합니다.
export function SiteFooter() {
  return (
    <footer className="border-t py-6 text-sm text-muted-foreground">
      <Container className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <Copyright />
        <p>Built with Next.js & shadcn/ui</p>
      </Container>
    </footer>
  )
}
