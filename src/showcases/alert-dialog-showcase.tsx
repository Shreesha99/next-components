import { useState } from "react";
import { AlertDialog } from "../lib/components/AlertDialog";
import { Button } from "../lib/components/Button";
import { ComponentShowcase } from "./component-showcase";

const AlertDialogShowcase = () => {
  const AlertDialogPreview = ({
    title,
    description,
    theme = "default",
    variant = "default",
  }: {
    title: string;
    description: string;
    theme?: "default" | "primary" | "success" | "warning" | "destructive";
    variant?: "default" | "outlined" | "ghost";
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>{title}</Button>
        <AlertDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={title}
          description={description}
          theme={theme}
          variant={variant}
        />
      </>
    );
  };

  const previewTitle = "Default Alert";
  const previewDescription = "This is the default alert dialog preview.";

  return (
    <ComponentShowcase
      title="Alert Dialog"
      preview={
        <AlertDialogPreview
          title={previewTitle}
          description={previewDescription}
        />
      }
      code={`<AlertDialog
  isOpen={true}
  onClose={() => {}}
  title="Default Alert"
  description="This is the default alert dialog preview."
/>`}
      variants={
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                theme="default" • variant="default"
              </p>
              <AlertDialogPreview
                title="Default Alert"
                description="This is the default alert dialog."
                theme="default"
                variant="default"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                theme="primary" • variant="default"
              </p>
              <AlertDialogPreview
                title="Info Alert"
                description="This is an informational alert."
                theme="primary"
                variant="default"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                theme="success" • variant="outlined"
              </p>
              <AlertDialogPreview
                title="Success Alert"
                description="Your operation was successful."
                theme="success"
                variant="outlined"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                theme="warning" • variant="outlined"
              </p>
              <AlertDialogPreview
                title="Warning Alert"
                description="Are you sure you want to proceed?"
                theme="warning"
                variant="outlined"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                theme="destructive" • variant="default"
              </p>
              <AlertDialogPreview
                title="Danger Alert"
                description="This action will delete your data."
                theme="destructive"
                variant="default"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                theme="default" • variant="ghost"
              </p>
              <AlertDialogPreview
                title="Ghost Alert"
                description="This alert uses the ghost variant."
                theme="default"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AlertDialogShowcase;
