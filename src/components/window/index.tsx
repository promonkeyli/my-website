import type React from "react";
import { type RefObject, useImperativeHandle, useState } from "react";
import "./index.css";

export interface IWindowRef {
  open: () => {};
  close: () => {};
}
export interface IWindowProps {
  ref?: IWindowRef & any;
  children?: React.ReactNode;
}
export default function IWindow({ ref, ...props }: IWindowProps) {
  const { children } = props;
  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        setOpen(true);
      },
      close: onClose,
    }),
    [],
  );

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="i-window-modal-overlay">
      <div className="w-[70vw] h-[70vh] bg-white mx-auto my-[20px] rounded-xl flex flex-col">
        <div className="i-window-opt-container flex gap-2 p-2">
          <span className="i-window-opt-icon bg-[#ed6b60]" onClick={onClose}>
            <span>-</span>
          </span>
          <span className="i-window-opt-icon bg-[#f4be4f]">
            <span>+</span>
          </span>
          <span className="i-window-opt-icon bg-[#60c353]" onClick={onClose}>
            <span>x</span>
          </span>
        </div>
        <div className="flex-1 p-4 pt-2 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
