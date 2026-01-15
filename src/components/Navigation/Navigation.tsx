'use client';

import Link from 'next/link';
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';

const navigationLinks = [
  {
    name: 'To-Do',
    href: '/todo',
  },
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Journal',
    href: '/journal',
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
