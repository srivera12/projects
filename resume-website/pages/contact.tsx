import { Button, Grid, Divider } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import working from '../public/images/working.png';
import { useContext, useState } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';
import contactData from '../public/data/contactData';

const ContactPage: NextPage = () => {
  const { isMobile } = useContext(IsMobileContext);
  return (
    <div className={styles.contactPage}>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={11}>
          <h1 className={styles.title}>CONTACT ME</h1>
        </Grid>
        {!isMobile ? (
          <Grid
            item
            container
            xs={11}
            justifyContent="space-around"
            alignItems="center"
            className={styles.contactLinks}
            columnSpacing={5}
          >
            <Grid item xs={3}>
              <div>
                <Image src={working} layout="responsive" />
                <h1>Sarah K Rivera</h1>
              </div>
            </Grid>
            <Grid item xs={1}>
              <Divider orientation={!isMobile ? 'vertical' : 'horizontal'} />
            </Grid>
            <Grid item xs={4}>
              {contactData.map((contact) => (
                <h2>
                  <span>{contact.contactType}</span>
                  <a href={contact.contactLink}>{contact.contactText}</a>
                </h2>
              ))}
              <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website">
                <Button variant="contained" color="secondary" size="large">
                  Contact Me
                </Button>
              </a>
            </Grid>
          </Grid>
        ) : (
          <Grid item container flexDirection="column" justifyContent="center" alignItems="center" xs={11}>
            <div className={styles.contactLinks}>
              <Grid item xs={11}>
                {contactData.map((contact) => (
                  <h2>
                    <span>{contact.contactType}</span>
                    <a href={contact.contactLink}>{contact.contactText}</a>
                  </h2>
                ))}
                <div className={styles.contactButton}>
                  <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website">
                    <Button variant="contained" color="secondary" size="large">
                      Contact Me
                    </Button>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={styles.contactImg}>
                  <Image src={working} layout="responsive" />
                  <h1>Sarah K Rivera</h1>
                </div>
              </Grid>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ContactPage;
