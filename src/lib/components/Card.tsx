import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// Utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Variants for the Card component
const cardVariants = cva("rounded-lg border shadow-sm transition-colors", {
  variants: {
    variant: {
      default: "bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700",
      subtle:
        "bg-gray-50 border-gray-100 dark:bg-gray-800 dark:border-gray-700",
      outline: "bg-transparent border-gray-300 dark:border-gray-600",
      filled: "bg-gray-100 border-transparent dark:bg-gray-700",
    },
    padding: {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
    rounded: "lg",
    shadow: "sm",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card: React.FC<CardProps> = ({
  className,
  variant,
  padding,
  rounded,
  shadow,
  ...props
}) => {
  return (
    <div
      className={cn(
        cardVariants({ variant, padding, rounded, shadow }),
        className
      )}
      {...props}
    />
  );
};
