import styles from './Navbar.module.css';
import { leftNavbarLinks, rightNavbarLinks } from './navbarRoutes';
import { LeftNavbarLinks } from './LeftNavbarLinks/LeftNavbarLinks';
import { RightNavbarLinks } from './RightNavbarLinks/RightNavbarLinks';


export const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <LeftNavbarLinks links={leftNavbarLinks}/>
      <RightNavbarLinks links={rightNavbarLinks}/>
    </nav>

  );
};