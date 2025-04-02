import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs, { Dayjs } from "dayjs";

interface CalendarProps {
  className?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

export function Calendar({ className, minDate, maxDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Track selected date
  const today = dayjs();

  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfWeek = startOfMonth.day(); // 0 (Sunday) - 6 (Saturday)

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  // Generate days for the calendar
  const days = new Array(firstDayOfWeek).fill(null); // Empty spaces before 1st of the month
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className={twMerge("p-4 bg-white shadow-lg rounded-lg w-80", className)}>
      {/* Month Selector */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-1 rounded hover:bg-gray-200">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold">{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={nextMonth} className="p-1 rounded hover:bg-gray-200">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-1 text-center text-gray-600 text-sm font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-2">{day}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center mt-2">
        {days.map((day, index) => {
          if (day === null) return <div key={index} className="opacity-0">.</div>;

          const date = currentDate.date(day);
          const isToday = date.isSame(today, "day");
          const isSelected = date.isSame(selectedDate, "day");
          const isDisabled = (minDate && date.isBefore(minDate, "day")) || (maxDate && date.isAfter(maxDate, "day"));

          return (
            <div
              key={index}
              onClick={() => !isDisabled && setSelectedDate(date)} // Select only if not disabled
              className={twMerge(
                "p-2 rounded cursor-pointer transition",
                isDisabled
                  ? "text-gray-400 cursor-not-allowed" // Disabled Date
                  : isSelected
                  ? "bg-blue-600 text-white font-bold" // Selected Date
                  : isToday
                  ? "bg-gray-200 text-black" // Subtle Today Highlight
                  : "hover:bg-gray-100"
              )}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
