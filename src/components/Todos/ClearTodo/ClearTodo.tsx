'use client';

import { Button } from '@/components/Button/Button';
import { useTodosStore } from '@/stores/useTodosStore';

export function ClearTodo() {
  const clearTodos = useTodosStore((state) => state.clearTodos);

  return <Button onClick={clearTodos}>Clear All</Button>;
}
