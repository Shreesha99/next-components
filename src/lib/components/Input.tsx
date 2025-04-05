import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inputVariants = cva(
  "block w-full appearance-none transition-colors duration-200 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:placeholder:text-gray-500 dark:disabled:bg-gray-700",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        destructive: "",
        ghost: "border-transparent bg-transparent focus:ring-gray-300",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export function Input({
  className,
  variant,
  size,
  disabled,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>) {
  return (
    <input
      {...props}
      disabled={disabled}
      className={cn(inputVariants({ variant, size }), className)}
    />
  );
}
