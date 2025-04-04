import React from "react";
import { twMerge } from "tailwind-merge";

type AvatarSize = "sm" | "md" | "lg" | "xl";

type AvatarProps = {
  src: string;
  alt: string;
  size?: AvatarSize;
  className?: string;
};

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  const sizeClasses: Record<AvatarSize, string> = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={twMerge("rounded-full object-cover", sizeClasses[size], className)}
    />
  );
}
