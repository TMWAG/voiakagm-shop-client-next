import Link from 'next/link';
import { INavbarLink } from '../navbarRoutes';
import styles from './RightNavbarLinks.module.css';

export const RightNavbarLinks = ({
  links
}: {
  links: INavbarLink[]
}): JSX.Element => {
  return (
    <div className={styles.right}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
        >
          {l.content}
        </Link>
      ))}
    </div>
  );
};