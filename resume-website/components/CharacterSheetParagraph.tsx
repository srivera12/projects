import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React, { FC } from 'react';
import { Divider, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ParagraphProps {
  icon: IconDefinition;
  subtitle: string;
  text: string;
}

export const CharacterSheetParagraph: FC<ParagraphProps> = ({ icon, subtitle, text }): JSX.Element => {
  return (
    <>
      <>
        <Typography variant="h3">
          <FontAwesomeIcon icon={icon} />
          {subtitle}
        </Typography>
        <Typography>{text}</Typography>
        <Divider />
      </>
    </>
  );
};
