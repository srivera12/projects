import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import skillData from '../public/data/skillData';
import courseData from '../public/data/courseData';
import styles from '../styles/SkillDialog.module.css';
import { ClassNames } from '@emotion/react';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import coursePageData from '../public/data/courseData';
import Link from 'next/link';
import Image from 'next/image';
import { v4 } from 'uuid';

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
            key={parseInt(v4())}
            open={skill !== ''}
            onClose={() => {
              setSkill('');
            }}
          >
            <DialogTitle data-cy={`${s.skillDataCy}-dialog`}>
              <div className={styles.heading}>
                <FontAwesomeIcon icon={s.icon} />
                {s.name}
              </div>
              <Typography>{s.blurb}</Typography>
            </DialogTitle>
            <Divider variant="middle" />
            <DialogContent>
              <Grid container justifyContent="center" alignItems="center" rowSpacing={5}>
                {courseData
                  .filter((course) => course.skill === skill)
                  .map((c) => (
                    <Grid item xs={12} key={parseInt(v4())} data-cy={`${c.pathName}`}>
                      <h3>{c.name}</h3>
                      <h4>Taught By: {c.instructor}</h4>
                      <img src={c.certPath} alt={`certification of completion for ${c.name}`} />
                      <p>{c.blurb}</p>
                      <Link href={`/courses/${c.pathName}`} passHref>
                        <a>
                          <Button variant="outlined" color="primary">
                            Read More
                          </Button>
                        </a>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </DialogContent>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setSkill('');
              }}
            >
              Close
            </Button>
          </Dialog>
        ))}
    </>
  );
};

export default SkillDialog;
