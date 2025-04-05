import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

// Utility to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[40px] leading-none",
  {
    variants: {
      variant: {
        default:
          "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300 dark:focus:ring-gray-300",
        primary:
          "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 dark:bg-teal-400 dark:text-black dark:hover:bg-teal-500 dark:focus:ring-teal-300",
        secondary:
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-500 dark:focus:ring-blue-300",
        success:
          "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 dark:bg-green-400 dark:text-black dark:hover:bg-green-500 dark:focus:ring-green-300",
        warning:
          "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-200",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-400 dark:text-black dark:hover:bg-red-500 dark:focus:ring-red-300",
        outline:
          "border border-gray-600 text-gray-800 hover:bg-gray-100 dark:border-gray-400 dark:text-white dark:hover:bg-gray-700",
        ghost:
          "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
        link:
          "text-blue-600 underline hover:text-blue-800 px-4 py-2 dark:text-blue-400 dark:hover:text-blue-300",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: false,
      disabled: false,
    },
  }
);

export function Button({
  className,
  variant,
  size,
  rounded,
  fullWidth,
  disabled,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size, rounded, fullWidth, disabled }), className)}
    />
  );
}
