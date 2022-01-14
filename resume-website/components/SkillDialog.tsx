import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import skillData from '../public/skillData';
import courseData from '../public/courseData';
import styles from '../styles/SkillDialog.module.css';
import { ClassNames } from '@emotion/react';

interface SkillDialogProps {
  skill: string;
  setSkill: Function;
}

const SkillDialog: FC<SkillDialogProps> = ({ skill, setSkill }): JSX.Element => {
  return (
    <>
      {skillData
        .filter((s) => s.skill === skill)
        .map((s) => (
          <Dialog
            open={skill !== ''}
            onClose={() => {
              setSkill('');
            }}
          >
            <DialogTitle>
              <FontAwesomeIcon icon={s.icon} />
              {s.name}
              <Typography>{s.blurb}</Typography>
            </DialogTitle>
            <DialogContent>
              <Grid container justifyContent="center" alignItems="center">
                {courseData
                  .filter((course) => course.skill === skill)
                  .map((c) => (
                    <Grid item xs={12}>
                      <h3>{c.name}</h3>
                      <h4>Taught By: {c.instructor}</h4>
                      <img src="/beginner.png" height="300px" width="100%" />
                      <p>{c.blurb}</p>
                    </Grid>
                  ))}
              </Grid>
            </DialogContent>
          </Dialog>
        ))}
    </>
  );
};

export default SkillDialog;
