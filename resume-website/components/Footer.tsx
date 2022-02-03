import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button, BottomNavigation, Typography, Grid, ListItem, List } from '@mui/material';
import { useContext } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';

export default function Footer() {
  const { isMobile } = useContext(IsMobileContext);
  return (
    <>
      {!isMobile ? (
        <div className={styles.footer}>
          <h4>
            Hand-coded by{' '}
            <Link href="/about">
              <a className={styles.nameLink} data-cy="name-link">
                Sarah K Rivera
              </a>
            </Link>{' '}
            in 2022
          </h4>
          <div className={styles.contact}>
            <a href="https://github.com/srivera12" target="_blank" rel="noreferrer" data-cy="github-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website"
              data-cy="contact-button"
            >
              <Button variant="contained" color="secondary">
                CONTACT ME
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/sarahkrivera/"
              target="_blank"
              rel="noreferrer"
              data-cy="linkedin-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      ) : (
        <>
          <ListItem className={styles.navbarSpacing}></ListItem>
          <ListItem className={styles.mobileListItem}>
            <a
              href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website"
              data-cy="contact-button"
            >
              <Button variant="contained" color="secondary">
                CONTACT ME
              </Button>
            </a>
          </ListItem>
          <ListItem className={styles.mobileListItem}>
            <a href="https://github.com/srivera12" target="_blank" rel="noreferrer" data-cy="github-icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </ListItem>
          <ListItem className={styles.mobileListItem}>
            <a
              href="https://www.linkedin.com/in/sarahkrivera/"
              target="_blank"
              rel="noreferrer"
              data-cy="linkedin-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </ListItem>
          <ListItem>
            {' '}
            <p>
              Hand-coded by <br />
              <Link href="/about">
                <a className={styles.nameLink} data-cy="name-link">
                  Sarah K Rivera
                </a>
              </Link>
              <br />
              in 2022
            </p>
          </ListItem>
        </>
      )}
    </>
  );
}
