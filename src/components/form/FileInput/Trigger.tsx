"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {
  const { id } = useFileInput();

  return (
    <div className="border border-zinc-300 h-40 w-80 cursor-pointer rounded-lg items-center justify-center flex shadow-sm hover:bg-violet-50 dark:border-zinc-700 dark:hover:bg-zinc-800">
      <label
        htmlFor={id}
        className="-mt-24 group flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border-zinc-800 h-12 w-12 px-6 py-4 text-center text-zinc-500 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-500 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
      >
        <div className=" group-hover:bg-violet-100 rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
          <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-300" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-semibold leading-tight text-violet-700 dark:text-violet-300">
            Click to upload{" "}
            <span className="text-zinc-500">or drag and drop</span>
          </span>
          <span className="text-xs text-zinc-500">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </span>
        </div>
      </label>
    </div>
  );
}
