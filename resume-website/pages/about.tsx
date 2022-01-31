import { Button, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import character from '../public/images/characterPic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import characterSheetText from '../public/data/characterSheetText';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import CharacterSheetParagraph from '../components/CharacterSheetParagraph';
import { v4 } from 'uuid';

const AboutPage: NextPage = () => {
  return (
    <div className={styles.about}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={11}>
          <h1>CHARACTER SHEET</h1>
        </Grid>
        <Grid item xs={11}>
          <div className={styles.picture}>
            <img
              src="/images/characterPic.png"
              alt="cartoon version of Sarah K Rivera casting a magic spell while smiling towards the viewer"
            />
            <p>Feared by bugs far and wide.</p>
            <a href="">
              <Button variant="contained" color="secondary" data-cy="resume-button">
                View My Resume
              </Button>
            </a>
          </div>
          <div className={styles.characterText}>
            {characterSheetText.map((paragraph) => (
              <CharacterSheetParagraph
                key={parseInt(v4())}
                icon={paragraph.icon}
                subtitle={paragraph.subtitle}
                text={paragraph.text}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage;
