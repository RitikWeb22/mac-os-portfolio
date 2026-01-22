import { useEffect, useState } from "react";

const Clock = () => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => settime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (num) => num.toString().padStart(2, "0");

  // AM/PM Logic
  const hours = time.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12; // 0 ko 12 mein convert karta hai 12-hour format ke liye

  return (
    <div className="clock">
      <h1>
        {format(displayHours)}:{format(time.getMinutes())}
        <span style={{ fontSize: "0.5em", marginLeft: "5px" }}>{ampm}</span>
      </h1>
    </div>
  );
};

export default Clock;
