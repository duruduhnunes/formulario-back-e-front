"use client";
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";

export interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}
export function TabsItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative group px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700  data-[state=active]:text-violet-700 outline-none dark:text-zinc-400 dark:data-[state=active]:text-violet-300 dark:hover:text-violet-300"
    >
      <span className="group-focus-visible:ring-2 group-focus-visible:ring-violet-400 rounded-lg group-focus-visible:ring-offset-2">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 right-0 h-0.5 bg-violet-700 -bottom-px dark:bg-violet-300"
        ></motion.div>
      )}
    </Tabs.Trigger>
  );
}
