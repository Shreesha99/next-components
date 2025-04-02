import React from "react";
import { twMerge } from "tailwind-merge";

export function Avatar({ src, alt, size = "md", className }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={twMerge(
        "rounded-full object-cover",
        sizeClasses[size],
        className
      )}
    />
  );
}
