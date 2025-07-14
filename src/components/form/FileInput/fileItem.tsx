import { Button } from "@/components/button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CheckCircle2, Icon, Trash2, UploadCloud } from "lucide-react";
import { ComponentProps } from "react";
import { useFileInput } from "./Root";
import { formatBytes } from "@/utils/formatBytes";
import { tv, VariantProps } from "tailwind-variants";

const fileItem = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    Icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500",
    deleteButton: "",
  },

  variants: {
    state: {
      progress: {
        container: "dark:border-zinc-700",
      },
      complete: {
        container: "bg-violet-50 dark:bg-zinc-300/5 dark:border-zinc-700/30",
      },
      error: {
        Icon: "border-red-200 bg-red-100 text-red-600 dark:bg-red-800/5 dark:border-red-800/30 dark:text-red-400",
        container:
          "bg-red-50 border-red-200 dark:bg-red-900/5 dark:border-red-300/30",
        deleteButton:
          "text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300",
      },
    },
  },
  defaultVariants: {
    state: "progress",
  },
});
export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}
export function FileItem({ name, size, state }: FileItemProps) {
  const { container, Icon, deleteButton } = fileItem({ state });

  return (
    <div className={container()}>
      <div className={Icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-red-700 dark:red-400">
              Upload failed, please try again
            </span>
            <span className="text-sm text-red-600 dark:text-red-500">
              {name}
            </span>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-red-700 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
          >
            try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-violet-100 dark:bg-zinc-600">
              <div
                className="h-2  rounded-full bg-violet-600 dark:bg-violet-400"
                style={{ width: state ? "100%" : "80%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {state === "complete" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {state === "complete" ? (
        <CheckCircle2 className="h-5 w-5 text-violet-600 text-white" />
      ) : (
        <Button variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5 cursor-pointer" />
        </Button>
      )}
    </div>
  );
}
