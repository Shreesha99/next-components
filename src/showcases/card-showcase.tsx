"use client";

import { Card } from "../lib/components/Card";
import { ComponentShowcase } from "./component-showcase";

const CardPreview = () => (
  <Card className="w-80">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-sm text-muted-foreground">This is a default card.</p>
  </Card>
);

const CardShowcase = () => {
  return (
    <ComponentShowcase
      title="Card"
      preview={<CardPreview />}
      code={`<Card className="w-80">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-sm text-muted-foreground">
    This is a default card.
  </p>
</Card>`}
      variants={
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Card variant="subtle" className="w-64">
              <h4 className="text-base font-medium mb-1">Subtle</h4>
              <p className="text-xs text-muted-foreground">
                Light background with soft border.
              </p>
            </Card>
            <Card variant="outline" className="w-64">
              <h4 className="text-base font-medium mb-1">Outline</h4>
              <p className="text-xs text-muted-foreground">
                Transparent background with outline.
              </p>
            </Card>
            <Card variant="filled" className="w-64">
              <h4 className="text-base font-medium mb-1">Filled</h4>
              <p className="text-xs text-muted-foreground">
                Solid background with no border.
              </p>
            </Card>
          </div>

          <h3 className="text-xl font-semibold pt-6">Padding & Rounding</h3>
          <div className="flex flex-wrap gap-4">
            <Card padding="sm" rounded="sm" className="w-64">
              <h4 className="text-base font-medium mb-1">Small</h4>
              <p className="text-xs text-muted-foreground">p-2, rounded-sm</p>
            </Card>
            <Card padding="xl" rounded="xl" className="w-64">
              <h4 className="text-base font-medium mb-1">Extra Large</h4>
              <p className="text-xs text-muted-foreground">p-8, rounded-xl</p>
            </Card>
          </div>

          <h3 className="text-xl font-semibold pt-6">Shadow Options</h3>
          <div className="flex flex-wrap gap-4">
            <Card shadow="none" className="w-64">
              <h4 className="text-base font-medium mb-1">No Shadow</h4>
              <p className="text-xs text-muted-foreground">shadow-none</p>
            </Card>
            <Card shadow="lg" className="w-64">
              <h4 className="text-base font-medium mb-1">Large Shadow</h4>
              <p className="text-xs text-muted-foreground">shadow-lg</p>
            </Card>
          </div>
        </div>
      }
    />
  );
};

export default CardShowcase;
