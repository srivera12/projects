import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Typography } from '@mui/material';
import React, { FC, useContext } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';
import styles from '../styles/CharacterSheetParagraph.module.css';

interface ParagraphProps {
  key: number;
  icon: IconDefinition;
  subtitle: string;
  text: string;
}

const CharacterSheetParagraph: FC<ParagraphProps> = ({ icon, subtitle, text }): JSX.Element => {
  const { isMobile } = useContext(IsMobileContext);

  return (
    <div className={`${styles.paragraph} ${isMobile && styles.mobileParagraph}`}>
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
