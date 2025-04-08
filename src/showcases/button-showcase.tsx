"use client";

import { Button } from "../lib/components/Button";
import { ComponentShowcase } from "./component-showcase";

const ButtonPreview = ({
  label,
  variant = "default",
  size = "md",
  rounded = "md",
  disabled = false,
  fullWidth = false,
}: {
  label: string;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  fullWidth?: boolean;
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      rounded={rounded}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  );
};

const ButtonShowcase = () => {
  const variants = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "destructive",
    "outline",
    "ghost",
    "link",
  ] as const;

  return (
    <ComponentShowcase
      title="Button"
      preview={<ButtonPreview label="Click Me" />}
      code={`<Button variant="default">Click Me</Button>`}
      variants={
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">All Variants</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {variants.map((variant) => (
              <div key={variant}>
                <p className="text-sm text-muted-foreground mb-1">
                  variant="{variant}"
                </p>
                <ButtonPreview label={variant} variant={variant} />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold pt-6">Sizes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size}>
                <p className="text-sm text-muted-foreground mb-1">
                  size="{size}"
                </p>
                <ButtonPreview label={size} size={size} />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold pt-6">Rounded</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {(["none", "sm", "md", "lg", "full"] as const).map((rounded) => (
              <div key={rounded}>
                <p className="text-sm text-muted-foreground mb-1">
                  rounded="{rounded}"
                </p>
                <ButtonPreview label={rounded} rounded={rounded} />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold pt-6">Disabled Variants</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {variants.map((variant) => (
              <div key={variant}>
                <p className="text-sm text-muted-foreground mb-1">
                  variant="{variant}" • disabled
                </p>
                <ButtonPreview label="Disabled" variant={variant} disabled />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold pt-6">Full Width Buttons</h3>
          <div className="space-y-2">
            {variants.map((variant) => (
              <div key={variant}>
                <p className="text-sm text-muted-foreground mb-1">
                  variant="{variant}" • fullWidth
                </p>
                <ButtonPreview label="Full Width" variant={variant} fullWidth />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default ButtonShowcase;
