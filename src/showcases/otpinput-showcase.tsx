"use client";

import { useState } from "react";
import { OtpInput } from "../lib/components/OtpInput";
import { ComponentShowcase } from "./component-showcase";

export default function OtpInputShowcase() {
  const [otp, setOtp] = useState("");
  const codeSnippet = `<OtpInput value={otp} onChange={setOtp} length={6} />`;

  return (
    <ComponentShowcase
      title="OTP Input"
      preview={
        <div className="flex gap-3 dark:bg-gray-900 dark:text-white">
          <OtpInput value={otp} onChange={setOtp} length={6} />
        </div>
      }
      code={codeSnippet}
      variants={
        <div className="flex flex-col gap-6 w-full max-w-sm dark:bg-gray-900 dark:text-white">
          {/* === Length Variants === */}
          <div className="space-y-2">
            <label className="text-xs text-gray-500">length=4</label>
            <OtpInput value={otp} onChange={setOtp} length={4} />

            <label className="text-xs text-gray-500">length=6</label>
            <OtpInput value={otp} onChange={setOtp} length={6} />

            <label className="text-xs text-gray-500">length=8</label>
            <OtpInput value={otp} onChange={setOtp} length={8} />
          </div>

          {/* === Disabled Variant === */}
          <div className="space-y-2">
            <label className="text-xs text-gray-500">disabled</label>
            <OtpInput value={otp} onChange={setOtp} length={6} disabled />
          </div>

          {/* === Custom Placeholder === */}
          <div className="space-y-2">
            <label className="text-xs text-gray-500">placeholder="_"</label>
            <OtpInput
              value={otp}
              onChange={setOtp}
              length={6}
              placeholder="_"
            />
          </div>
        </div>
      }
    />
  );
}
