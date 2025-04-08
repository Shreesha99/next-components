import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index?: number) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    if (typeof index === "number") {
      setCopiedIndex(index);
    }
    setTimeout(() => {
      setCopied(false);
      setCopiedIndex(null);
    }, 1500);
  };

  return { copied, copiedIndex, copyToClipboard };
}
