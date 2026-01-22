import React, { useState } from "react";
import "./calendar.scss";
import { Rnd } from "react-rnd";

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  // Logic to calculate calendar
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const today = new Date();

  // Prev month filler dates
  const prevMonthLastDay = new Date(viewYear, viewMonth, 0).getDate();
  const prevMonthDays = Array.from(
    { length: firstDayOfMonth },
    (_, i) => prevMonthLastDay - firstDayOfMonth + i + 1,
  );

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const changeMonth = (offset) => {
    setDate(new Date(viewYear, viewMonth + offset, 1));
  };

  return (
    <Rnd>
      <div className="calendar-widget">
        <header className="calendar-header">
          <span className="arrow" onClick={() => changeMonth(-1)}>
            ‹
          </span>
          <span className="month-year">
            {monthNames[viewMonth]} {viewYear}
          </span>
          <span className="arrow" onClick={() => changeMonth(1)}>
            ›
          </span>
        </header>

        <div className="calendar-grid">
          {days.map((day, idx) => (
            <div key={idx} className="day-name">
              {day}
            </div>
          ))}

          {/* Grey dates from previous month */}
          {prevMonthDays.map((d) => (
            <div key={`prev-${d}`} className="date empty">
              {d}
            </div>
          ))}

          {/* Dynamic dates for current month */}
          {currentMonthDays.map((d) => {
            const isToday =
              d === today.getDate() &&
              viewMonth === today.getMonth() &&
              viewYear === today.getFullYear();

            return (
              <div key={d} className={`date ${isToday ? "active" : ""}`}>
                {d}
              </div>
            );
          })}
        </div>
        <div className="resize-handle">⇗</div>
      </div>
    </Rnd>
  );
};

export default CalendarWidget;
