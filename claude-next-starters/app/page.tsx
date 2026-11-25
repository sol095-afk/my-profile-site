import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";

// 홈 페이지는 섹션 컴포넌트를 조립만 합니다. 내용은 components/sections에서 수정하세요.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TechStack />
    </>
  );
}
