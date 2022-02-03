import { Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import d20 from '../public/images/d20Pic.png';
import { useContext, useState } from 'react';
import D20Roller from '../components/D20Roller';
import { IsMobileContext } from '../contexts/isMobileContext';

const Home: NextPage = () => {
  const { isMobile } = useContext(IsMobileContext);
  return (
    <div className={!isMobile ? styles.home : styles.mobileHome}>
      <Grid container justifyContent="center" alignItems="space-between" rowSpacing={5}>
        {!isMobile ? (
          <div className={styles.hero}>
            <img src="/images/hiPic.png" alt="cartoon version of Sarah K Rivera waving hello" />
            <div>
              <h1>SARAH K RIVERA</h1>
              <h2>A Fledgling Software Sorcerer With A Passion For Learning</h2>
            </div>
          </div>
        ) : (
          <Grid item container justifyContent="center" xs={12} className={styles.mobileHero}>
            <Grid item xs={11}>
              <h1>SARAH K RIVERA</h1>
            </Grid>
            <Grid item container xs={12} alignItems="center" justifyContent="center">
              <Grid item xs={4}>
                <img src="/images/hiPic.png" alt="cartoon version of Sarah K Rivera waving hello" />
              </Grid>
              <Grid item xs={6}>
                <h2>A Fledgling Software Sorcerer With A Passion For Learning</h2>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid item className={styles.d20}>
          <D20Roller />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
