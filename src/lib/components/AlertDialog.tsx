import { twMerge } from "tailwind-merge";

type AlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  variant?: "default" | "outlined" | "ghost";
  theme?: "default" | "primary" | "success" | "warning" | "destructive";
};

const themeStyles: Record<
  NonNullable<AlertDialogProps["theme"]>,
  {
    confirmBtn: string;
    iconColor: string;
  }
> = {
  default: {
    confirmBtn: "bg-gray-800 text-white hover:bg-gray-900",
    iconColor: "text-gray-600 dark:text-gray-300",
  },
  primary: {
    confirmBtn: "bg-blue-600 text-white hover:bg-blue-700",
    iconColor: "text-blue-600",
  },
  success: {
    confirmBtn: "bg-green-600 text-white hover:bg-green-700",
    iconColor: "text-green-600",
  },
  warning: {
    confirmBtn: "bg-yellow-500 text-white hover:bg-yellow-600",
    iconColor: "text-yellow-600",
  },
  destructive: {
    confirmBtn: "bg-red-600 text-white hover:bg-red-700",
    iconColor: "text-red-600",
  },
};

export function AlertDialog({
  isOpen,
  onClose,
  title,
  description,
  variant = "default",
  theme = "default",
}: AlertDialogProps) {
  if (!isOpen) return null;

  const { confirmBtn, iconColor } = themeStyles[theme];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={twMerge(
          "rounded-2xl shadow-xl p-6 w-full max-w-md mx-4",
          "bg-white dark:bg-gray-900",
          variant === "outlined" &&
            "border-2 border-gray-200 dark:border-gray-700",
          variant === "ghost" && "bg-transparent shadow-none backdrop-blur-sm"
        )}
      >
        <h2
          className={twMerge(
            "text-lg font-semibold",
            iconColor,
            theme === "default" && "text-gray-900 dark:text-gray-100"
          )}
        >
          {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className={twMerge(
              "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
              confirmBtn
            )}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
