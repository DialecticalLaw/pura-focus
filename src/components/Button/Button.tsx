'use client';

import styles from './Button.module.css';

export function Button({
  children,
  onClick,
  classes,
}: {
  children: React.ReactNode;
  onClick: () => void;
  classes?: string[];
}) {
  return (
    <button className={`${styles.button} ${classes && classes.join(' ')}`} onClick={onClick}>
      {children}
    </button>
  );
}
