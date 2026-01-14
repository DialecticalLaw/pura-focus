import styles from './Background.module.css';

export function Background({ children }: { children: React.ReactNode }) {
  return <div className={styles.background}>{children}</div>;
}
