import { Button, Grid, Divider } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import working from '../public/images/working.png';
import { useState } from 'react';

const ContactPage: NextPage = () => {
  return (
    <div className={styles.contactPage}>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={11}>
          <h1 className={styles.title}>CONTACT ME</h1>
        </Grid>
        <Grid
          item
          container
          xs={11}
          justifyContent="space-around"
          alignItems="center"
          className={styles.contactLinks}
          columnSpacing={5}
        >
          <Grid item xs={4}>
            <div>
              <Image src={working} layout="responsive" />
              <h1>Sarah K Rivera</h1>
            </div>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={4}>
            <h2>
              <span>Email:</span>
              <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website">
                sarahkrivera@gmail.com
              </a>
            </h2>
            <h2>
              <span>GitHub:</span>
              <a href="https://github.com/srivera12">srivera12</a>
            </h2>
            <h2>
              <span>LinkedIn:</span>
              <a href="https://www.linkedin.com/in/sarahkrivera/">Sarah Rivera</a>
            </h2>
            <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website">
              <Button variant="contained" color="secondary" size="large">
                Contact Me
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
