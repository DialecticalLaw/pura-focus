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
    <button className={`${classes && classes.join(' ')} ${styles.button}`} onClick={onClick}>
      {children}
    </button>
  );
}
