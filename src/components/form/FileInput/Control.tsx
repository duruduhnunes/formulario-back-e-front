"use client";
import { useFileInput } from "./Root";
import { ChangeEvent, ComponentProps } from "react";

export interface ControlProps extends ComponentProps<"input"> {}
export function Control({multiple=false, ...props}: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleOnFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }
    const files = Array.from(event.target.files);
    onFilesSelected(files, multiple);
  }
  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={(event) => handleOnFileSelected(event)}
      multiple={multiple}
      {...props}
    />
  );
}
