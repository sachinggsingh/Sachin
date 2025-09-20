"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";

import { Home } from "lucide-react";
import { IoPerson } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { LuGalleryHorizontalEnd } from "react-icons/lu";

// ---- Your Navigation + Social Links ----
const DATA = {
  navbar: [
    { href: "/", icon: Home, label: "Home" },
    { href: "/project", icon: GrProjects, label: "Project" },
    { href: "/about", icon: IoPerson, label: "About" },
    { href: "/gallery", icon: LuGalleryHorizontalEnd, label: "Gallery" },
  ],
};

export function DockDemo() {
  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          {/* <Separator orientation="vertical" className="h-full" /> */}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
