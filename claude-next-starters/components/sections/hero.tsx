import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

// 홈 최상단 소개 영역. 모바일에서는 세로로, 데스크톱에서는 가운데 정렬로 배치합니다.
export function Hero() {
  return (
    <Section className="pt-16 pb-12 md:pt-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Next.js 16 · React 19 · Tailwind v4</Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          새 프로젝트를 <span className="text-primary">바로 시작</span>하세요
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          레이아웃, 다크모드, 폼 검증, 상태 관리까지 필요한 기본기를 갖춘 웹 스타터킷입니다.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button size="lg" nativeButton={false} render={<Link href="/components" />}>
            컴포넌트 보기
            <ArrowRightIcon />
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/about" />}>
            소개 페이지
          </Button>
        </div>
      </Container>
    </Section>
  )
}
