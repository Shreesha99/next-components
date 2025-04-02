import React from "react";
import { twMerge } from "tailwind-merge";
import { Check } from "lucide-react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      {/* Hidden Checkbox Input */}
      <input type="checkbox" className="hidden peer" {...props} />

      {/* Custom Checkbox */}
      <div className={twMerge(
        "w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:ring-2 peer-checked:ring-blue-300",
        className
      )}>
        {/* The Checkmark Icon (Now Properly Appears) */}
        <Check className="w-4 h-4 text-white hidden peer-checked:block" />
      </div>

      {/* Label (Optional) */}
      {label && <span className="text-gray-800">{label}</span>}
    </label>
  );
}
