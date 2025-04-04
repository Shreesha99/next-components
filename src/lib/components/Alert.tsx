import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { useState } from "react";
import React from "react";

const alertVariants = cva("p-4 rounded-lg flex items-start gap-3 shadow-md", {
  variants: {
    variant: {
      default: "bg-gray-100 text-gray-800 border border-gray-300",
      success: "bg-green-100 text-green-800 border border-green-300",
      warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
      destructive: "bg-red-100 text-red-800 border border-red-300",
      info: "bg-blue-100 text-blue-800 border border-blue-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function Alert({
  children,
  variant,
  className = "",
  dismissible = false,
}: {
  children: React.ReactNode;
  className?: string;
  dismissible?: boolean;
} & VariantProps<typeof alertVariants>) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={twMerge(alertVariants({ variant }), className)}>
      <div className="flex-1">{children}</div>
      {dismissible && (
        <button
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setVisible(false)}
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}