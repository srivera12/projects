import React, { createContext, useState } from 'react';

export const CustomizationContext = createContext();

export function CustomizationProvider(props) {
  // checking local storage, as well as establishing basic/starting style options
  const initialBackground = JSON.parse(window.localStorage.getItem('background')) || {
    type: 'color',
    color: 'white',
    image: null,
  };

  //   creating stateful variable
  const [background, setBackground] = useState(initialBackground);

  return (
    <CustomizationContext.Provider value={{ background, setBackground }}>
      {props.children}
    </CustomizationContext.Provider>
  );
}
