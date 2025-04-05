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
        default: "bg-gray-100 text-gray-800 border-gray-200",
        primary: "bg-blue-100 text-blue-800 border-blue-200",
        success: "bg-green-100 text-green-800 border-green-200",
        warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
        destructive: "bg-red-100 text-red-800 border-red-200",
        info: "bg-blue-100 text-blue-800 border-blue-200",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        theme: "default",
        class: "bg-gray-100 border-gray-200 text-gray-800",
      },
      {
        variant: "solid",
        theme: "primary",
        class: "bg-blue-100 border-blue-200 text-blue-800",
      },
      {
        variant: "solid",
        theme: "success",
        class: "bg-green-100 border-green-200 text-green-800",
      },
      {
        variant: "solid",
        theme: "warning",
        class: "bg-yellow-100 border-yellow-200 text-yellow-800",
      },
      {
        variant: "solid",
        theme: "destructive",
        class: "bg-red-100 border-red-200 text-red-800",
      },
      {
        variant: "solid",
        theme: "info",
        class: "bg-blue-100 border-blue-200 text-blue-800",
      },
    ],
    defaultVariants: {
      variant: "solid",
      theme: "default",
    },
  }
);

const variantIcons = {
  default: <Info className="w-5 h-5 mt-0.5 text-gray-600 shrink-0" />,
  primary: <Info className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />,
  success: <CheckCircle className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />,
  warning: (
    <AlertTriangle className="w-5 h-5 mt-0.5 text-yellow-600 shrink-0" />
  ),
  destructive: <AlertCircle className="w-5 h-5 mt-0.5 text-red-600 shrink-0" />,
  info: <Info className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />,
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
          className="text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => setVisible(false)}
        >
          <X className="w-5 h-5 mt-0.5" />
        </button>
      )}
    </div>
  );
}
