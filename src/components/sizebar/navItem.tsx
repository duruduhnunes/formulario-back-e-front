'use client'

import { ElementType } from "react";
import { usePathname } from "next/navigation";

export interface NavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === "/" && title === "Dashboard";

  return (
    <a
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group ${
        isActive
          ? "bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400"
          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50"
      }`}
    >
      <Icon 
        className={`h-4 w-4 transition-colors ${
          isActive
            ? "text-violet-600 dark:text-violet-400"
            : "text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300"
        }`} 
      />
      <span className="transition-colors">
        {title}
      </span>
    </a>
  );
}
