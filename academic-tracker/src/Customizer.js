import { Button, DialogContent, DialogContentText, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { SwatchesPicker } from 'react-color';
import { CustomizationContext } from './contexts/customizationContext';
import useInputState from './hooks/useInputState';
import './styles/Customizer.css';

export function Customizer({ setDialogType }) {
  // stateful variables
  const { background, setBackground } = useContext(CustomizationContext);
  const [value, handleChange] = useInputState('');

  //  setDialogType below "closes" the Dialog
  const changeBackgroundColor = (color, event) => {
    setBackground({ ...background, color: color.hex });
    setDialogType('');
  };
  const changeBackgroundImage = () => {
    setBackground({ ...background, image: value });
    setDialogType('');
  };

  return (
    <>
      {/* renders either color selector or image selector */}
      {background.type === 'color' ? (
        <SwatchesPicker onChangeComplete={changeBackgroundColor} />
      ) : (
        <DialogContent>
          <DialogContentText>You can add any background image by entering the image URL below:</DialogContentText>
          <TextField
            className="text-field"
            label="Image URL"
            value={value}
            onChange={handleChange}
            fullWidth
            autoFocus
          />
          <Button variant="contained" color="secondary" onClick={changeBackgroundImage}>
            Change Background Image
          </Button>
        </DialogContent>
      )}
    </>
  );
}
