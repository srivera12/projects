import { Dialog, Grid, DialogContent, Typography, DialogTitle } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/Skills.module.css';
import react from '../public/images/react.png';
import Image from 'next/image';
import js from '../public/images/js.png';
import tsAndJS from '../public/images/tsAndJS.jpeg';
import htmlAndCss from '../public/images/htmlAndCss.png';
import ts from '../public/images/ts.png';
import git from '../public/images/git.png';
import node from '../public/images/node.png';
import mui from '../public/images/mui.png';
import vscode from '../public/images/vscode.png';
import nextjs from '../public/images/nextjs.png';
import bootstrap from '../public/images/bootstrap.png';
import { useEffect, useState } from 'react';
import SkillDialog from '../components/SkillDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skillData from '../public/data/skillData';
import additionalSkillsData from '../public/data/additionalSkillsData';

const SkillsPage: NextPage = () => {
  const [skillDialogType, setSkillDialogType] = useState('');
  return (
    <div className={styles.skills}>
      <Grid container flexDirection="column">
        <div>
          <h1>Skills and Courses</h1>
          <h3>Click on a skill to learn more</h3>
        </div>
      </Grid>
      <Grid container justifyContent="center" spacing={7} alignItems="center">
        {skillData.map((s, i) => (
          <Grid
            key={i}
            item
            xs={3}
            onClick={() => {
              setSkillDialogType(s.skill);
            }}
          >
            <Image src={s.pic} layout="responsive" />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center" className={styles.additionalSkillsContainer}>
        <Grid item xs={6}>
          <div className={styles.additionalSkills}>
            <h1>ADDITIONAL SKILLS</h1>
            <Grid container alignItems="center" justifyContent="center" columnSpacing={10} rowSpacing={5}>
              {additionalSkillsData.map((skill, i) => (
                <Grid item xs={4} key={i}>
                  <Image src={skill} layout="responsive" />
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
