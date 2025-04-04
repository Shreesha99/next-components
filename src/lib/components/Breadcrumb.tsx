import React from "react";
import { twMerge } from "tailwind-merge";

type BreadCrumbItem = {
  label: string;
  href: string;
};

type BreadCrumbProps = {
  items: BreadCrumbItem[];
  separator?: string;
  className?: string;
};

export function BreadCrumb({ items, separator = "/", className }: BreadCrumbProps) {
  return (
    <nav className={twMerge("flex items-center text-sm text-gray-600", className)} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <a
            href={item.href}
            className={twMerge(
              "hover:underline",
              index === items.length - 1 ? "font-semibold text-gray-900" : "text-gray-600"
            )}
          >
            {item.label}
          </a>
          {index < items.length - 1 && <span className="mx-2">{separator}</span>}
        </div>
      ))}
    </nav>
  );
}
