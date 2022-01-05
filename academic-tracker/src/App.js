import { CustomizationProvider } from './contexts/customizationContext';
import { SubjectProvider } from './contexts/subjectContext';
import { Tracker } from './Tracker';

function App() {
  return (
    <div className="App">
      <CustomizationProvider>
        <SubjectProvider>
          <Tracker />
        </SubjectProvider>
      </CustomizationProvider>
    </div>
  );
}

export default App;
