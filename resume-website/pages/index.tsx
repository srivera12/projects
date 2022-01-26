import { Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import hi from '../public/images/hiPic.png';
import d20 from '../public/images/d20Pic.png';
import { useState } from 'react';
import D20Roller from '../components/D20Roller';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Grid container justifyContent="center" alignItems="space-between" rowSpacing={5}>
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
        <Grid item className={styles.d20}>
          <D20Roller />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
