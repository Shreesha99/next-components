import { Alert } from "../lib/components/Alert";
import { ComponentShowcase } from "./component-showcase";

const AccordionShowcase = () => {
  return (
    <ComponentShowcase
      title="Accordion"
      preview={
        <Alert variant="solid" theme="default">
          This is the default accordion shown in the preview tab.
        </Alert>
      }
      code={`<Accordion title="Default" variant="solid" theme="default">
  This is the default accordion shown in the preview tab.
</Accordion>`}
      variants={
        <div className="space-y-3">
          {["solid", "subtle", "ghost"].map((variant) => (
            <div key={variant} className="space-y-1">
              <p className="text-sm font-semibold capitalize">
                {variant} variant
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "default",
                  "primary",
                  "success",
                  "warning",
                  "destructive",
                  "info",
                ].map((theme) => (
                  <Alert
                    key={`${variant}-${theme}`}
                    variant={variant as any}
                    theme={theme as any}
                  >
                    {`variant="${variant}" theme="${theme}"`}
                  </Alert>
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
