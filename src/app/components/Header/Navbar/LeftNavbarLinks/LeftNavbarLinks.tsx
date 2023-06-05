'use client'
import styles from './LeftNavbarLinks.module.css';
import { usePathname } from "next/navigation";
import { INavbarLink } from "../navbarRoutes"
import Link from "next/link";

export const LeftNavbarLinks = ({
  links
}: {
  links: INavbarLink[]
}): JSX.Element => {
  const pathname = usePathname();
  return (
    <div className={styles.left}>
      {links.map((l) => {
        const isActive = pathname.startsWith(l.href);
        return (
          <Link
            className={isActive ? styles.active : ''}
            key={l.href}
            href={l.href}
          >
            {l.content}
          </Link>
        );
      })}
    </div>
  );
};