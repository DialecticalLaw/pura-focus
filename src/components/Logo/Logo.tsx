import Link from 'next/link';
import { LogoIcon } from '../Icons/LogoIcon';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <Link href={'/'} className={styles.logo}>
      <LogoIcon />
    </Link>
  );
}
