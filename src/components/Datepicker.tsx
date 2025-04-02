import React, { JSX, useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface DatepickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export function Datepicker({ value, onChange }: DatepickerProps) {
  const [selectedDate, setSelectedDate] = useState(value || new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderDays = () => {
    const days: JSX.Element[] = [];
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isSelected = selectedDate.toDateString() === date.toDateString();

      days.push(
        <button
          key={i}
          className={twMerge(
            "w-10 h-10 flex items-center justify-center rounded-md transition",
            isSelected ? "bg-blue-600 text-white" : "hover:bg-gray-200"
          )}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-md hover:bg-gray-100"
      >
        <CalendarIcon className="w-5 h-5 text-gray-600" />
        {selectedDate.toDateString()}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4">
          <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
        </div>
      )}
    </div>
  );
}
