import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs, { Dayjs } from "dayjs";

interface CalendarProps {
  className?: string;
  minDate?: Date | Dayjs;
  maxDate?: Date | Dayjs;
}

export function Calendar({ className, minDate, maxDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const today = dayjs();

  const min = minDate ? dayjs(minDate) : null;
  const max = maxDate ? dayjs(maxDate) : null;

  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfWeek = startOfMonth.day();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const days = new Array(firstDayOfWeek).fill(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div
      className={twMerge(
        "p-4 bg-white dark:bg-black text-gray-900 dark:text-gray-100 shadow-md rounded-xl w-80",
        className
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button
          onClick={nextMonth}
          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-gray-600 dark:text-gray-400 text-sm font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mt-2">
        {days.map((day, index) => {
          if (day === null)
            return (
              <div key={index} className="opacity-0">
                .
              </div>
            );

          const date = currentDate.date(day);
          const isToday = date.isSame(today, "day");
          const isSelected = date.isSame(selectedDate, "day");
          const isDisabled =
            (min && date.isBefore(min, "day")) ||
            (max && date.isAfter(max, "day"));

          return (
            <div
              key={index}
              onClick={() => !isDisabled && setSelectedDate(date)}
              className={twMerge(
                "p-2 rounded cursor-pointer transition",
                isDisabled
                  ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                  : isSelected
                    ? "bg-black text-white font-bold dark:bg-white dark:text-black"
                    : isToday
                      ? "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
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
