import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/common/page-header"
import { Section } from "@/components/layout/section"

export const metadata: Metadata = {
  title: "소개",
  description: "스타터킷의 구조와 사용 방법을 소개합니다.",
}

// 내비게이션 연결 예시 페이지입니다. 새 페이지는 이 구조를 복사해 만듭니다.
export default function AboutPage() {
  return (
    <Section>
      <Container>
        <PageHeader title="소개" description="이 스타터킷의 구조와 사용 방법을 설명합니다." />
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>폴더 구조</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              ui(원자), common(공용 조합), layout(뼈대), sections(페이지 섹션) 순으로 계층을 나눕니다.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>사이트 설정</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              lib/site-config.ts에서 사이트 이름, 설명, 내비게이션 메뉴를 한 번에 관리합니다.
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
