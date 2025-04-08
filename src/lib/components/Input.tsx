import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300",
        primary: "border-blue-500",
        secondary: "border-purple-500",
        success: "border-green-500",
        warning: "border-yellow-500",
        destructive: "border-red-500",
        ghost: "border-transparent",
      },
      inputSize: {
        sm: "h-8 text-sm px-2",
        md: "h-10 text-base px-3",
        lg: "h-12 text-lg px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md",
    },
  }
);

export function Input({
  className,
  variant,
  inputSize,
  disabled,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>) {
  return (
    <input
      {...props}
      disabled={disabled}
      className={cn(inputVariants({ variant, inputSize }), className)}
    />
  );
}
