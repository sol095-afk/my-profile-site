"use client"

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

// 시스템 설정을 따르는 다크모드를 제공합니다. class 속성으로 .dark 클래스를 토글합니다.
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
