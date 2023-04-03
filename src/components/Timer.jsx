import React, { useState, useEffect } from 'react';

const Timer = () => {
  // Load the saved state from localStorage if it exists, otherwise use initial state
  const savedState = JSON.parse(localStorage.getItem('timerState'));
  const initialState = savedState || { currentDay: 0, dayProgress: 0 };

  // Define state for the current day and progress within a day
  const [currentDay, setCurrentDay] = useState(initialState.currentDay);
  const [dayProgress, setDayProgress] = useState(initialState.dayProgress);

  // Set up an interval for the timer
  useEffect(() => {
    // Calculate the number of milliseconds in 5 minutes
    const fiveMinutesInMilliseconds = 5 * 60 * 1000;

    // Calculate the number of milliseconds for 0.1 day (30 seconds)
    const pointOneDayInMilliseconds = fiveMinutesInMilliseconds / 10;

    // Set up an interval that updates the day progress every 30 seconds
    const interval = setInterval(() => {
      setDayProgress((prevProgress) => {
        const newProgress = prevProgress + 0.1;
        if (newProgress >= 1) {
          setCurrentDay((prevDay) => prevDay + 1);
          return 0;
        }
        return newProgress;
      });
    }, pointOneDayInMilliseconds);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('timerState', JSON.stringify({ currentDay, dayProgress }));
  }, [currentDay, dayProgress]);

  // Render the current day and progress within a day
  return (
    <div>
      <h1>
        Day: {currentDay}
        {dayProgress.toFixed(1) !== '0.0' && `.${dayProgress.toFixed(1).substr(-1)}`}
      </h1>
    </div>
  );
};

export default Timer;
