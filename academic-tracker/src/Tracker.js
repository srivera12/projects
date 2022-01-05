import { Button, Grid, Paper, Typography } from '@mui/material';
import { emojisplosions } from 'emojisplosion';
import React, { useContext, useEffect, useState } from 'react';
import { CustomizationContext } from './contexts/customizationContext';
import { SubjectContext } from './contexts/subjectContext';
import { NavBar } from './NavBar';
import './styles/Tracker.css';
import { SubjectList } from './SubjectList';
import { TrackerForm } from './TrackerForm';

export function Tracker() {
  // stateful variables
  const { subjects } = useContext(SubjectContext);
  const { background } = useContext(CustomizationContext);
  const [showAddForm, setShowAddForm] = useState(false);
  // this variable needs to be outside useEffect() so that it can be used below
  const incompleteSubjects = subjects.filter((subject) => subject.assignmentsLeft !== 0);

  useEffect(() => {
    // saving subject list and background customizations in local storage
    window.localStorage.setItem('subjects', JSON.stringify(subjects));
    window.localStorage.setItem('background', JSON.stringify(background));
    // determining completion of list
    if (subjects.length !== 0 && incompleteSubjects.length === 0) {
      emojisplosions();
    }
  }, [subjects, incompleteSubjects.length, background]);

  return (
    <>
      <Paper
        className="paper"
        style={{
          // dynamically styles background, and switches between color or image choices
          backgroundColor: background.type === 'color' ? background.color : 'transparent',
          backgroundImage: background.type === 'image' ? `url(${background.image})` : null,
        }}
      >
        <NavBar />
        <Grid container justifyContent="center" className="grid-container">
          <Grid item xs={11} md={8} lg={6} className="grid-item">
            {/* no subjects state */}
            {subjects.length === 0 ? (
              <Typography variant="h4">Use the button below to start adding classes. Have a great week!</Typography>
            ) : null}
            {/* list completed or not */}
            {subjects.length !== 0 && incompleteSubjects.length === 0 ? (
              <Typography variant="h3">YOU FINISHED EVERYTHING FOR THIS WEEK! FANTASTIC JOB!</Typography>
            ) : (
              <SubjectList />
            )}
            {/* adding classes or not */}
            {showAddForm ? (
              <TrackerForm setShowAddForm={setShowAddForm} />
            ) : (
              <Button
                className="Tracker-button"
                onClick={() => {
                  setShowAddForm(true);
                }}
                variant="contained"
                color="secondary"
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
