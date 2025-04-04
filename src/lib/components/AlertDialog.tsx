import React from "react";
import { twMerge } from "tailwind-merge";

type AlertDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};

export function AlertDialog({ isOpen, onClose, title, description }: AlertDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-brightness-75">
      <div className={twMerge("bg-white rounded-lg shadow-lg p-6 w-96")}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
