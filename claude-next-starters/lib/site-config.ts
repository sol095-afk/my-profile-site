// 사이트 전역 설정. header, footer, metadata가 이 한 곳을 공유합니다.
export const siteConfig = {
  name: "Next Starter Kit",
  description:
    "Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui로 빠르게 시작하는 웹 스타터킷",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "ko_KR",
  nav: [
    { title: "홈", href: "/" },
    { title: "소개", href: "/about" },
    { title: "컴포넌트", href: "/components" },
  ],
} as const

export type NavItem = (typeof siteConfig.nav)[number]
