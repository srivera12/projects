import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button, BottomNavigation, Typography, Grid } from '@mui/material';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h4>
        Hand-coded by{' '}
        <Link href="/about">
          <a className={styles.nameLink}>Sarah K Rivera</a>
        </Link>{' '}
        in 2022
      </h4>
      <div className={styles.contact}>
        <a href="https://github.com/srivera12" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website">
          <Button variant="contained" color="secondary">
            CONTACT ME
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/sarahkrivera/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
