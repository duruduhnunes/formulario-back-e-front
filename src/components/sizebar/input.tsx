import { ComponentProps } from "react";

export function InputPrefix(props: ComponentProps<"div">) {
  return <div {...props} />;
}

export function InputControl(props: ComponentProps<"input">) {
  return (
    <input
      className="w-full h-full bg-transparent border p-4 rounded-lg pl-12 pr-12 placeholder:text-slate-400 focus:outline-none focus:ring-0 text-lg text-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400"
      {...props}
    />
  )
}

export function InputRoot(props: ComponentProps<"div">) {
  return (
    <div
      className="relative flex items-center border border-slate-300 dark:border-slate-600 rounded-xl shadow-sm focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 focus:outline-none dark:bg-slate-700 dark:focus-within:border-violet-400 dark:focus-within:ring-violet-400/20 bg-slate-50 h-16"
      {...props}
    />
  );
}
