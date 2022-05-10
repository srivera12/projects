import { EuiPage, EuiPageBody, EuiPageContent, EuiPageHeader, EuiSpacer, EuiText } from '@elastic/eui';
import React, { useContext, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import '../styles/App.css';
import { CharacterContext } from '../utils/CharacterContext';
import CharacterForm from './CharacterForm';
import axios from 'axios';

function App() {
  const { isLoading, characters } = useContext(CharacterContext);

  //   useEffect(() => {
  //     window.localStorage.setItem('characters', JSON.stringify(characters));
  //     axios
  //       .get('http://localhost:3001/test')
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [characters]);

  return (
    <>
      <EuiPage paddingSize="none" className="App">
        <EuiPageBody>
          <EuiPageHeader iconType="documents" pageTitle="DnD Character Archive">
            <EuiPageContent>
              {isLoading ? (
                <EuiText>Loading...</EuiText>
              ) : characters && characters.length === 0 ? (
                <EuiText>No characters saved yet! Use the form below to start saving your character ideas.</EuiText>
              ) : (
                <CharacterList />
              )}
              <EuiSpacer size="xl" />
              <CharacterForm isEdit={false} />
            </EuiPageContent>
          </EuiPageHeader>
        </EuiPageBody>
      </EuiPage>
    </>
  );
}

export default App;
