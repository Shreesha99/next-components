import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const accordionVariants = cva("border rounded-lg shadow-sm", {
  variants: {
    variant: {
      default: "border-gray-300 bg-white",
      primary: "border-blue-500 bg-blue-50",
      success: "border-green-500 bg-green-50",
      warning: "border-yellow-500 bg-yellow-50",
      destructive: "border-red-500 bg-red-50",
    },
    size: {
      sm: "text-sm p-3",
      md: "text-base p-4",
      lg: "text-lg p-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export function Accordion({
  title,
  children,
  variant,
  size,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof accordionVariants>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={twMerge(accordionVariants({ variant, size }), className)}>
      <button
        className={twMerge(
          "w-full flex items-center justify-between px-4 py-3 font-medium transition-all border-b bg-gray-100 hover:bg-gray-200 rounded-t-lg",
          className || ""
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="transform transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▼
        </span>
      </button>
      <div className={twMerge("overflow-hidden transition-all", isOpen ? "max-h-96 p-4" : "max-h-0 p-0 opacity-0")}>{children}</div>
    </div>
  );
}
