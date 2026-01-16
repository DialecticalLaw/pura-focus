import { Todos } from '@/components/Todos/Todos';
import styles from './page.module.css';

export default function Todo() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>To-Do List</h1>
      <Todos />
    </div>
  );
}
