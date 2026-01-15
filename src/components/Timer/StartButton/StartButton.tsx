'use client';

import { useTimerStore } from '@/stores/useTimerStore';
import styles from './StartButton.module.css';
import { useEffect } from 'react';

export function StartButton() {
  const time = useTimerStore((state) => state.time);
  const isRunning = useTimerStore((state) => state.isRunning);
  const setIsRunning = useTimerStore((state) => state.setIsRunning);
  const decreaseTime = useTimerStore((state) => state.decreaseTime);
  const resetTime = useTimerStore((state) => state.resetTime);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      if (time === 0) {
        resetTime();
      } else decreaseTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [decreaseTime, isRunning, resetTime, time]);

  return (
    <button
      className={`${styles.start_btn} ${isRunning ? styles.active_btn : ''}`}
      onClick={() => setIsRunning(!isRunning)}
    >
      {isRunning ? 'Pause' : 'Start'}
    </button>
  );
}
