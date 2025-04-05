import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle, Info, AlertTriangle, AlertCircle } from "lucide-react";

const alertVariants = cva(
  "rounded-2xl border text-base flex items-start gap-3 px-4 py-3 transition-colors duration-300",
  {
    variants: {
      variant: {
        solid: "",
        subtle: "bg-opacity-20 border-transparent",
        ghost: "bg-transparent border-transparent shadow-none",
      },
      theme: {
        default:
          "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700",
        primary:
          "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700",
        success:
          "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-100 dark:border-green-700",
        warning:
          "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-700",
        destructive:
          "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-100 dark:border-red-700",
        info: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "solid",
      theme: "default",
    },
  }
);

const variantIcons = {
  default: (
    <Info className="w-5 h-5 mt-0.5 text-gray-600 dark:text-gray-300 shrink-0" />
  ),
  primary: (
    <Info className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-200 shrink-0" />
  ),
  success: (
    <CheckCircle className="w-5 h-5 mt-0.5 text-green-600 dark:text-green-200 shrink-0" />
  ),
  warning: (
    <AlertTriangle className="w-5 h-5 mt-0.5 text-yellow-600 dark:text-yellow-200 shrink-0" />
  ),
  destructive: (
    <AlertCircle className="w-5 h-5 mt-0.5 text-red-600 dark:text-red-200 shrink-0" />
  ),
  info: (
    <Info className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-200 shrink-0" />
  ),
};

export function Alert({
  children,
  variant = "solid",
  theme = "default",
  className = "",
  dismissible = false,
}: {
  children: React.ReactNode;
  className?: string;
  dismissible?: boolean;
} & VariantProps<typeof alertVariants> & {
    variant?: "solid" | "subtle" | "ghost" | keyof typeof variantIcons;
    theme?: keyof typeof variantIcons;
  }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const resolvedTheme =
    [
      "default",
      "primary",
      "success",
      "warning",
      "destructive",
      "info",
    ].includes(variant as string) && theme === "default"
      ? (variant as keyof typeof variantIcons)
      : theme;

  const styleVariant: VariantProps<typeof alertVariants>["variant"] = [
    "solid",
    "subtle",
    "ghost",
  ].includes(variant as string)
    ? (variant as any)
    : "solid";

  const icon = variantIcons[resolvedTheme || "default"];

  return (
    <div
      className={twMerge(
        alertVariants({ variant: styleVariant, theme: resolvedTheme }),
        className
      )}
    >
      {icon}
      <div className="flex-1">{children}</div>
      {dismissible && (
        <button
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
          onClick={() => setVisible(false)}
        >
          <X className="w-5 h-5 mt-0.5" />
        </button>
      )}
    </div>
  );
}
