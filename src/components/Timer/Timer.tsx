'use client';

import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { formatTime } from '@/helpers/formatTime';

const DEFAULT_TIME_SECONDS = 25 * 60;

export function Timer() {
  const [time, setTime] = useState(DEFAULT_TIME_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((time) => {
        if (time < 1) {
          setIsRunning(false);
          return DEFAULT_TIME_SECONDS;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(DEFAULT_TIME_SECONDS);
  };

  return (
    <div>
      <p>Focus</p>
      <p>{formatTime(time)}</p>
      <Button onClick={() => setIsRunning((isRunning) => !isRunning)}>{isRunning ? 'Pause' : 'Start'}</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}
