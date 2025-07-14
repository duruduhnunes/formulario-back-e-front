import { ComponentProps } from "react";

export function TextArea(props: ComponentProps<"textarea">) {
  return (
    <textarea
      className="min-h-[120px] resize-y w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-violet-400 dark:focus:ring-violet-400/20 dark:placeholder:text-slate-400 bg-slate-50 dark:bg-slate-700"
      {...props}
    />
  );
}
