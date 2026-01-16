'use client';

import styles from './Button.module.css';

export function Button({
  children,
  onClick,
  classes,
  type,
}: {
  children: React.ReactNode;
  onClick: () => void;
  classes?: string[];
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <button type={type} className={`${styles.button} ${classes && classes.join(' ')}`} onClick={onClick}>
      {children}
    </button>
  );
}
