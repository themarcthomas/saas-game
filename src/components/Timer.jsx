import React, { useState, useEffect } from 'react';

const Timer = () => {
  // Define state for the current day
  const [currentDay, setCurrentDay] = useState(0);

  // Set up an interval for the timer
  useEffect(() => {
    // Calculate the number of milliseconds in 5 minutes
    const fiveMinutesInMilliseconds = 5 * 60 * 1000;

    // Set up an interval that increments the day every 5 minutes
    const interval = setInterval(() => {
      setCurrentDay((prevDay) => prevDay + 1);
    }, fiveMinutesInMilliseconds);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Render the current day
  return (
    <div>
      <h1>Day: {currentDay}</h1>
    </div>
  );
};

export default Timer;
