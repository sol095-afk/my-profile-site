import { GaugeIcon, PaletteIcon, ShieldCheckIcon, SmartphoneIcon, LayersIcon, ZapIcon } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const features = [
  { icon: ZapIcon, title: "빠른 시작", description: "App Router 기반 구조와 공통 레이아웃이 준비되어 있습니다." },
  { icon: PaletteIcon, title: "디자인 시스템", description: "shadcn/ui 컴포넌트를 복사해 바로 커스터마이징할 수 있습니다." },
  { icon: SmartphoneIcon, title: "반응형 기본값", description: "모바일부터 데스크톱까지 깨지지 않는 레이아웃을 제공합니다." },
  { icon: GaugeIcon, title: "성능 최적화", description: "next/font와 정적 프리렌더링을 기본으로 사용합니다." },
  { icon: ShieldCheckIcon, title: "폼 검증", description: "React Hook Form과 Zod로 타입 안전한 입력 검증을 제공합니다." },
  { icon: LayersIcon, title: "계층형 구조", description: "ui, common, layout, sections로 역할을 나눠 재사용하기 쉽습니다." },
]

// 스타터킷의 핵심 장점을 카드 그리드로 소개합니다.
export function Features() {
  return (
    <Section>
      <Container className="space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">주요 기능</h2>
          <p className="text-muted-foreground">프로젝트에 필요한 기본 요소를 한 번에 담았습니다.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="mb-2 size-6 text-primary" />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
