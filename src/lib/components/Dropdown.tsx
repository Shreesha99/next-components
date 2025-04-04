import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface DropdownProps {
  options: string[];
  selected?: string;
  onSelect?: (value: string) => void;
  placeholder?: string;
}

export function Dropdown({ options, selected, onSelect, placeholder = "Select an option" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block w-56">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-4 py-2 border rounded-md bg-white shadow-md hover:bg-gray-100"
      >
        <span>{selected || placeholder}</span>
        <ChevronDown className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md border z-50">
          {options.map((option) => (
            <button
              key={option}
              className="w-full text-left px-4 py-2 hover:bg-gray-200"
              onClick={() => {
                onSelect?.(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
