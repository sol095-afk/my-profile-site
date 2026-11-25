import Link from "next/link"
import { RocketIcon } from "lucide-react"

import { siteConfig } from "@/lib/site-config"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <RocketIcon className="size-5" />
      <span>{siteConfig.name}</span>
    </Link>
  )
}
