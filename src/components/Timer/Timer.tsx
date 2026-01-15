import styles from './Timer.module.css';
import { Mode } from './Mode/Mode';
import { ResetButton } from './ResetButton/ResetButton';
import { Time } from './Time/Time';
import { StartButton } from './StartButton/StartButton';

export function Timer() {
  return (
    <div className={styles.timer_container}>
      <Mode />
      <Time />

      <div className={styles.buttons_wrapper}>
        <StartButton />
        <ResetButton />
      </div>
    </div>
  );
}
