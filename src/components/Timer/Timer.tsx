'use client';

import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { formatTime } from '@/helpers/formatTime';
import styles from './Timer.module.css';
import { ResetIcon } from '../Icons/ResetIcon';

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
    <div className={styles.timer_container}>
      <p className={styles.text}>Focus</p>
      <div className={styles.time}>{formatTime(time)}</div>

      <div className={styles.buttons_wrapper}>
        <Button
          classes={[styles.text, styles.start_btn, isRunning ? styles.active_btn : '']}
          onClick={() => setIsRunning((isRunning) => !isRunning)}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <button className={styles.reset_btn} onClick={handleReset}>
          <ResetIcon />
        </button>
      </div>
    </div>
  );
}
