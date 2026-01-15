'use client';

import { Todo, useTodosStore } from '@/stores/useTodosStore';
import { AddTodo } from './AddTodo/AddTodo';
import styles from './Todos.module.css';
import { RemoveTodo } from './RemoveTodo/RemoveTodo';
import { ClearTodo } from './ClearTodo/ClearTodo';

export function Todos() {
  const todos: Todo[] = useTodosStore((state) => state.todos);

  return (
    <div className={styles.wrapper}>
      <AddTodo />
      <div className={styles.todos_list}>
        {todos.map((todo) => (
          <div className={styles.todo_wrapper} key={todo.id}>
            <p className={styles.todo_text}>{todo.text}</p>
            <RemoveTodo id={todo.id} />
          </div>
        ))}
      </div>
      <ClearTodo />
    </div>
  );
}
