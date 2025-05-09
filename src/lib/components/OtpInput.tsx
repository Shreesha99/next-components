import React, { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge Tailwind + custom class names
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  value,
  onChange,
  className,
  disabled = false,
  placeholder = "•",
}) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    if (disabled) return;

    const char = e.target.value.replace(/[^0-9]/g, "");
    if (!char) return;

    const updated = value.substring(0, i) + char + value.substring(i + 1);
    onChange(updated);

    if (i < length - 1) {
      inputsRef.current[i + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    i: number
  ) => {
    if (disabled) return;

    if (e.key === "Backspace") {
      e.preventDefault();

      const currentValue = value[i];

      if (currentValue) {
        const updated = value.substring(0, i) + "" + value.substring(i + 1);
        onChange(updated);

        if (i > 0) {
          setTimeout(() => {
            inputsRef.current[i - 1]?.focus();
          }, 0);
        }
      } else if (i > 0) {
        inputsRef.current[i - 1]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && i > 0) {
      e.preventDefault();
      inputsRef.current[i - 1]?.focus();
    }

    if (e.key === "ArrowRight" && i < length - 1) {
      e.preventDefault();
      inputsRef.current[i + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    e.preventDefault();
    const paste = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);
    const newVal = paste + value.slice(paste.length);
    onChange(newVal);
    inputsRef.current[Math.min(paste.length, length - 1)]?.focus();
  };

  return (
    <div className={cn("flex gap-3", className)}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          disabled={disabled}
          placeholder={placeholder}
          value={value[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          className={cn(
            "w-12 h-14 text-center rounded-xl border text-lg font-medium shadow-sm transition focus:outline-none",
            disabled
              ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
              : "bg-white text-black border-gray-300 focus:ring-2 focus:ring-black focus:border-black dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500"
          )}
        />
      ))}
    </div>
  );
};
