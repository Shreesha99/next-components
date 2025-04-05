import { twMerge } from "tailwind-merge";

type AlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};

export function AlertDialog({
  isOpen,
  onClose,
  title,
  description,
}: AlertDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={twMerge(
          "bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-4"
        )}
      >
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
