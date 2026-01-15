import { create } from 'zustand';

export interface Todo {
  id: string;
  text: string;
}

interface TodosStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  clearTodos: () => void;
}

export const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  addTodo: (todo: Todo) => {
    if (todo.text === '') return;
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: (id: string) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  clearTodos: () => set({ todos: [] }),
}));
