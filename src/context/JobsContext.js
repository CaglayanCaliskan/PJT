import {v4 as uuidv4} from 'uuid';
import {createContext, useEffect, useState} from 'react';
import JobsData from '../data/JobsData';
const JobsContext = createContext();

export const JobsProvider = ({children}) => {
  const [jobs, setJobs] = useState([]);
  // fake api call
  useEffect(() => {
    const data = LocalStorageCheck();

    if (data.length > 0) {
      //Ps: Ill change concat to spread operator
      setJobs(JobsData.concat(data));
    } else {
      setJobs(JobsData);
    }
  }, []);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  // delete func
  const handleDelete = (selectedItem) => {
    setJobs(jobs.filter((item) => item.id !== selectedItem.id));
    setOpenDeleteModal(!openDeleteModal);
  };

  //add func
  const handleAdd = (newJob) => {
    newJob.id = uuidv4();
    setJobs([newJob, ...jobs]);
    const data = LocalStorageCheck();
    data.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(data));
  };

  //edit done
  const handleEditSave = () => {
    setSelectedItem({...selectedItem, jobPriority: selectedItem.newPrio});
    handleOpenEditModal();

    setJobs(
      jobs.map(function (item) {
        if (item.id === selectedItem.id) {
          item.jobPriority = selectedItem.newPrio;
        }
        return item;
      })
    );
  };

  //Edit selection func
  const handleEdit = (e) => {
    setSelectedItem({
      ...selectedItem,
      newPrio: e.target.value,
    });
  };

  //Modal delete open func
  const handleOpenDeleteModal = (item) => {
    setOpenDeleteModal(!openDeleteModal);
    setSelectedItem(item);
  };

  //Modal Edit open func
  const handleOpenEditModal = (item) => {
    setOpenEditModal(!openEditModal);
    setSelectedItem(item);
  };

  //Local Storage Check

  const LocalStorageCheck = () => {
    let localData;
    if (localStorage.getItem('jobs') === null) {
      localData = [];
    } else {
      localData = JSON.parse(localStorage.getItem('jobs'));
    }
    return localData;
  };

  return (
    <JobsContext.Provider
      value={{
        jobs,
        handleDelete,
        handleAdd,
        openDeleteModal,
        handleOpenDeleteModal,
        selectedItem,
        setSelectedItem,
        handleOpenEditModal,
        openEditModal,
        handleEdit,
        handleEditSave,
        LocalStorageCheck,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
