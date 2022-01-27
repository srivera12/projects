import { Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import hi from '../public/images/hiPic.png';
import d20 from '../public/images/d20Pic.png';
import { useContext, useState } from 'react';
import D20Roller from '../components/D20Roller';
import { IsMobileContext } from '../contexts/isMobileContext';

const Home: NextPage = () => {
  const { isMobile } = useContext(IsMobileContext);
  return (
    <div className={styles.home}>
      <Grid container justifyContent="center" alignItems="space-between" rowSpacing={5}>
        {!isMobile ? (
          <div className={styles.hero}>
            <Image src={hi} />
            <div className={styles.text}>
              <h1 className={styles.name}>
                SARAH <span>K</span> RIVERA
              </h1>
              <h2 className={styles.subtitle}>
                A Fledgling <span>Software Sorcerer</span> With A Passion For Learning
              </h2>
            </div>
          </div>
        ) : (
          <Grid item container justifyContent="center" xs={12} className={styles.hero}>
            <Grid item xs={12}>
              <h1 className={styles.name}>SARAH K RIVERA</h1>
            </Grid>
            <Grid item container xs={12} alignItems="center" justifyContent="space-around" className={styles.text}>
              <Grid item xs={4}>
                <Image src={hi} />
              </Grid>
              <Grid item xs={6}>
                <h2 className={styles.subtitle}>A Fledgling Software Sorcerer With A Passion For Learning</h2>
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
