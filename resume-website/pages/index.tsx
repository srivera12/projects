import { Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import hi from '../public/hiPic.png';
import d20 from '../public/d20Pic.png';
import { useState } from 'react';
import D20Roller from '../components/D20Roller';

const Home: NextPage = () => {
  const [isRolling, setIsRolling] = useState(false);
  return (
    <div className={styles.home}>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={11} className={styles.hero}>
          <Image src={hi} />
          <div className={styles.text}>
            <h1 className={styles.name}>
              SARAH <span>K</span> RIVERA
            </h1>
            <h2 className={styles.subtitle}>
              A Level 6 <span>Software Sorcerer</span> With A Passion For Learning
            </h2>
          </div>
        </Grid>
        <Grid item className={styles.d20}>
          {isRolling ? (
            <D20Roller setIsRolling={setIsRolling} />
          ) : (
            <>
              <Image src={d20} />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setIsRolling(true);
                }}
              >
                ROLL THE d20!
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
