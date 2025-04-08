"use client";

import { useState } from "react";
import { Datepicker } from "../lib/components/Datepicker";
import { ComponentShowcase } from "./component-showcase";

const DatepickerShowcase = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <ComponentShowcase
      title="Datepicker"
      preview={<Datepicker value={date} onChange={setDate} />}
      code={`<Datepicker value={date} onChange={setDate} />`}
      variants={
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold">With minDate & maxDate</p>
            <Datepicker
              value={date}
              onChange={setDate}
              minDate={new Date("2024-01-01")}
              maxDate={new Date("2025-12-31")}
            />
            <p className="text-xs text-muted-foreground">
              minDate="2024-01-01", maxDate="2025-12-31"
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold">With placeholder</p>
            <Datepicker value={undefined} onChange={setDate} />
            <p className="text-xs text-muted-foreground">
              placeholder="Select a date"
            </p>
          </div>
        </div>
      }
    />
  );
};

export default DatepickerShowcase;
