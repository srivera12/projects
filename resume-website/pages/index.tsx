import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <img alt="Picture of Sarah Rivera" src="" />
        <div className={styles.text}>
          <h1 className={styles.name}>SARAH K RIVERA</h1>
          <h2 className={styles.subtitle}>Level 6 Software Sorcerer</h2>
        </div>
      </div>
      <div className={styles.d20}></div>
    </div>
  );
};

export default Home;
