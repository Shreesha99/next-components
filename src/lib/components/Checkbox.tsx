import React from "react";
import { twMerge } from "tailwind-merge";
import { Check } from "lucide-react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
 
      <input type="checkbox" className="hidden peer" {...props} />

   
      <div className={twMerge(
        "w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center transition-all peer-checked:border-black peer-checked:bg-black peer-checked:ring-2 peer-checked:ring-blue-300",
        className
      )}>
    
        <Check className="w-4 h-4 text-white hidden peer-checked:block" />
      </div>

      {label && <span className="text-gray-800">{label}</span>}
    </label>
  );
}
