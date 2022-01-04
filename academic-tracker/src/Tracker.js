import { AppBar, Button, Grid, Paper, Toolbar, Typography } from '@mui/material';
import { emojisplosions } from 'emojisplosion';
import React, { useContext, useEffect, useState } from 'react';
import { SubjectContext } from './subjectContext';
import { SubjectList } from './SubjectList';
import { TrackerForm } from './TrackerForm';

export function Tracker(props) {
  const { subjects, resetSubjects } = useContext(SubjectContext);
  const [showAddForm, setShowAddForm] = useState(false);
  const incompleteSubjects = subjects.filter((subject) => subject.assignmentsLeft !== 0);
  useEffect(() => {
    window.localStorage.setItem('subjects', JSON.stringify(subjects));
    if (subjects.length !== 0 && incompleteSubjects.length === 0) {
      emojisplosions();
    }
  }, [subjects, incompleteSubjects.length]);
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
            {subjects.length !== 0 && incompleteSubjects.length === 0 ? (
              <Typography variant="h3">YOU FINISHED EVERYTHING FOR THIS WEEK! FANTASTIC JOB!</Typography>
            ) : (
              <SubjectList />
            )}
            {showAddForm ? (
              <TrackerForm setShowAddForm={setShowAddForm} />
            ) : (
              <Button
                onClick={() => {
                  setShowAddForm(true);
                }}
                variant="contained"
                color="secondary"
                style={{ marginTop: '2rem' }}
                disabled={subjects.length !== 0 && incompleteSubjects.length === 0}
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
