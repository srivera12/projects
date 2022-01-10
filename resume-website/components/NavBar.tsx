import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import NavLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <AppBar className={styles.navbar}>
      <Toolbar disableGutters>
        <div className={styles.home}>
          <FontAwesomeIcon icon={faDiceD20} />
          <Link href="/">
            <a>HOME</a>
          </Link>
        </div>
        <div className={styles.pages}>
          <Link href="/about">
            <a className={currentPath === '/about' ? styles.activelink : ''}>About</a>
          </Link>
          <Link href="/skills">
            <a className={currentPath === '/skills' ? styles.activelink : ''}>Skills</a>
          </Link>
          <Link href="/projects">
            <a className={currentPath === '/projects' ? styles.activelink : ''}>Projects</a>
          </Link>
          <Link href="/contact">
            <a className={currentPath === '/contact' ? styles.activelink : ''}>Contact</a>
          </Link>
          <Link href="/archive">
            <a className={currentPath === '/archive' ? styles.activelink : ''}>Archive</a>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
