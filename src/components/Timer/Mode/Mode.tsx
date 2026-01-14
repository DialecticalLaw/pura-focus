import { Button } from '@/components/Button/Button';
import styles from './Mode.module.css';
import { useState } from 'react';

type Mode = 'focus' | 'shortBreak' | 'longBreak';
const modes: { short: Mode; long: string }[] = [
  { short: 'focus', long: 'Focus' },
  { short: 'shortBreak', long: 'Short Break' },
  { short: 'longBreak', long: 'Long Break' },
];

export function Mode() {
  const [activeMode, setActiveMode] = useState<Mode>('focus');

  return (
    <div className={styles.wrapper}>
      {modes.map((mode) => (
        <Button
          classes={[activeMode === mode.short ? styles.active : '']}
          key={mode.short}
          onClick={() => setActiveMode(mode.short)}
        >
          {mode.long}
        </Button>
      ))}
    </div>
  );
}
