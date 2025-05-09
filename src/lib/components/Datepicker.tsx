import React, { JSX, useEffect, useState } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

interface DatepickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  placeholder?: string;
}

export function Datepicker({
  value,
  onChange,
  minDate,
  maxDate,
  className,
  placeholder = "Select a date",
}: DatepickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ?? null);
  const [currentMonth, setCurrentMonth] = useState<Date>(value ?? new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
      setCurrentMonth(value);
    }
  }, [value]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfWeek = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const isSameDate = (a: Date, b: Date) =>
    a.toDateString() === b.toDateString();

  const isDisabled = (date: Date) =>
    (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) ||
    (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999)));

  const renderDays = () => {
    const days: JSX.Element[] = [];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfWeek(year, month);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const selected = selectedDate && isSameDate(date, selectedDate);
      const dateIsDisabled = isDisabled(date);

      days.push(
        <button
          key={i}
          onClick={() => !dateIsDisabled && handleDateClick(date)}
          className={twMerge(
            "w-10 h-10 text-sm rounded-md flex items-center justify-center transition",
            dateIsDisabled
              ? "text-gray-400 cursor-not-allowed"
              : selected
                ? "bg-black text-white font-bold dark:bg-white dark:text-black"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
          disabled={dateIsDisabled}
        >
          {i}
        </button>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  return (
    <div className={twMerge("relative inline-block", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={twMerge(
          "flex items-center gap-2 px-4 py-2 border rounded-md w-full text-left transition",
          "bg-white hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
        )}
      >
        <CalendarIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <span className={!selectedDate ? "text-gray-400" : ""}>
          {selectedDate ? selectedDate.toDateString() : placeholder}
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg p-4 z-10 shadow-lg dark:bg-gray-900 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <ChevronLeft
                size={20}
                className="text-gray-600 dark:text-gray-300"
              />
            </button>
            <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100">
              {currentMonth.toLocaleString("default", { month: "long" })}{" "}
              {currentMonth.getFullYear()}
            </h2>
            <button
              onClick={handleNextMonth}
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <ChevronRight
                size={20}
                className="text-gray-600 dark:text-gray-300"
              />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-gray-600 dark:text-gray-400 text-xs font-medium mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-1">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {renderDays()}
          </div>
        </div>
      )}
    </div>
  );
}
