import React, { createContext, useEffect, useState } from 'react';
import CharacterProps from './CharacterInterface';
import axios from 'axios';

interface CharacterContextProps {
  isLoading: boolean;
  characters?: CharacterProps[];
  addCharacter?: Function;
  deleteCharacter?: Function;
  editCharacter?: Function;
  clearCharacters?: Function;
}

export const CharacterContext = createContext<CharacterContextProps>({ isLoading: true });

type ContextProps = {
  children: React.ReactNode;
};

export function CharacterProvider({ children }: ContextProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState();

  useEffect(() => {
    syncStateToDB();
  }, []);

  const syncStateToDB = () => {
    setIsLoading(true);
    axios
      .get('http://localhost:3001/characters')
      .then((res) => {
        setCharacters(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCharacter = (newCharacter: CharacterProps) => {
    axios
      .post('http://localhost:3001/characters', newCharacter)
      .then((res) => {
        console.log(res);
        syncStateToDB();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCharacter = (id: string) => {
    axios
      .delete(`http://localhost:3001/characters/${id}`)
      .then((res) => {
        console.log(res);
        syncStateToDB();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editCharacter = (id: string, updatedCharacter: CharacterProps) => {
    axios
      .patch(`http://localhost:3001/characters/${id}`, updatedCharacter)
      .then((res) => {
        console.log(res);
        syncStateToDB();
      })
      .catch((err) => {
        console.log(id, updatedCharacter);
        console.log(err);
      });
  };

  const clearCharacters = () => {
    axios
      .delete('http://localhost:3001/characters')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    syncStateToDB();
    window.location.reload();
  };

  return (
    <CharacterContext.Provider
      value={{ isLoading, characters, addCharacter, deleteCharacter, editCharacter, clearCharacters }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
