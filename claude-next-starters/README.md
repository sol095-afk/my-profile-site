# Next Starter Kit

Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui로 빠르게 웹 프로젝트를 시작하기 위한 스타터킷입니다.

## 시작하기

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint 검사
```

## 기술 스택

| 영역 | 사용 기술 |
|---|---|
| 프레임워크 | Next.js (App Router), React, TypeScript |
| 스타일 | Tailwind CSS v4, shadcn/ui (base-nova), lucide-react |
| 테마 | next-themes (시스템 설정 연동 다크모드) |
| 폼 | React Hook Form, Zod, @hookform/resolvers |
| 상태 관리 | Zustand |
| 알림 | Sonner |
| 유틸리티 | clsx, tailwind-merge, date-fns |

## 폴더 구조와 계층

컴포넌트는 역할에 따라 계층을 나눕니다. 의존 방향은 `sections → layout → common → ui` 한 방향만 허용합니다.

```
app/                    라우트 (page, layout, not-found, error, loading)
components/
├─ ui/                  Level 1 원자: shadcn 컴포넌트 (CLI로 추가)
├─ common/              Level 2 분자: 공용 조합 (theme-toggle, logo, page-header, empty-state, contact-form)
├─ layout/              Level 3 구조: container, section, site-header, main-nav, mobile-nav, site-footer
├─ providers/           앱 전역 Provider (theme-provider)
└─ sections/            Level 4 페이지 섹션: hero, features, tech-stack
lib/
├─ site-config.ts       사이트 이름, 설명, 내비게이션 등 전역 설정
├─ utils.ts             cn() 클래스 병합 유틸리티
└─ validations/         Zod 검증 스키마
stores/                 Zustand 전역 상태
```

## 자주 하는 작업

### 새 shadcn 컴포넌트 추가

```bash
npx shadcn@latest add <component-name>
```

설치된 파일은 `components/ui/`에 생깁니다. 기존 파일을 덮어쓰지 않도록 주의하세요.

### 새 페이지 추가

1. `app/<route>/page.tsx`를 만듭니다.
2. `metadata`를 export해 제목과 설명을 지정합니다.
3. `Section`과 `Container`로 감싸면 헤더·푸터와 여백이 맞춰집니다.

```tsx
import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/common/page-header"

export const metadata: Metadata = { title: "새 페이지" }

export default function NewPage() {
  return (
    <Section>
      <Container>
        <PageHeader title="새 페이지" description="설명을 입력하세요." />
      </Container>
    </Section>
  )
}
```

### 내비게이션 메뉴 변경

`lib/site-config.ts`의 `nav` 배열을 수정하면 헤더와 모바일 메뉴에 함께 반영됩니다.

### 폼 추가

`components/common/contact-form.tsx`를 참고하세요. `lib/validations/`에 Zod 스키마를 두고, `useForm`에 `zodResolver`를 연결한 뒤 `Field` 컴포넌트로 입력을 감쌉니다.

### 전역 상태 추가

`stores/counter-store.ts`처럼 `create`로 스토어를 만들고, 컴포넌트에서는 선택자(selector)로 필요한 값만 구독합니다.

## 규칙

- 들여쓰기는 2칸을 사용합니다.
- `any` 타입은 사용하지 않습니다.
- 컴포넌트는 역할별로 분리하고 재사용을 우선합니다.
- 모든 화면은 모바일 폭에서도 깨지지 않아야 합니다.
- 서버 컴포넌트가 기본이며, 상호작용이 필요할 때만 `"use client"`를 씁니다.

## 참고

- `cacheComponents`가 켜져 있어 `new Date()` 같은 요청 시점 값은 프리렌더 중 읽을 수 없습니다. 클라이언트에서 마운트 후 읽는 방식을 사용합니다(`components/common/copyright.tsx`).
- 환경변수 검증이 필요하면 `@t3-oss/env-nextjs` 도입을 권장합니다. 이번 스타터킷에는 포함하지 않았습니다.
