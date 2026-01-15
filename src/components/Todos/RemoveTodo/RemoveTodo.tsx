'use client';

import { TrashIcon } from '@/components/Icons/TrashIcon';
import { useTodosStore } from '@/stores/useTodosStore';
import styles from './RemoveTodo.module.css';

export function RemoveTodo({ id }: { id: string }) {
  const removeTodo = useTodosStore((state) => state.removeTodo);

  return (
    <button className={styles.remove_btn} onClick={() => removeTodo(id)}>
      <TrashIcon />
    </button>
  );
}
