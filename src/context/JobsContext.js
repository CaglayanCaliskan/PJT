import {createContext} from 'react';
const JobsContext = createContext();

export const JobsProvider = ({children}) => {
  const ates = () => {
    console.log('ateste');
  };
  return <JobsContext.Provider value={ates}>{children}</JobsContext.Provider>;
};

export default JobsContext;
