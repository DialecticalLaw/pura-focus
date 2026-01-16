import { create } from 'zustand';

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

interface TodosStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  clearTodos: () => void;
  toggleTodo: (id: string) => void;
}

export const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  addTodo: (todo: Todo) => {
    if (todo.text === '') return;
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: (id: string) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  clearTodos: () => set({ todos: [] }),
  toggleTodo: (id: string) =>
    set((state) => ({ todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)) })),
}));
