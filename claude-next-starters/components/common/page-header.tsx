import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
}

// 페이지 상단 제목 영역. 우측 액션 슬롯(children)을 받습니다.
export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 pb-8 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  )
}
