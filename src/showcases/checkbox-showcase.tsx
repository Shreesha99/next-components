"use client";

import { useState } from "react";
import { Checkbox } from "../lib/components/Checkbox";
import { ComponentShowcase } from "./component-showcase";

const CheckboxShowcase = () => {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentShowcase
      title="Checkbox"
      preview={
        <Checkbox
          label="Accept Terms & Conditions"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      code={`<Checkbox
  label="Accept Terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
      variants={
        <div className="space-y-4">
          <div className="space-y-1">
            <Checkbox label="Checked by Default" checked readOnly />
            <p className="text-sm text-gray-500">checked, readOnly</p>
          </div>

          <div className="space-y-1">
            <Checkbox label="Disabled" disabled />
            <p className="text-sm text-gray-500">disabled</p>
          </div>

          <div className="space-y-1">
            <Checkbox />
            <p className="text-sm text-gray-500">no props</p>
          </div>
        </div>
      }
    />
  );
};

export default CheckboxShowcase;
