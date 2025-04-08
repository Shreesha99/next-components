import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useClipboard } from "../hooks/useClipboard";

interface ComponentShowcaseProps {
  docs: string;
  title: string;
  preview: React.ReactNode;
  code: string;
  variants?: React.ReactNode;
}

export function ComponentShowcase({
  docs,
  title,
  preview,
  code,
  variants,
}: ComponentShowcaseProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const { copied, copyToClipboard } = useClipboard();

  const tabs = ["preview", "code"];
  if (variants) tabs.push("variants");

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>

      <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-2 mr-4 text-gray-700 dark:text-gray-300 ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 font-semibold text-blue-600 dark:text-blue-400"
                  : "hover:text-blue-500 dark:hover:text-blue-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "preview" ? (
          preview
        ) : activeTab === "code" ? (
          <div className="relative">
            {/* 👇 Copy button with icon */}
            <button
              onClick={() => copyToClipboard(code)}
              className="absolute top-2 right-2 bg-gray-100 dark:bg-gray-800 rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Copy to clipboard"
            >
              {copied ? (
                <FiCheck className="text-green-500 w-4 h-4" />
              ) : (
                <FiCopy className="text-gray-600 w-4 h-4 dark:text-gray-300" />
              )}
            </button>

            <pre className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 p-4 overflow-auto text-sm rounded">
              <code>{code}</code>
            </pre>
          </div>
        ) : (
          variants
        )}
      </div>
    </section>
  );
}
