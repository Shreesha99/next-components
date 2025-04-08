import { Accordion } from "../lib/components/Accordion";
import { ComponentShowcase } from "./component-showcase";

const AccordionShowcase = () => {
  const AccordionPreview = ({
    variant,
    theme,
  }: {
    variant: "default" | "subtle";
    theme: "default" | "primary" | "success" | "warning" | "destructive";
  }) => (
    <Accordion
      title={`variant="${variant}" theme="${theme}"`}
      variant={variant}
      theme={theme}
    >
      This is a {theme} themed accordion using {variant} variant.
    </Accordion>
  );

  const variants = ["default", "subtle"] as const;
  const themes = [
    "default",
    "primary",
    "success",
    "warning",
    "destructive",
  ] as const;

  return (
    <ComponentShowcase
      title="Accordion"
      preview={
        <Accordion title="Default" variant="default" theme="default">
          This is the default accordion shown in the preview tab.
        </Accordion>
      }
      code={`<Accordion title="Default" variant="default" theme="default">
  This is the default accordion shown in the preview tab.
</Accordion>`}
      variants={
        <div className="space-y-4">
          {variants.map((variant) => (
            <div key={variant} className="space-y-2">
              <p className="text-sm font-semibold capitalize">
                {variant} variant
              </p>
              <div className="flex flex-col gap-3">
                {themes.map((theme) => (
                  <AccordionPreview
                    key={`${variant}-${theme}`}
                    variant={variant}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
};

export default AccordionShowcase;
