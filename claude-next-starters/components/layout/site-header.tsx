import { Container } from "@/components/layout/container"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Logo } from "@/components/common/logo"
import { ThemeToggle } from "@/components/common/theme-toggle"

// 상단 고정 헤더. 데스크톱은 내비게이션을 표시하고 모바일은 시트 메뉴를 사용합니다.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <MainNav />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
