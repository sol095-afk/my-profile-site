"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

// 데스크톱 전용 내비게이션. 현재 경로 링크를 강조합니다.
export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden items-center gap-6 md:flex" aria-label="주 메뉴">
      {siteConfig.nav.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-sm transition-colors hover:text-foreground",
              isActive ? "font-medium text-foreground" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
