"use client";

import * as SelectPrimitiv from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export function Select({ children, placeholder, ...props }: SelectPrimitiv.SelectProps & { children: ReactNode; placeholder: string }) {
  return (
    <SelectPrimitiv.Root {...props}>
      <SelectPrimitiv.Trigger className="flex h-12 w-full items-center justify-between gap-2 rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 focus:outline-none data-[placeholder]:text-slate-500 dark:border-slate-600">
        <SelectPrimitiv.Value
          placeholder={placeholder}
          className="text-slate-900 dark:text-slate-100"
        />

        <SelectPrimitiv.Icon>
          <ChevronDown className="h-5 w-5 text-slate-500" />
        </SelectPrimitiv.Icon>
      </SelectPrimitiv.Trigger>
      <SelectPrimitiv.Portal>
        <SelectPrimitiv.Content
          sideOffset={8}
          side="bottom"
          position="popper"
          className="z-10 rounded-lg border border-slate-200 bg-white w-[--radix-select-trigger-width] outline-none overflow-hidden animate-slideUpAndFade dark:bg-slate-800 dark:border-slate-600 shadow-lg"
        >
          <SelectPrimitiv.Viewport>{children}</SelectPrimitiv.Viewport>
        </SelectPrimitiv.Content>
      </SelectPrimitiv.Portal>
    </SelectPrimitiv.Root>
  );
}
