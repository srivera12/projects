import { SubjectProvider } from './subjectContext';
import { Tracker } from './Tracker';

function App() {
  return (
    <div className="App">
      <SubjectProvider>
        <Tracker />
      </SubjectProvider>
    </div>
  );
}

export default App;
