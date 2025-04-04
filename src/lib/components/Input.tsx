import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inputVariants = cva(
  "block w-full appearance-none transition-colors duration-200 border focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus:ring-gray-500",
        primary: "border-teal-300 focus:ring-teal-500",
        secondary: "border-blue-300 focus:ring-blue-500",
        success: "border-green-300 focus:ring-green-500",
        warning: "border-yellow-400 focus:ring-yellow-500",
        destructive: "border-red-500 focus:ring-red-500",
        ghost: "border-transparent focus:ring-gray-300",
      },
      size: {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-4 py-2 text-base rounded-md",
        lg: "px-5 py-3 text-lg rounded-lg",
      },
      disabled: {
        true: "bg-gray-100 cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
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
      className={cn(inputVariants({ variant, size, disabled }), className)}
    />
  );
}
