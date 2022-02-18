import { Button, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import uuid from 'uuid/dist/v4';
import { SubjectContext } from './contexts/subjectContext';
import useInputState from './hooks/useInputState';
import './styles/SubjectForm.css';

export function SubjectForm({ setShowSubjectForm }) {
  // stateful variables
  const { addSubject } = useContext(SubjectContext);
  const [newSubject, setNewSubject] = useState({});
  const [value, handleChange, isPristine] = useInputState('');

  // validators
  const isEmpty = value === '' && !isPristine;

  const subjectNameSubmit = (e) => {
    e.preventDefault();
    setNewSubject({ ...newSubject, name: value, id: uuid(), assignmentsCompleted: 0 });
  };

  const subjectSubmit = () => {
    addSubject(newSubject);
    setShowSubjectForm(false);
  };

  return (
    <>
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
          <Button className="SubjectForm-button" type="submit" variant="contained" disabled={isEmpty}>
            Add Class
          </Button>
        </form>
      ) : (
        <>
          <Typography className="typography">Add a class named {newSubject.name}?</Typography>
          <Button className="SubjectForm-button" onClick={subjectSubmit} variant="contained" color="secondary">
            Yes, Add Class
          </Button>
          <Button
            className="SubjectForm-button"
            onClick={() => {
              setNewSubject({});
              setShowSubjectForm(false);
            }}
            variant="contained"
            color="error"
          >
            No, Cancel
          </Button>
        </>
      )}
    </>
  );
}
