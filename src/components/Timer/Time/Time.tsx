'use client';

import { formatTime } from '@/helpers/formatTime';
import styles from './Time.module.css';
import { useTimerStore } from '@/stores/useTimerStore';

export function Time() {
  const time = useTimerStore((state) => state.time);

  return <p className={styles.time}>{formatTime(time)}</p>;
}
