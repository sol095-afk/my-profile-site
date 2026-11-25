import { cn } from "@/lib/utils"

// 최대 폭을 제한하고 모바일에서는 좌우 16px 여백을 둡니다.
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}
