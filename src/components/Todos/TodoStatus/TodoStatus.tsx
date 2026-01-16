'use client';

import { useTodosStore } from '@/stores/useTodosStore';
import styles from './TodoStatus.module.css';

export function TodoStatus({ id }: { id: string }) {
  const toggleTodo = useTodosStore((state) => state.toggleTodo);
  const isDone = useTodosStore((state) => state.todos.find((todo) => todo.id === id)?.isDone);

  return <input defaultChecked={isDone} onChange={() => toggleTodo(id)} className={styles.input} type="checkbox" />;
}
