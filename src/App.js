import './App.scss';
import {JobsProvider} from './context/JobsContext';

//components
import Header from './components/Header/Header';
import JobsForm from './components/JobsForm/JobsForm';
import JobsList from './components/JobsList/JobsList';

function App() {
  return (
    <JobsProvider>
      <div className='App'>
        <Header />
        <JobsForm />
        <JobsList />
      </div>
    </JobsProvider>
  );
}

export default App;
