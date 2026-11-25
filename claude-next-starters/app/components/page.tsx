import type { Metadata } from "next"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Textarea } from "@/components/ui/textarea"
import { ContactForm } from "@/components/common/contact-form"
import { CounterDemo } from "@/components/common/counter-demo"
import { PageHeader } from "@/components/common/page-header"
import { ToastDemo } from "@/components/common/toast-demo"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export const metadata: Metadata = {
  title: "컴포넌트",
  description: "스타터킷에 포함된 shadcn/ui 컴포넌트와 공용 컴포넌트 쇼케이스입니다.",
}

const users = [
  { name: "김개발", role: "Frontend", status: "활성" },
  { name: "이디자인", role: "Designer", status: "휴가" },
  { name: "박백엔드", role: "Backend", status: "활성" },
]

// 설치된 컴포넌트를 한 화면에서 확인하고, 사용 예시를 참고하는 페이지입니다.
export default function ComponentsPage() {
  return (
    <Section>
      <Container className="space-y-12">
        <PageHeader title="컴포넌트" description="설치된 shadcn/ui 컴포넌트와 공용 컴포넌트 예시입니다." />

        <Demo title="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">홈</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>컴포넌트</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Demo>

        <Demo title="Button · Badge · Avatar">
          <div className="flex flex-wrap items-center gap-3">
            <Button>기본</Button>
            <Button variant="secondary">보조</Button>
            <Button variant="outline">외곽선</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="destructive">삭제</Button>
            <Badge>New</Badge>
            <Badge variant="outline">Outline</Badge>
            <Avatar>
              <AvatarFallback>KD</AvatarFallback>
            </Avatar>
          </div>
        </Demo>

        <Demo title="Card">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>카드 제목</CardTitle>
              <CardDescription>카드 설명 텍스트입니다.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">카드 본문 영역입니다.</CardContent>
          </Card>
        </Demo>

        <Demo title="Alert · Skeleton">
          <div className="space-y-4">
            <Alert>
              <AlertTitle>안내</AlertTitle>
              <AlertDescription>이 알림은 정보 메시지를 보여줍니다.</AlertDescription>
            </Alert>
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        </Demo>

        <Demo title="Form 요소 · Field 검증 (React Hook Form + Zod)">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="max-w-sm space-y-4">
              <div className="space-y-2">
                <Label htmlFor="basic-input">기본 입력</Label>
                <Input id="basic-input" placeholder="입력하세요" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="basic-textarea">텍스트 영역</Label>
                <Textarea id="basic-textarea" placeholder="여러 줄 입력" />
              </div>
              <Select defaultValue="kr">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kr">한국어</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Checkbox id="check-demo" />
                  <Label htmlFor="check-demo">동의</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="switch-demo" />
                  <Label htmlFor="switch-demo">알림</Label>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Demo>

        <Demo title="Dialog · Tooltip · Toast">
          <div className="flex flex-wrap items-center gap-3">
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>다이얼로그 열기</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>확인</DialogTitle>
                  <DialogDescription>이 작업을 진행할까요?</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button>확인</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Tooltip>
              <TooltipTrigger render={<Button variant="ghost" />}>툴팁</TooltipTrigger>
              <TooltipContent>마우스를 올리면 보입니다</TooltipContent>
            </Tooltip>
            <ToastDemo />
          </div>
        </Demo>

        <Demo title="Tabs · Table">
          <div className="space-y-6">
            <Tabs defaultValue="list">
              <TabsList>
                <TabsTrigger value="list">목록</TabsTrigger>
                <TabsTrigger value="grid">그리드</TabsTrigger>
              </TabsList>
              <TabsContent value="list" className="pt-4 text-sm text-muted-foreground">
                목록 형태로 보여줍니다.
              </TabsContent>
              <TabsContent value="grid" className="pt-4 text-sm text-muted-foreground">
                카드 그리드로 보여줍니다.
              </TabsContent>
            </Tabs>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>이름</TableHead>
                  <TableHead>역할</TableHead>
                  <TableHead>상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.name}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Demo>

        <Demo title="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Demo>

        <Demo title="Zustand 상태 관리">
          <CounterDemo />
        </Demo>
      </Container>
    </Section>
  );
}

// 쇼케이스 섹션의 공통 제목 래퍼입니다.
function Demo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="rounded-xl border p-6">{children}</div>
    </section>
  );
}
