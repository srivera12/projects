import { Button, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import uuid from 'uuid/dist/v4';
import { SubjectContext } from './contexts/subjectContext';
import useInputState from './hooks/useInputState';
import './styles/TrackerForm.css';

export function TrackerForm({ setShowAddForm }) {
  // stateful variables
  const { addSubject } = useContext(SubjectContext);
  const [newSubject, setNewSubject] = useState({});
  const [value, handleChange, reset, isPristine] = useInputState('');

  // validators
  const isEmpty = value === '' && !isPristine;
  const isNotNumber = value !== '' && isNaN(parseInt(value));

  const subjectNameSubmit = (e) => {
    e.preventDefault();
    setNewSubject({ ...newSubject, name: value, id: uuid() });
    reset();
  };
  const subjectAssignmentsSubmit = (e) => {
    e.preventDefault();
    setNewSubject({
      ...newSubject,
      assignments: parseInt(value),
      assignmentsLeft: parseInt(value),
      hasCelebrated: false,
    });
    reset();
  };
  // adds subject to state and closes form
  const addFullClass = () => {
    addSubject(newSubject);
    setShowAddForm(false);
  };

  return (
    <>
      {/* renders different forms based on what info is already known */}
      {!newSubject.name ? (
        <form onSubmit={subjectNameSubmit}>
          <TextField
            label={isEmpty ? 'Class must have a name.' : 'Class Name'}
            value={value}
            onChange={handleChange}
            fullWidth
            autoFocus
            error={isEmpty}
          />
          <Button className="TrackerForm-button" type="submit" variant="contained" disabled={isEmpty}>
            Add Class
          </Button>
        </form>
      ) : null}
      {newSubject.name && !newSubject.assignments ? (
        <form onSubmit={subjectAssignmentsSubmit}>
          <TextField
            label={
              isNotNumber || isEmpty ? 'You must enter a number here.' : `Number of Assignments for ${newSubject.name}`
            }
            value={value}
            onChange={handleChange}
            fullWidth
            autoFocus
            error={isNotNumber || isEmpty}
          />
          <Button className="TrackerForm-button" type="submit" variant="contained" disabled={isNotNumber || isEmpty}>
            Add Assignments
          </Button>
        </form>
      ) : null}
      {newSubject.name && newSubject.assignments ? (
        <>
          <Typography className="typography">
            Add a class named {newSubject.name} with {newSubject.assignments} assignments?
          </Typography>
          <Button className="TrackerForm-button" onClick={addFullClass} variant="contained" color="secondary">
            Finish Adding Class
          </Button>
          <Button
            className="TrackerForm-button"
            onClick={() => {
              setNewSubject({});
              setShowAddForm(false);
            }}
            variant="contained"
            color="error"
          >
            No, Cancel
          </Button>
        </>
      ) : null}
    </>
  );
}
