import { useRouter } from 'next/router';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  // This can be used to close the menu, e.g. when a user clicks a menu item
  const CloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile */}
      <Menu
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
        className="MenuMobile"
      >
        <Link href="/protected">
          <a
            onClick={() => CloseMenu()}
            className={
              currentRoute === '/protected'
                ? 'btm-item menu-item-active'
                : 'btm-item'
            }
          >
            Home
          </a>
        </Link>
        <Link href="/profile">
          <a
            onClick={() => CloseMenu()}
            className={
              currentRoute === '/profile'
                ? 'btm-item menu-item-active'
                : 'btm-item'
            }
          >
            Profile
          </a>
        </Link>
        <Link href="/">
          <a onClick={() => CloseMenu()} className="btm-item">
            Exit
          </a>
        </Link>
      </Menu>
      {/* Desktop */}
      <nav className={styles.MenuDesktop}>
        <Link href="/protected">
          <a
            className={
              currentRoute === '/protected'
                ? 'btm-item menu-item-active'
                : 'btm-item'
            }
          >
            Home
          </a>
        </Link>
        <Link href="/profile">
          <a
            className={
              currentRoute === '/profile'
                ? 'btm-item menu-item-active'
                : 'btm-item'
            }
          >
            Profile
          </a>
        </Link>
        <Link href="/">
          <a className={styles.MenuDesktopExit}>Exit</a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
