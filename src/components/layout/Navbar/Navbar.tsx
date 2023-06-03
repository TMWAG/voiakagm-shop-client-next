'use client'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css';
import Link from 'next/link';
import { navbarLinks } from './navbarRoutes';


export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      {navbarLinks.map((l) => {
        const isActive = pathname.startsWith(l.href);
        return (
          <Link
            className={`${styles.navLink} ${isActive && styles.active}`}
            key={l.href}
            href={l.href}
          >
            {l.content}
          </Link>
        ); 
      })}
    </nav>
  );
};