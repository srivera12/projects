import { Button, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import uuid from 'uuid/dist/v4';
import { SubjectContext } from './subjectContext';
import useInputState from './useInputState';

export function TrackerForm({ setShowAddForm }) {
  const { addSubject } = useContext(SubjectContext);
  const [newSubject, setNewSubject] = useState({});
  const [value, handleChange, reset] = useInputState('');
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
  const addFullClass = () => {
    addSubject(newSubject);
    setShowAddForm(false);
  };
  return (
    <>
      {!newSubject.name ? (
        <form onSubmit={subjectNameSubmit}>
          <TextField label="Class Name" value={value} onChange={handleChange} fullWidth autoFocus />
          <Button type="submit" variant="contained" style={{ margin: '10px' }}>
            Add Class
          </Button>
        </form>
      ) : null}
      {newSubject.name && !newSubject.assignments ? (
        <form onSubmit={subjectAssignmentsSubmit}>
          <TextField
            label={`Number of Assignments for ${newSubject.name}`}
            value={value}
            onChange={handleChange}
            fullWidth
            autoFocus
          />
          <Button type="submit" variant="contained" style={{ margin: '10px' }}>
            Add Assignments
          </Button>
        </form>
      ) : null}
      {newSubject.name && newSubject.assignments ? (
        <>
          <Typography style={{ marginBottom: '10px' }}>
            Add a class named {newSubject.name} with {newSubject.assignments} assignments?
          </Typography>
          <Button onClick={addFullClass} variant="contained" color="secondary">
            Finish Adding Class
          </Button>
          <Button
            onClick={() => {
              setNewSubject({});
            }}
            variant="contained"
            color="error"
            style={{ marginLeft: '10px' }}
          >
            No, Cancel
          </Button>
        </>
      ) : null}
    </>
  );
}
