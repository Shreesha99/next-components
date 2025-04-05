import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { FiChevronUp } from "react-icons/fi";

const accordionVariants = cva(
  "rounded-2xl border bg-white dark:bg-gray-900 transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "border-gray-200 dark:border-gray-700",
        subtle: "border-transparent shadow-sm",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const headerThemeClasses: Record<string, string> = {
  default:
    "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100",
  primary:
    "bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-100",
  success:
    "bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900 dark:hover:bg-green-800 dark:text-green-100",
  warning:
    "bg-yellow-100 hover:bg-yellow-200 text-yellow-900 dark:bg-yellow-900 dark:hover:bg-yellow-800 dark:text-yellow-100",
  destructive:
    "bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-100",
};

export function Accordion({
  title,
  children,
  variant,
  theme = "default",
  size,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  theme?: "default" | "primary" | "success" | "warning" | "destructive";
} & VariantProps<typeof accordionVariants>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={twMerge(accordionVariants({ variant, size }), className)}>
      <button
        className={twMerge(
          "w-full flex items-center justify-between px-4 py-3 font-medium transition-all",
          headerThemeClasses[theme],
          isOpen ? "rounded-t-2xl" : "rounded-2xl"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span
          className="transform transition-transform"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <FiChevronUp size={20} />
        </span>
      </button>
      <div
        className={twMerge(
          "transition-all overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100",
          isOpen
            ? "max-h-96 px-4 py-3 rounded-b-2xl"
            : "max-h-0 px-4 py-0 opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}
