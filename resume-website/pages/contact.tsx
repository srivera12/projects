import { Button, Divider, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { useContext } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';
import contactData from '../public/data/contactData';
import styles from '../styles/Contact.module.css';

const ContactPage: NextPage = () => {
  const { isMobile } = useContext(IsMobileContext);

  const picAndName = (
    <div className={isMobile ? styles.mobileContactImg : undefined}>
      <img src="/images/working.png" alt="cartoon version of Sarah K Rivera walking and holding a briefcase" />
      <h1>Sarah K Rivera</h1>
    </div>
  );
  const contactLinks = contactData.map((contact, i) => (
    <h2 key={i}>
      <span>{contact.contactType}</span>
      <a href={contact.contactLink} data-cy={`${contact.contactType.toLowerCase()}-link`}>
        {contact.contactText}
      </a>
    </h2>
  ));
  const contactButton = (
    <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website" data-cy="contact-button">
      <Button variant="contained" color="secondary" size="large">
        Contact Me
      </Button>
    </a>
  );

  return (
    <div className={`${styles.contactPage} ${isMobile && styles.mobileContactPage}`}>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={11}>
          <h1 className={styles.title}>CONTACT ME</h1>
        </Grid>
        {!isMobile ? (
          <Grid
            item
            container
            xs={10}
            justifyContent="space-around"
            alignItems="center"
            className={styles.contactLinks}
            columnSpacing={5}
          >
            <Grid item xs={5}>
              {picAndName}
            </Grid>
            <Grid item xs={1}>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item xs={5}>
              {contactLinks}
              {contactButton}
            </Grid>
          </Grid>
        ) : (
          <Grid item container flexDirection="column" justifyContent="center" alignItems="center" xs={11}>
            <div className={styles.mobileContactLinks}>
              <Grid item xs={11}>
                {contactLinks}
                <div className={styles.mobileContactButton}>{contactButton}</div>
              </Grid>
              <Grid item xs={12}>
                {picAndName}
              </Grid>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ContactPage;
