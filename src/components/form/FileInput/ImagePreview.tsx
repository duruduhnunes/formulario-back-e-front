"use client";

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className=" flex justify-center h-16 w-16 rounded-full border-zinc-300 bg-violet-50 dark:bg-violet-500/10">
        <User className="w-8 h-8 text-violet-500 mt-3 dark:text-violet-300" />
      </div>
    );
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt=""
        className="w-16 h-16 rounded-full object-cover"
      />
    );
  }
}
