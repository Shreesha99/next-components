"use client";

import { useState } from "react";
import { Dropdown } from "../lib/components/Dropdown";
import { ComponentShowcase } from "./component-showcase";

export default function DropdownShowcase() {
  const [selected, setSelected] = useState("Apple");

  return (
    <ComponentShowcase
      title="Dropdown"
      preview={
        <Dropdown
          options={["Apple", "Banana", "Cherry"]}
          selected={selected}
          onSelect={setSelected}
        />
      }
      code={`<Dropdown
  options={["Apple", "Banana", "Cherry"]}
  selected={selected}
  onSelect={setSelected}
/>`}
    />
  );
}
