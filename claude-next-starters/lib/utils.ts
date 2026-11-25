import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// 조건부 클래스를 합치고 Tailwind 충돌(예: p-2 vs p-4)을 정리합니다.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
