import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/D20Roller.module.css';
import funFacts from '../public/data/funFacts';
import { Button } from '@mui/material';
import d20 from '../public/images/d20Pic.png';

interface RollerProps {
  setShowRoller: Function;
}

const D20Roller: FC<RollerProps> = ({ setShowRoller }): JSX.Element => {
  const [hasRolled, setHasRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [rolledNumber, setRolledNumber] = useState(0);
  const [funFact, setFunFact] = useState(<></>);
  const [imgSrc, setImgSrc] = useState(d20);

  function roll() {
    setIsRolling(true);
    setHasRolled(true);
    const roll = Math.floor(Math.random() * 20) + 1;
    setRolledNumber(roll);
    setFunFact(funFacts[roll - 1].funFact);
    setImgSrc(funFacts[roll - 1].d20Pic);
    setTimeout(() => {
      setIsRolling(false);
    }, 500);
  }

  return (
    <div className={styles.roller}>
      <div onClick={roll} className={isRolling ? styles.d20Rolling : undefined}>
        <Image src={isRolling ? d20 : imgSrc} height="300px" width="300px" />
      </div>
      <div className={styles.rolledText}>
        {!hasRolled || isRolling ? (
          <h2>Click the d20 to roll it!</h2>
        ) : (
          <>
            <h2>You rolled a {rolledNumber}! The DM says...</h2>
            <h4>{funFact}</h4>
          </>
        )}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setShowRoller(false);
          }}
        >
          Close d20 Roller
        </Button>
      </div>
    </div>
  );
};

export default D20Roller;
