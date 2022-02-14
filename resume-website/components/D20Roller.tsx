import React, { FC, useContext, useEffect, useState } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';
import funFacts from '../public/data/funFacts';
import styles from '../styles/D20Roller.module.css';

const D20Roller: FC = (): JSX.Element => {
  const { isMobile } = useContext(IsMobileContext);
  const [hasRolled, setHasRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [rollText, setRollText] = useState(<></>);
  const [rollState, setRollState] = useState({ rolledNumber: 0, funFact: <></>, imgSrc: '/images/d20Pic.png' });

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
          <h1>Click the d20 to roll!</h1>
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
  }, [isRolling, hasRolled, rollState.funFact, rollState.rolledNumber]);

  function roll() {
    const forcedRoll: object | undefined = window['Cypress' as any]?.['d20_roll' as any];
    setIsRolling(true);
    setHasRolled(true);
    const roll = forcedRoll ? forcedRoll : Math.floor(Math.random() * 20) + 1;
    const rollResult = funFacts.find((fact) => fact.rolledNumber === roll);
    if (rollResult) {
      setRollState({
        rolledNumber: rollResult.rolledNumber,
        funFact: rollResult.funFact,
        imgSrc: rollResult.d20PicPath,
      });
      setTimeout(() => {
        setIsRolling(false);
      }, 500);
    }
  }

  return (
    <div className={`${styles.roller} ${isMobile && styles.mobileRoller}`}>
      <div className={isRolling || !hasRolled ? styles.preRolledText : styles.rolledText}>{rollText}</div>
      <div onClick={roll} className={isRolling ? styles.d20Rolling : undefined} data-cy="d20">
        <img
          src={isRolling ? '/images/d20Pic.png' : rollState.imgSrc}
          alt={`20-sided die displaying the number ${rollState.rolledNumber}`}
          data-cy="d20-img"
        />
      </div>
    </div>
  );
};

export default D20Roller;
