"use client"

import {
  FileText,
  Home,
  Lock,
  Mail,
  User,
} from "lucide-react"
import { ExpandedTabs } from "./ui/expanded-tabs"
import { IoPerson } from "react-icons/io5"
import { GrProjects } from "react-icons/gr"
import { LuGalleryHorizontalEnd } from "react-icons/lu"


export function DefaultDemo() {
  const tabs = [
    { title: "Home", icon: Home, href: "/" },
    { title: "Project", icon: GrProjects, href: "/project" },
    { type: "separator" as const },
    { title: "About", icon: IoPerson, href: "/about" },
    { title: "Gallery", icon: LuGalleryHorizontalEnd, href: "/gallery" },
  ]

  return (
    <div className="flex items-center justify-center">
      <ExpandedTabs
        tabs={tabs}
      />
    </div>
  )
}

export function CustomColorDemo() {
  const tabs = [
    { title: "Profile", icon: User },
    { title: "Messages", icon: Mail },
    { type: "separator" as const },
    { title: "Documents", icon: FileText },
    { title: "Privacy", icon: Lock },
  ]

  return (
    <div className="flex flex-col gap-4">
      <ExpandedTabs
        tabs={tabs}
        activeColor="text-blue-500"
        className="border-blue-200 dark:border-blue-800"
      />
      </div>
  )
}
