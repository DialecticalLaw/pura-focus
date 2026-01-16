'use client';

import { Button } from '@/components/Button/Button';
import styles from './Mode.module.css';
import { ModeType, useTimerStore } from '@/stores/useTimerStore';

const modesData: { short: ModeType; long: string }[] = [
  { short: 'focus', long: 'Focus' },
  { short: 'shortBreak', long: 'Short Break' },
  { short: 'longBreak', long: 'Long Break' },
];

export function Mode() {
  const mode = useTimerStore((state) => state.mode);
  const setMode = useTimerStore((state) => state.setMode);
  const resetTime = useTimerStore((state) => state.resetTime);

  const handleChangeMode = (mode: ModeType) => {
    setMode(mode);
    resetTime();
  };

  return (
    <div className={styles.wrapper}>
      {modesData.map((modeData) => (
        <Button
          classes={[mode === modeData.short ? styles.active : '']}
          key={modeData.short}
          onClick={() => handleChangeMode(modeData.short)}
        >
          {modeData.long}
        </Button>
      ))}
    </div>
  );
}
