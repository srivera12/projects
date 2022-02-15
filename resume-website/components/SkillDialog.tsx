import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React, { FC, useContext, useEffect, useState } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';
import courseData from '../public/data/courseData';
import skillData, { SkillData } from '../public/data/skillData';
import styles from '../styles/SkillDialog.module.css';

interface SkillDialogProps {
  skill: string;
  setSkill: Function;
}

const SkillDialog: FC<SkillDialogProps> = ({ skill, setSkill }): JSX.Element => {
  const { isMobile } = useContext(IsMobileContext);
  const [skillInfo, setSkillInfo] = useState<SkillData>({
    skill: '',
    skillDataCy: '',
    name: '',
    icon: faQuestion,
    picPath: '',
    blurb: '',
  });

  useEffect(() => {
    const chosenSkillInfo = skillData.find((s) => s.skill === skill);
    if (chosenSkillInfo) {
      setSkillInfo(chosenSkillInfo);
    }
  }, [skill]);

  return (
    <>
      <Dialog
        open={skill !== ''}
        onClose={() => {
          setSkill('');
        }}
      >
        <DialogTitle data-cy={`${skillInfo.skillDataCy}-dialog`}>
          <div className={styles.heading}>
            {<FontAwesomeIcon icon={skillInfo.icon} />}
            {skillInfo.name}
          </div>
          {!isMobile && <Typography>{skillInfo.blurb}</Typography>}
        </DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          {!isMobile && <Typography>{skillInfo.blurb}</Typography>}
          <Grid container justifyContent="center" alignItems="center" rowSpacing={5}>
            {courseData
              .filter((course) => course.skill === skill)
              .map(({ name, instructor, certPath, blurb, pathName }, i) => (
                <Grid item xs={12} key={i} data-cy={`${pathName}`}>
                  <h3>{name}</h3>
                  <h4>Taught By: {instructor}</h4>
                  <img src={certPath} alt={`certification of completion for ${name}`} />
                  <p>{blurb}</p>
                  <Link href={`/courses/${pathName}`} passHref>
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
    </>
  );
};

export default SkillDialog;
