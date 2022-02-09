import { Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { useContext } from 'react';
import CharacterSheetParagraph from '../components/CharacterSheetParagraph';
import { IsMobileContext } from '../contexts/isMobileContext';
import characterSheetText from '../public/data/characterSheetText';
import styles from '../styles/About.module.css';

const AboutPage: NextPage = () => {
  const { isMobile } = useContext(IsMobileContext);

  return (
    <div className={!isMobile ? styles.about : styles.mobileAbout}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={11}>
          <h1>CHARACTER SHEET</h1>
        </Grid>
        <Grid item xs={11}>
          <div className={!isMobile ? styles.picture : styles.mobilePicture}>
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
          <div className={!isMobile ? styles.characterText : styles.mobileCharacterText}>
            {characterSheetText.map((paragraph, i) => (
              <CharacterSheetParagraph
                key={i}
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
