import React from "react";
import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({
  label,
  className,
  checked,
  onChange,
  ...props
}: CheckboxProps) {
  const isControlled = checked !== undefined;

  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        {...props}
      />

      <div
        className={twMerge(
          "w-5 h-5 border-2 rounded-md flex items-center justify-center transition-all",
          checked ? "bg-black border-black " : "border-gray-400 bg-white",
          className
        )}
      >
        {checked && <Check className="w-4 h-4 text-white" />}
      </div>

      {label && <span className="text-sm text-gray-800">{label}</span>}
    </label>
  );
}
