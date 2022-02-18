import { Button, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import React, { useContext } from 'react';
import { SubjectContext } from './contexts/subjectContext';
import './styles/Subject.css';

export function Subject({ name, id, assignmentsCompleted, totalCompletedAssignments }) {
  const { completeAssignment, removeAssignment, totalAssignments } = useContext(SubjectContext);

  return (
    <ListItem alignItems="flex-start">
      <ListItemText>{name}</ListItemText>

      <ListItemSecondaryAction>
        <Button
          variant="contained"
          onClick={() => {
            completeAssignment(id);
          }}
          color="success"
          className="Subject-button"
          disabled={totalCompletedAssignments === totalAssignments}
        >
          Add
        </Button>
        {assignmentsCompleted} completed
        <Button
          variant="contained"
          onClick={() => {
            removeAssignment(id);
          }}
          color="error"
          className="Subject-button"
          disabled={assignmentsCompleted === 0 || totalCompletedAssignments === totalAssignments}
        >
          Remove
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
