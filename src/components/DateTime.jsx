import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Update the clock every second
    const timer = setInterval(() => setDate(new Date()), 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Formatting logic
  const formatDateTime = (date) => {
    const options = {
      weekday: "short", // "Wed"
      month: "short", // "Jan"
      day: "numeric", // "7"
      hour: "numeric", // "7"
      minute: "2-digit", // "21"
      hour12: true, // "PM"
    };

    // Replace commas often added by toLocaleDateString to match your specific format
    return date.toLocaleString("en-US", options).replace(/,/g, "");
  };

  return <div>{formatDateTime(date)}</div>;
};

export default DateTime;
