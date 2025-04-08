"use client";

import { Input } from "../lib/components/Input";
import { ComponentShowcase } from "./component-showcase";

export default function InputShowcase() {
  return (
    <ComponentShowcase
      title="Input"
      preview={
        <div className="flex gap-3 dark:bg-gray-900 dark:text-white">
          <Input placeholder="Default input" variant="default" />
        </div>
      }
      code={`<Input placeholder="Default input" variant="default" />`}
      variants={
        <div className="flex flex-col gap-6 w-full max-w-sm dark:bg-gray-900 dark:text-white">
          {/* === Variants === */}
          <div className="space-y-2">
            <label className="text-xs text-gray-500">variant="default"</label>
            <Input placeholder="Default input" variant="default" />

            <label className="text-xs text-gray-500">variant="primary"</label>
            <Input placeholder="Primary input" variant="primary" />

            <label className="text-xs text-gray-500">variant="secondary"</label>
            <Input placeholder="Secondary input" variant="secondary" />

            <label className="text-xs text-gray-500">variant="success"</label>
            <Input placeholder="Success input" variant="success" />

            <label className="text-xs text-gray-500">variant="warning"</label>
            <Input placeholder="Warning input" variant="warning" />

            <label className="text-xs text-gray-500">
              variant="destructive"
            </label>
            <Input placeholder="Destructive input" variant="destructive" />

            <label className="text-xs text-gray-500">variant="ghost"</label>
            <Input
              placeholder="Ghost input"
              variant="ghost"
              className="dark:bg-transparent dark:border-transparent dark:focus:ring-gray-500"
            />
          </div>

          {/* === Sizes === */}
          <div className="space-y-2">
            <label className="text-xs text-gray-500">inputSize="sm"</label>
            <Input placeholder="Small input" inputSize="sm" />

            <label className="text-xs text-gray-500">inputSize="md"</label>
            <Input placeholder="Medium input" inputSize="md" />

            <label className="text-xs text-gray-500">inputSize="lg"</label>
            <Input placeholder="Large input" inputSize="lg" />
          </div>

          {/* === Disabled === */}
          <div className="space-y-2">
            <label className="text-xs text-gray-500">disabled</label>
            <Input placeholder="Disabled input" disabled />
          </div>
        </div>
      }
    />
  );
}
