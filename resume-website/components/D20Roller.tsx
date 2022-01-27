import React, { FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/D20Roller.module.css';
import funFacts from '../public/data/funFacts';
import { Button } from '@mui/material';
import d20 from '../public/images/d20Pic.png';
import { IsMobileContext } from '../contexts/isMobileContext';

const D20Roller: FC = (): JSX.Element => {
  const { isMobile } = useContext(IsMobileContext);
  const [hasRolled, setHasRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [rollText, setRollText] = useState(<></>);
  const [rollState, setRollState] = useState({ rolledNumber: 0, funFact: <></>, imgSrc: d20 });

  useEffect(() => {
    if (isRolling) {
      setRollText(
        <>
          <h2>The DM awaits your roll...</h2>
        </>
      );
    } else if (!hasRolled && !isRolling) {
      setRollText(
        <>
          <h1>Click the d20 to roll it!</h1>
        </>
      );
    } else if (hasRolled && !isRolling) {
      setRollText(
        <>
          <h2>You rolled a {rollState.rolledNumber}! The DM says...</h2>
          <h4>{rollState.funFact}</h4>
        </>
      );
    }
  }, [isRolling, hasRolled]);

  function roll() {
    setIsRolling(true);
    setHasRolled(true);
    const roll = Math.floor(Math.random() * 20) + 1;
    const rollResult = funFacts.filter((fact) => fact.rolledNumber === roll);
    setRollState({
      rolledNumber: rollResult[0].rolledNumber,
      funFact: rollResult[0].funFact,
      imgSrc: rollResult[0].d20Pic,
    });
    setTimeout(() => {
      setIsRolling(false);
    }, 500);
  }

  return (
    <div className={!isMobile ? styles.roller : styles.mobileRoller}>
      <div className={isRolling || !hasRolled ? styles.preRolledText : styles.rolledText}>{rollText}</div>
      <div onClick={roll} className={isRolling ? styles.d20Rolling : undefined}>
        <Image src={isRolling ? d20 : rollState.imgSrc} height="300px" width="300px" />
      </div>
    </div>
  );
};

export default D20Roller;
