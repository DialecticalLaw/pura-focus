'use client';

import { Button } from '@/components/Button/Button';
import styles from './AddTodo.module.css';
import { useTodosStore } from '@/stores/useTodosStore';
import { useRef } from 'react';

export function AddTodo() {
  const addTodo = useTodosStore((state) => state.addTodo);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    const textareaElem = textareaRef.current;
    if (!textareaElem) return;

    const text = textareaElem.value.trim();
    if (text) {
      addTodo({ text, id: crypto.randomUUID() });
      textareaElem.value = '';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form className={styles.wrapper} ref={formRef} onSubmit={handleSubmit}>
      <div className={styles.textarea_wrapper}>
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          name="story"
          maxLength={120}
          rows={1}
          cols={40}
          onKeyDown={handleKeyDown}
        ></textarea>
      </div>

      <Button
        type="submit"
        onClick={() => {
          const textareaElem = textareaRef.current;
          if (!textareaElem) {
            throw new Error('textareaRef is null');
          }
          addTodo({ text: textareaElem.value.trim() || '', id: crypto.randomUUID() });
          textareaElem.value = '';
        }}
      >
        Add Todo
      </Button>
    </form>
  );
}
