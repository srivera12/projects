import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ListItem } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const { isMobile } = useContext(IsMobileContext);

  const nameLink = (
    <Link href="/about">
      <a className={styles.nameLink} data-cy="name-link">
        Sarah K Rivera
      </a>
    </Link>
  );
  const gitHub = (
    <a href="https://github.com/srivera12" target="_blank" rel="noreferrer" data-cy="github-icon">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  );
  const linkedIn = (
    <a href="https://www.linkedin.com/in/sarahkrivera/" target="_blank" rel="noreferrer" data-cy="linkedin-icon">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  );
  const contactButton = (
    <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website" data-cy="contact-button">
      <Button variant="contained" color="secondary">
        CONTACT ME
      </Button>
    </a>
  );

  return (
    <>
      {!isMobile ? (
        <div className={styles.footer}>
          <h4>Hand-coded by {nameLink} in 2022</h4>
          <div className={styles.contact}>
            {gitHub}
            {contactButton}
            {linkedIn}
          </div>
        </div>
      ) : (
        <>
          <ListItem className={styles.navbarSpacing}></ListItem>
          <ListItem className={styles.mobileListItem}>{contactButton}</ListItem>
          <ListItem className={styles.mobileListItem}>{gitHub}</ListItem>
          <ListItem className={styles.mobileListItem}>{linkedIn}</ListItem>
          <ListItem>
            {' '}
            <p>
              Hand-coded by <br />
              {nameLink}
              <br />
              in 2022
            </p>
          </ListItem>
        </>
      )}
    </>
  );
}
