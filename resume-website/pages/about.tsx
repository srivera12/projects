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
    <div className={`${styles.about} ${isMobile && styles.mobileAbout}`}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={11}>
          <h1>CHARACTER SHEET</h1>
        </Grid>
        <Grid item xs={11}>
          <div className={`${styles.picture} ${isMobile && styles.mobilePicture}`}>
            <img
              src="/images/characterPic.png"
              alt="cartoon version of Sarah K Rivera casting a magic spell while smiling towards the viewer"
            />
            <p>Feared by bugs far and wide.</p>
            <a data-cy="resume-button" href="/resume.pdf" target="_blank">
              <Button variant="contained" color="secondary">
                View My Resume
              </Button>
            </a>
          </div>
          <div className={`${styles.characterText} ${isMobile && styles.mobileCharacterText}`}>
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
