import { Button, Grid, Paper, Typography } from '@mui/material';
import { emojisplosions } from 'emojisplosion';
import React, { useContext, useEffect, useState } from 'react';
import { AssignmentDialog } from './AssignmentDialog';
import { CustomizationContext } from './contexts/customizationContext';
import { SubjectContext } from './contexts/subjectContext';
import { NavBar } from './NavBar';
import './styles/Tracker.css';
import { SubjectForm } from './SubjectForm';
import { SubjectList } from './SubjectList';

export function Tracker() {
  // stateful variables
  const { subjects, totalAssignments, hasStartedWeek } = useContext(SubjectContext);
  const { background } = useContext(CustomizationContext);
  const [showSubjectForm, setShowSubjectForm] = useState(false);
  const [showAssignmentDialog, setShowAssignmentDialog] = useState(totalAssignments === 0);

  const totalCompletedAssignments =
    subjects
      .map((subject) => subject.assignmentsCompleted)
      .reduce((a, b) => {
        return a + b;
      }) || 0;

  useEffect(() => {
    // saving subject list and background customizations in local storage
    window.localStorage.setItem('subjects', JSON.stringify(subjects));
    window.localStorage.setItem('totalAssignments', JSON.stringify(totalAssignments));
    window.localStorage.setItem('background', JSON.stringify(background));
    window.localStorage.setItem('hasStartedWeek', JSON.stringify(hasStartedWeek));
    // determining completion assignments for week
    if (totalCompletedAssignments === totalAssignments && hasStartedWeek === true) {
      emojisplosions();
    }
  }, [subjects, background, totalCompletedAssignments, totalAssignments, hasStartedWeek]);

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
        <AssignmentDialog
          showAssignmentDialog={showAssignmentDialog}
          setShowAssignmentDialog={setShowAssignmentDialog}
        />
        <Grid container justifyContent="center" className="grid-container">
          <Grid item xs={11} md={9} lg={7} className="grid-item">
            {/* list completed or not */}
            {totalCompletedAssignments === totalAssignments && hasStartedWeek === true && (
              <Typography variant="h3">YOU FINISHED EVERYTHING FOR THIS WEEK! FANTASTIC JOB!</Typography>
            )}
            {/* no subjects state */}
            {subjects.filter((subject) => subject.name === 'emptySubject').length === 1 ? (
              <Typography variant="h4">Use the buttons below to start adding classes. Have a great week!</Typography>
            ) : (
              <SubjectList totalCompletedAssignments={totalCompletedAssignments} />
            )}
            {/* adding classes or not */}
            {showSubjectForm ? (
              <SubjectForm setShowSubjectForm={setShowSubjectForm} />
            ) : (
              <>
                <Button
                  className="Tracker-button"
                  onClick={() => {
                    setShowSubjectForm(true);
                  }}
                  variant="contained"
                  color="secondary"
                  disabled={totalCompletedAssignments === totalAssignments && hasStartedWeek === true}
                >
                  Add A Class
                </Button>
                <Button
                  className="Tracker-button"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setShowAssignmentDialog(true);
                  }}
                >
                  Change Number of Assignments
                </Button>
              </>
            )}
            {totalAssignments !== 0 && (
              <Typography variant="subtitle1">
                You have completed {totalCompletedAssignments} out of {totalAssignments} assignments for the week.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
