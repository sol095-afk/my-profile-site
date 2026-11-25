import { z } from "zod"

// 문의 폼 검증 스키마. 클라이언트 폼과 서버 액션이 같은 규칙을 공유합니다.
export const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해 주세요."),
  email: z.email("올바른 이메일 주소를 입력해 주세요."),
  message: z.string().min(10, "문의 내용은 10자 이상 입력해 주세요."),
})

export type ContactFormValues = z.infer<typeof contactSchema>
