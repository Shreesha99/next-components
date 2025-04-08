"use client";

import { Calendar } from "../lib/components/Calendar";
import { ComponentShowcase } from "./component-showcase";

const CalendarPreview = ({
  minDate,
  maxDate,
}: {
  minDate?: Date;
  maxDate?: Date;
}) => {
  return (
    <div className="flex justify-start">
      <Calendar minDate={minDate} maxDate={maxDate} />
    </div>
  );
};

const CalendarShowcase = () => {
  return (
    <ComponentShowcase
      title="Calendar"
      preview={<CalendarPreview minDate={new Date()} />}
      code={`<Calendar minDate={new Date()} />`}
      variants={
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Date Range Examples</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                minDate = today
              </p>
              <CalendarPreview minDate={new Date()} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                maxDate = today + 7 days
              </p>
              <CalendarPreview maxDate={new Date(Date.now() + 7 * 86400000)} />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CalendarShowcase;
