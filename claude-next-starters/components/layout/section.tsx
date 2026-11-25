import { cn } from "@/lib/utils"

// 페이지 내 세로 구획. 모바일과 데스크톱의 여백을 다르게 줍니다.
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("py-12 md:py-20", className)} {...props} />
}
