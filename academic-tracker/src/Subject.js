import { Button, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import confetti from 'canvas-confetti';
import React, { useCallback, useContext, useEffect } from 'react';
import { SubjectContext } from './subjectContext';

export function Subject({ name, id, assignmentsLeft, hasCelebrated }) {
  const { decrementAssignments, completeCelebration } = useContext(SubjectContext);
  const celebrate = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }, []);
  useEffect(() => {
    if (assignmentsLeft === 0 && !hasCelebrated) {
      celebrate();
      completeCelebration(id);
    }
  }, [assignmentsLeft, celebrate, completeCelebration, hasCelebrated, id]);
  return (
    <ListItem>
      {assignmentsLeft !== 0 ? (
        <>
          <ListItemText>{name}</ListItemText>
          <ListItemSecondaryAction>
            <Button
              variant="contained"
              onClick={() => {
                decrementAssignments(id);
              }}
            >
              {assignmentsLeft} Left!
            </Button>
          </ListItemSecondaryAction>
        </>
      ) : (
        <ListItemText>{name} is Complete. Great job!</ListItemText>
      )}
    </ListItem>
  );
}
