"use client";

import { Badge } from "../lib/components/Badge";
import { ComponentShowcase } from "./component-showcase";

const BadgePreview = ({
  text,
  variant = "default",
  className,
}: {
  text: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  className?: string;
}) => {
  return <Badge text={text} variant={variant} className={className} />;
};

const BadgeShowcase = () => {
  const variants = [
    "default",
    "primary",
    "success",
    "warning",
    "danger",
  ] as const;

  return (
    <ComponentShowcase
      title="Badge"
      preview={<BadgePreview text="Success" variant="success" />}
      code={`<Badge text="Success" variant="success" />`}
      variants={
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">All Variants</h3>
          <div className="flex flex-wrap gap-4">
            {variants.map((variant) => (
              <div key={variant}>
                <p className="text-sm text-muted-foreground mb-1">
                  variant="{variant}"
                </p>
                <BadgePreview text={variant} variant={variant} />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold pt-6">Custom Class Example</h3>
          <div className="flex gap-4">
            <BadgePreview
              text="Pill Style"
              variant="primary"
              className="rounded-full px-4 py-1"
            />
            <BadgePreview
              text="Uppercase"
              variant="danger"
              className="uppercase tracking-wider"
            />
          </div>
        </div>
      }
    />
  );
};

export default BadgeShowcase;
