import { useEffect, useState } from "react";

const Clock = () => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => settime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (num) => num.toString().padStart(2, "0");

  const hours = time.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  const dateLabel = time.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="clock">
      <p className="clock-label">Local time</p>
      <h1>
        {format(displayHours)}:{format(time.getMinutes())}
        <span className="clock__ampm">{ampm}</span>
      </h1>
      <p className="clock-subline">{dateLabel}</p>
    </div>
  );
};

export default Clock;
