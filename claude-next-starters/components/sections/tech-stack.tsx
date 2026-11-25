import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "lucide-react",
  "next-themes",
  "React Hook Form",
  "Zod",
  "Zustand",
  "date-fns",
  "Sonner",
]

// 사용 중인 기술 스택 목록입니다. 새 라이브러리를 추가하면 여기에 함께 적어 주세요.
export function TechStack() {
  return (
    <Section className="border-t">
      <Container className="space-y-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">기술 스택</h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
