"use client";

import { BreadCrumb } from "../lib/components/Breadcrumb";
import { ComponentShowcase } from "./component-showcase";

const BreadCrumbPreview = ({
  items,
  separator,
}: {
  items: { label: string; href: string }[];
  separator?: string;
}) => {
  return <BreadCrumb items={items} separator={separator} />;
};

const BreadCrumbShowcase = () => {
  const exampleItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Phones", href: "/products/phones" },
  ];

  const variants = [
    {
      separator: ">",
      items: [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Settings", href: "/dashboard/settings" },
      ],
    },
    {
      separator: "→",
      items: [
        { label: "Blog", href: "/blog" },
        { label: "2025", href: "/blog/2025" },
        { label: "April", href: "/blog/2025/april" },
      ],
    },
    {
      separator: "/",
      items: [
        { label: "Files", href: "/files" },
        { label: "Photos", href: "/files/photos" },
        { label: "2024", href: "/files/photos/2024" },
      ],
    },
  ];

  return (
    <ComponentShowcase
      title="Breadcrumb"
      preview={<BreadCrumbPreview items={exampleItems} />}
      code={`<BreadCrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Phones", href: "/products/phones" },
  ]}
/>`}
      variants={
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Different Separators</h3>
          <div className="space-y-4">
            {variants.map((variant, index) => (
              <div key={index}>
                <p className="text-sm text-muted-foreground mb-1">
                  separator="{variant.separator}"
                </p>
                <BreadCrumbPreview
                  items={variant.items}
                  separator={variant.separator}
                />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default BreadCrumbShowcase;
