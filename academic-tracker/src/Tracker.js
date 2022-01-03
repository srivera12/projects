import React, { useEffect, useState } from 'react';
import { TrackerForm } from './TrackerForm';
import { SubjectList } from './SubjectList';
import { Grid, Paper, AppBar, Toolbar, Typography, Button, TextField, List } from '@mui/material';
import useInputState from './useInputState';
import uuid from 'uuid/dist/v4';
import { emojisplosions } from 'emojisplosion';

export function Tracker() {
  const initialSubjects = JSON.parse(window.localStorage.getItem('subjects')) || [];
  const [subjects, setSubjects] = useState(initialSubjects);
  const [showAddForm, setShowAddForm] = useState(false);
  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };
  const decrementAssignments = (id) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, assignmentsLeft: subject.assignmentsLeft - 1 } : subject
    );
    setSubjects(updatedSubjects);
  };
  const resetSubjects = () => {
    setSubjects([]);
    window.location.reload();
  };
  const completeCelebration = (id) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, hasCelebrated: true } : subject
    );
    setSubjects(updatedSubjects);
  };
  useEffect(() => {
    window.localStorage.setItem('subjects', JSON.stringify(subjects));
    const incompleteSubjects = subjects.filter((subject) => subject.assignmentsLeft !== 0);
    if (subjects.length !== 0 && incompleteSubjects.length === 0) {
      emojisplosions();
    }
  }, [subjects]);
  return (
    <>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
          backgroundColor: '#fff',
        }}
        className="TodoApp"
      >
        <AppBar color="secondary" position="static" style={{ height: '64px' }}>
          <Toolbar>
            <Typography color="inherit">Academic Tracker</Typography>
            <Button
              onClick={resetSubjects}
              variant="contained"
              color="error"
              style={{ marginRight: '10px', marginLeft: 'auto' }}
            >
              RESET
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={6}>
            {subjects.length === 0 ? (
              <Typography variant="h4">Use the button below to start adding classes. Have a great week!</Typography>
            ) : null}
            <SubjectList
              subjects={subjects}
              decrementAssignments={decrementAssignments}
              completeCelebration={completeCelebration}
            />
            {showAddForm ? (
              <TrackerForm addSubject={addSubject} setShowAddForm={setShowAddForm} />
            ) : (
              <Button
                onClick={() => {
                  setShowAddForm(true);
                }}
                variant="contained"
                color="secondary"
                style={{ marginTop: '2rem' }}
              >
                Add A Class!!
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
