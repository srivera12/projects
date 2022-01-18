import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import skillData from '../public/skillData';
import courseData from '../public/courseData';
import styles from '../styles/SkillDialog.module.css';
import { ClassNames } from '@emotion/react';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import coursePageData from '../public/coursePageData';
import Link from 'next/link';

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
              <div>
                <FontAwesomeIcon icon={s.icon} />
                {s.name}
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => {
                    setSkill('');
                  }}
                >
                  Close
                </Button>
              </div>
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
                      <img src={c.certPath} height="300px" width="100%" />
                      <p>{c.blurb}</p>
                      <Link href={`/courses/${c.pathName}`}>
                        <a>Read More</a>
                      </Link>
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
