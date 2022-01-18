import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button, BottomNavigation, Typography } from '@mui/material';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h4 className={styles.copyright}>
        Hand-coded by{' '}
        <Link href="/about">
          <a className={styles.namelink}>Sarah Rivera</a>
        </Link>{' '}
        in 2022
      </h4>
      <div className={styles.contact}>
        <a href="https://github.com/srivera12" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <Button variant="contained" color="secondary">
          CONTACT ME
        </Button>
        <a href="https://www.linkedin.com/in/sarahkrivera/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
