import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { SubjectContext } from './contexts/subjectContext';
import { NavBarDialog } from './NavBarDialog';
import './styles/NavBar.css';

export function NavBar() {
  // stateful variables
  const { subjects } = useContext(SubjectContext);
  //   used to swtich between customize and delete dialogs
  const [dialogType, setDialogType] = useState('');

  return (
    <AppBar color="secondary" position="static" className="appbar">
      <Toolbar>
        <Typography color="inherit">Academic Tracker</Typography>
        <Button
          className="NavBar-button"
          onClick={() => {
            setDialogType('customize');
          }}
          variant="contained"
          color="primary"
        >
          Customize
        </Button>
        <Button
          className="NavBar-button"
          onClick={() => {
            setDialogType('delete');
          }}
          variant="contained"
          color="error"
          disabled={subjects.length === 0}
        >
          RESET
        </Button>
        {dialogType !== '' && <NavBarDialog dialogType={dialogType} setDialogType={setDialogType} />}
      </Toolbar>
    </AppBar>
  );
}
