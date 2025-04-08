"use client";

import { HoverCard } from "../lib/components/Hovercard";
import { ComponentShowcase } from "./component-showcase";

const HoverCardShowcase = () => {
  return (
    <ComponentShowcase
      title="Hover Card"
      preview={
        <HoverCard
          title="Hover me"
          content="This is the content shown when hovered!"
        />
      }
      code={`<HoverCard
  title="Hover me"
  content="This is the content shown when hovered!"
/>`}
      variants={
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold">With longer content</p>
            <HoverCard
              title="Hover me"
              content="This is a longer hover content example. You can add as much information as needed here!"
            />
            <p className="text-xs text-muted-foreground">Longer content text</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold">With different title</p>
            <HoverCard title="Info" content="Hover to get more details." />
            <p className="text-xs text-muted-foreground">title="Info"</p>
          </div>
        </div>
      }
    />
  );
};

export default HoverCardShowcase;
