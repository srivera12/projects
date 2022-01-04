import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { SubjectContext } from './subjectContext';

export function NavBar() {
  const { subjects, resetSubjects } = useContext(SubjectContext);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const handleOpen = () => {
    setShowDeleteDialog(true);
  };
  const handleClose = () => {
    setShowDeleteDialog(false);
  };
  const resetAndClose = () => {
    resetSubjects();
    handleClose();
  };
  return (
    <AppBar color="secondary" position="static" style={{ height: '64px' }}>
      <Toolbar>
        <Typography color="inherit">Academic Tracker</Typography>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="error"
          style={{ marginRight: '10px', marginLeft: 'auto' }}
          disabled={subjects.length === 0}
        >
          RESET
        </Button>
        <Dialog onClose={handleClose} open={showDeleteDialog}>
          <DialogTitle>Are you sure you want to reset?</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ marginBottom: '10px' }}>This action cannot be undone.</DialogContentText>
            <Button variant="contained" color="secondary" onClick={resetAndClose}>
              Yes, reset
            </Button>
            <Button variant="contained" color="error" onClick={handleClose} style={{ marginLeft: '10px' }}>
              No, cancel
            </Button>
          </DialogContent>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}
