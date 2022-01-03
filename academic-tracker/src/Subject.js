import { Button, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

export function Subject({ name, id, assignmentsLeft, decrementAssignments, hasCelebrated, completeCelebration }) {
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
  }, [assignmentsLeft]);
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
