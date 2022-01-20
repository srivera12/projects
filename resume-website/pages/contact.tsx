import { Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import working from '../public/images/working.png';
import { useState } from 'react';

const ContactPage: NextPage = () => {
  return (
    <div className={styles.contact}>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={5}>
          <h1>Contact Me</h1>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" className={styles.contactLinks}>
          <Grid item xs={5}>
            <h3>
              <span>Email:</span>
              <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website">
                sarahkrivera@gmail.com
              </a>
            </h3>
            <h3>
              <span>GitHub:</span>
              <a href="https://github.com/srivera12">srivera12</a>
            </h3>
            <h3>
              <span>LinkedIn:</span>
              <a href="https://www.linkedin.com/in/sarahkrivera/">Sarah Rivera - Software Developer v0.0.1</a>
            </h3>
            <a href="mailto:sarahkrivera@gmail.com?subject=Requested Contact from Portfolio Website">
              <Button variant="contained" color="secondary" size="large">
                Contact Me
              </Button>
            </a>
          </Grid>
          <Grid item xs={5}>
            <Image src={working} layout="responsive" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
