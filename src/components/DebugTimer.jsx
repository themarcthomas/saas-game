import React, { useState, useEffect } from 'react';
import './css/DebugTimer.css';

const DebugTimer = () => {
  // Load the elapsed time from localStorage or initialize it to 0
  const initialElapsedTime = () => {
    const storedElapsedTime = localStorage.getItem('debugElapsedTime');
    return storedElapsedTime ? parseInt(storedElapsedTime, 10) : 0;
  };

  // Define state for the elapsed time
  const [elapsedTime, setElapsedTime] = useState(initialElapsedTime);

  // Set up an interval for the timer
  useEffect(() => {
    // Set up an interval that increments the elapsed time every second
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => {
        const newTime = prevTime + 1;
        // Store the new elapsed time in localStorage
        localStorage.setItem('debugElapsedTime', newTime);
        return newTime;
      });
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Format the elapsed time as hh:mm:ss
  const formatElapsedTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Render the elapsed time
  return (
    <div className="DebugTimer">
      <p>
        Time elapsed: <span>{formatElapsedTime(elapsedTime)}</span>
      </p>
    </div>
  );
};

export default DebugTimer;
