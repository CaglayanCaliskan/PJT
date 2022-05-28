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
      setJobs([...JobsData, ...data]);
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
    const data = LocalStorageCheck();
    data.forEach((item, index) => {
      if (item.id === selectedItem.id) {
        data.splice(index, 1);
        localStorage.setItem('jobs', JSON.stringify(data));
      }
    });
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
    handleOpenEditModal();
    setSelectedItem({...selectedItem, jobPriority: selectedItem.newPrio});
    const data = LocalStorageCheck();

    setJobs(
      jobs.map((item) => {
        if (item.id === selectedItem.id) {
          item.jobPriority = selectedItem.newPrio;
        }

        return item;
      })
    );
    //for local update
    data.forEach((item, index) => {
      if (item.id === selectedItem.id) {
        data[index].jobPriority = selectedItem.newPrio;
      }
    });
    localStorage.setItem('jobs', JSON.stringify(data));
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
