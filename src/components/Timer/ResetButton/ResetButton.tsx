'use client';

import { ResetIcon } from '@/components/Icons/ResetIcon';
import styles from './ResetButton.module.css';
import { useTimerStore } from '@/stores/useTimerStore';

export function ResetButton() {
  const resetTime = useTimerStore((state) => state.resetTime);

  return (
    <button className={styles.reset_btn} onClick={resetTime}>
      <ResetIcon />
    </button>
  );
}
