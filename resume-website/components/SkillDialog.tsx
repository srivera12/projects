import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { FC } from 'react';
import skillData from '../public/skillData';

interface SkillDialogProps {
  skill: string;
}

const SkillDialog: FC<SkillDialogProps> = ({ skill }): JSX.Element => {
  return (
    <>
      {skillData
        .filter((s) => {
          s.skill === skill;
        })
        .map((s) => (
          <>
            <DialogTitle>
              <FontAwesomeIcon icon={s.icon} />
              {s.name}
            </DialogTitle>
            <DialogContent>
              <Typography>{s.blurb}</Typography>
            </DialogContent>
          </>
        ))}
    </>
  );
};

export default SkillDialog;
