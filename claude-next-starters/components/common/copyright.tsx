"use client"

import { useSyncExternalStore } from "react"
import { getYear } from "date-fns"

import { siteConfig } from "@/lib/site-config"

const subscribe = () => () => {}

// 서버(프리렌더)에서는 값을 읽지 않고, 클라이언트에서만 현재 연도를 계산합니다.
export function Copyright() {
  const year = useSyncExternalStore(
    subscribe,
    () => getYear(new Date()),
    () => null
  )

  return (
    <p>
      © {year} {siteConfig.name}. All rights reserved.
    </p>
  )
}
