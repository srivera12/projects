import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { SubjectContext } from './contexts/subjectContext';
import useInputState from './hooks/useInputState';
import './styles/AssignmentDialog.css';

export function AssignmentDialog({ showAssignmentDialog, setShowAssignmentDialog }) {
  // stateful variables
  const { setTotalAssignments } = useContext(SubjectContext);
  const [numOfAssignments, setNumOfAssignments] = useState('');
  const [value, handleChange, isPristine] = useInputState('');

  // validators
  const isEmpty = value === '' && !isPristine;
  const isNotNumber = value !== '' && isNaN(parseInt(value));

  const assignmentNumberSubmit = (e) => {
    e.preventDefault();
    setNumOfAssignments(parseInt(value));
  };

  const totalAssignmentSubmit = () => {
    setTotalAssignments(numOfAssignments);
    setShowAssignmentDialog(false);
  };

  return (
    <Dialog open={showAssignmentDialog}>
      <DialogTitle>Set Number of Assignments to Complete for This Week</DialogTitle>
      <DialogContent>
        {numOfAssignments === '' ? (
          <form onSubmit={assignmentNumberSubmit} className="AssignmentDialog-form">
            <TextField
              label={
                isEmpty || isNotNumber
                  ? 'Must Enter a Number of Assignments'
                  : 'Number of Assignments to Complete This Week'
              }
              value={value}
              onChange={handleChange}
              fullWidth
              autoFocus
              error={isEmpty || isNotNumber}
            />
            <Button className="SubjectForm-button" type="submit" variant="contained" disabled={isEmpty}>
              Set Assignment Number
            </Button>
          </form>
        ) : (
          <>
            <Typography className="typography">Set a total of {numOfAssignments} assignments for this week?</Typography>
            <Button
              className="SubjectForm-button"
              onClick={totalAssignmentSubmit}
              variant="contained"
              color="secondary"
            >
              Yes, Set Assignments
            </Button>
            <Button
              className="SubjectForm-button"
              onClick={() => {
                setNumOfAssignments('');
              }}
              variant="contained"
              color="error"
            >
              No, Cancel
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
