import React, { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge Tailwind + custom class names
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HoverCardProps {
  title: string;
  content: string;
  className?: string;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  title,
  content,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={cn(
          "text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out",
          isHovered ? "underline" : "underline-none",
          "dark:text-white text-black"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </div>
      {isHovered && (
        <div
          className={cn(
            "absolute opacity-0 scale-95 transform transition-all duration-500 ease-out",
            "top-full left-1/2 transform -translate-x-1/2",
            "w-60 p-4 bg-white border border-gray-300 rounded-lg shadow-md",
            "dark:bg-gray-800 dark:text-white dark:border-gray-600",
            "opacity-100 scale-100 z-1000"
          )}
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
