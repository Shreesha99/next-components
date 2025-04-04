import React from "react";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  text: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  className?: string;
};

export function Badge({ text, variant = "default", className }: BadgeProps) {
  const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <span className={twMerge("px-3 py-1 text-sm font-semibold rounded-full", variantClasses[variant], className)}>
      {text}
    </span>
  );
}
