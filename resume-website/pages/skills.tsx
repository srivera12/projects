import { Dialog, Grid } from '@mui/material';
import type { NextPage } from 'next';
import styles from '../styles/Skills.module.css';
import react from '../public/react.png';
import Image from 'next/image';
import js from '../public/js.png';
import htmlAndCss from '../public/htmlAndCss.png';
import ts from '../public/ts.png';
import git from '../public/git.png';
import node from '../public/node.png';
import mui from '../public/mui.png';
import vscode from '../public/vscode.png';
import nextjs from '../public/nextjs.png';
import bootstrap from '../public/bootstrap.png';
import { useState } from 'react';
import SkillDialog from '../components/SkillDialog';

const SkillsPage: NextPage = () => {
  const [skillDialogType, setSkillDialogType] = useState('');
  return (
    <div className={styles.skills}>
      <Grid container justifyContent="center">
        <h1>Select A Skill To Learn More</h1>
      </Grid>
      <Grid container justifyContent="center" spacing={4} alignItems="center">
        <Grid item xs={3}>
          <Image src={react} layout="responsive" />
        </Grid>
        <Grid item xs={3}>
          <Image src={js} layout="responsive" />
        </Grid>
        <Grid item xs={3}>
          <Image src={htmlAndCss} layout="responsive" />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <div className={styles.additionalSkills}>
            <h1>ADDITIONAL SKILLS</h1>
            <Grid container alignItems="center" justifyContent="center" spacing={10}>
              <Grid item xs={3}>
                <Image src={ts} />
              </Grid>
              <Grid item xs={3}>
                <Image src={git} />
              </Grid>
              <Grid item xs={3}>
                <Image src={node} />
              </Grid>
              <Grid item xs={3}>
                <Image src={mui} />
              </Grid>
              <Grid item xs={3}>
                <Image src={vscode} />
              </Grid>
              <Grid item xs={3}>
                <Image src={nextjs} />
              </Grid>
              <Grid item xs={3}>
                <Image src={bootstrap} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Dialog open={skillDialogType !== ''}>
        <SkillDialog skill={skillDialogType} />
      </Dialog>
    </div>
  );
};

export default SkillsPage;
