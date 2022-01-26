import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React, { FC } from 'react';
import { Divider, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/CharacterSheetParagraph.module.css';

interface ParagraphProps {
  key: number;
  icon: IconDefinition;
  subtitle: string;
  text: string;
}

const CharacterSheetParagraph: FC<ParagraphProps> = ({ icon, subtitle, text }): JSX.Element => {
  return (
    <div className={styles.paragraph}>
      <Typography variant="h3">
        <FontAwesomeIcon icon={icon} />
        {subtitle}
      </Typography>
      <Typography>{text}</Typography>
      <Divider />
    </div>
  );
};

export default CharacterSheetParagraph;
