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
                    <Grid item xs={12}>
                      <h3>{c.name}</h3>
                      <h4>Taught By: {c.instructor}</h4>
                      <Image src={c.cert} layout="responsive" />
                      <p>{c.blurb}</p>
                      <Link href={`/courses/${c.pathName}`}>
                        <Button variant="outlined" color="primary">
                          Read More
                        </Button>
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
