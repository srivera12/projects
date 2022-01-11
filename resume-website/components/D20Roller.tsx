import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/d20.module.css';
import funFacts from '../public/funFacts';
import { Button } from '@mui/material';
import d20 from '../public/d20Pic.png';

interface RollerProps {
  setIsRolling: Function;
}

const D20Roller: FC<RollerProps> = ({ setIsRolling }): JSX.Element => {
  const [hasRolled, setHasRolled] = useState(false);
  const [rolledNumber, setRolledNumber] = useState(0);
  const [funFact, setFunFact] = useState('');

  function roll() {
    setHasRolled(true);
    const roll = Math.floor(Math.random() * 20) + 1;
    setRolledNumber(roll);
    setFunFact(funFacts[roll - 1]);
  }

  return (
    <div className={styles.roller}>
      <div onClick={roll}>
        <Image src={d20} height="300px" width="300px" />
      </div>
      <div className={styles.rolledText}>
        {!hasRolled ? (
          <h2>Click the d20 to roll it!</h2>
        ) : (
          <>
            <h2>You rolled a {rolledNumber}! The d20 says...</h2>
            <h4>{funFact}</h4>
          </>
        )}
        <Button
          variant="outlined"
          onClick={() => {
            setIsRolling(false);
          }}
        >
          Close d20 Roller
        </Button>
      </div>
    </div>
  );
};

export default D20Roller;
