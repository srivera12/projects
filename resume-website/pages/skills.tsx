import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import SkillDialog from '../components/SkillDialog';
import { IsMobileContext } from '../contexts/isMobileContext';
import additionalSkillsData from '../public/data/additionalSkillsData';
import skillData from '../public/data/skillData';
import styles from '../styles/Skills.module.css';

const SkillsPage: NextPage = () => {
  const [skillDialogType, setSkillDialogType] = useState('');
  const { isMobile } = useContext(IsMobileContext);

  return (
    <div className={!isMobile ? styles.skills : styles.mobileSkills}>
      <Grid container flexDirection="column">
        <div>
          <h1>SKILLS AND COURSES</h1>
          <h3>Click on a skill to learn more</h3>
        </div>
      </Grid>
      <Grid container justifyContent="center" spacing={7} alignItems="center">
        {skillData.map((s, i) => (
          <Grid
            key={i}
            item
            xs={8}
            md={3}
            xl={4}
            onClick={() => {
              setSkillDialogType(s.skill);
            }}
            data-cy={`${s.skillDataCy}-icon`}
          >
            <div className={styles.mainSkill}>
              <img src={s.picPath} alt={`read more about ${s.name} and completed courses relevant to that skill`} />
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center" className={styles.additionalSkillsContainer}>
        <Grid item xs={11} md={6}>
          <div className={!isMobile ? styles.additionalSkills : styles.mobileAdditionalSkills}>
            <h1>ADDITIONAL SKILLS</h1>
            <Grid container alignItems="center" justifyContent="center" columnSpacing={10} rowSpacing={5}>
              {additionalSkillsData.map((skill, i) => (
                <Grid item xs={5} md={4} xl={3} key={i}>
                  <img src={skill.imagePath} alt={`${skill.name}`} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
      <SkillDialog skill={skillDialogType} setSkill={setSkillDialogType} />
    </div>
  );
};

export default SkillsPage;
